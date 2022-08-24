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
import { IoShirt, IoCloseOutline as RemoveIcon } from 'react-icons/io5';

function Player({
  id,
  name,
  showGamesPlayed,
  gamesPlayed,
  color,
  onChange,
  onDelete,
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
            icon={<RemoveIcon />}
            onClick={setIsDeleting.on}
          ></IconButton>
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
