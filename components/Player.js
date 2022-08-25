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
} from '@chakra-ui/react';
import {
  IoShirt,
  IoRemoveCircleOutline as RemoveIcon,
} from 'react-icons/io5';
import {
  RiPushpin2Fill as PinnedIcon,
  RiPushpinLine as UnpinnedIcon,
} from 'react-icons/ri';

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
  const [value, setValue] = useState(name);
  const [isDeleting, setIsDeleting] = useBoolean(false);

  function handleSubmit() {
    if (value === name) return;
    if (!value) return setValue(name);
    return onChange(id, value);
  }

  return (
    <Box px={4} py={2} borderWidth="1px" mt="-1px" bg="white">
      <HStack>
        <Icon as={IoShirt} color={color} />
        <Input
          variant="unstyled"
          value={value}
          onChange={evt => setValue(evt.target.value)}
          onBlur={handleSubmit}
        />
        {showGamesPlayed && (
          <Text fontSize="xs">GP:&nbsp;{gamesPlayed}</Text>
        )}

        <IconButton
          variant="ghost"
          size="sm"
          fontSize="lg"
          icon={isPinned ? <PinnedIcon /> : <UnpinnedIcon />}
          color={isPinned ? 'gray.700' : 'gray.300'}
          onClick={() =>
            isPinned ? onUnPinPlayer(id) : onPinPlayer(id)
          }
        />
        {isDeleting ? (
          <>
            <Button
              variant="ghost"
              size="sm"
              colorScheme="red"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
            <Button
              variant="ghost"
              size="sm"
              opacity="0.33"
              onClick={setIsDeleting.off}
            >
              Cancel
            </Button>
          </>
        ) : (
          <IconButton
            variant="ghost"
            size="sm"
            fontSize="lg"
            color="gray.400"
            icon={<RemoveIcon />}
            onClick={setIsDeleting.on}
          />
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
