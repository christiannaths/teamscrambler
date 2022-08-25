import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  HStack,
  IconButton,
  Icon,
  Input,
  useBoolean,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {
  IoShirt,
  IoTrash as RemoveIcon,
  IoCloseCircle as ClearIcon,
} from 'react-icons/io5';
import {
  RiPushpin2Fill as PinnedIcon,
  RiPushpinLine as UnpinnedIcon,
} from 'react-icons/ri';
import { motion } from 'framer-motion';

function Player({
  id,
  name,
  showGamesPlayed,
  gamesPlayed,
  isPinned,
  color,
  onChange,
  onDelete,
  onPinPlayer,
  onUnPinPlayer,
}) {
  const inputRef = useRef(null);
  const [value, setValue] = useState(name);
  const [isDeleting, setIsDeleting] = useBoolean(false);
  const [deleteOpacity, setDeleteOpacity] = useState(0);
  const [isFocused, setIsFocused] = useBoolean(false);
  const [isClearable, setIsClearable] = useBoolean(false);

  function handleSubmit() {
    if (value === name) return;
    if (!value) return setValue(name);
    return onChange(id, value);
  }

  return (
    <Box
      borderWidth="1px"
      mt="-1px"
      bg="gray.100"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bg: `red.500`,
        opacity: deleteOpacity,
      }}
    >
      <IconButton
        position="absolute"
        right={3}
        top="6px"
        variant="ghost"
        size="sm"
        fontSize="lg"
        icon={<RemoveIcon />}
        color="white"
        onClick={() => (isDeleting ? onDelete(id) : null)}
      />

      <HStack
        bg="white"
        px={4}
        py={1}
        spacing={4}
        zIndex="2"
        position="relative"
        left={`${isDeleting ? '-60px' : '0'}`}
        as={motion.div}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0.5, right: 0.01 }}
        onDrag={(_, info) => setDeleteOpacity(info.offset.x / -200)}
        onDragEnd={evt => {
          const rect = evt.target.getBoundingClientRect();
          if (rect.x <= -60) setIsDeleting.on();
        }}
      >
        <Box>
          <Icon as={IoShirt} color={color} />
        </Box>
        <InputGroup>
          <Input
            ref={inputRef}
            variant="unstyled"
            value={value}
            onChange={evt => {
              setValue(evt.target.value);
              if (!evt.target.value) return setIsClearable.off();
              return setIsClearable.on();
            }}
            onBlur={() => {
              handleSubmit();
              setIsFocused.off();

              setTimeout(() => {
                setIsClearable.off();
              }, 200);
            }}
            onFocus={evt => {
              setIsFocused.on();

              if (!evt.target.value) return;

              setTimeout(() => {
                setIsClearable.on();
              }, 200);
            }}
            py={1}
            px={2}
            bg="white"
            borderWidth="2px"
            borderColor="transparent"
            _focus={{
              borderColor: 'gray.300',
            }}
          />
          {isClearable && (
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                color="gray.500"
                transform="translateY(-2px)"
                icon={<ClearIcon />}
                _hover={{
                  bg: 'transparent',
                }}
                _active={{
                  bg: 'transparent',
                }}
                onClick={() => {
                  console.log('foo');
                  inputRef.current.focus();
                  setValue('');
                }}
              />
            </InputRightElement>
          )}
        </InputGroup>
        {showGamesPlayed && <Text fontSize="xs">GP:&nbsp;{gamesPlayed}</Text>}

        <Box px={6}></Box>

        <IconButton
          variant="ghost"
          size="sm"
          fontSize="lg"
          icon={isPinned ? <PinnedIcon /> : <UnpinnedIcon />}
          color={isPinned ? 'gray.700' : 'gray.300'}
          onClick={() => (isPinned ? onUnPinPlayer(id) : onPinPlayer(id))}
        />
        {isDeleting && (
          <Button
            variant="ghost"
            size="sm"
            color="gray.500"
            onClick={setIsDeleting.off}
          >
            Cancel
          </Button>
        )}
      </HStack>
    </Box>
  );
}

Player.defaultProps = {};

Player.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Player;
