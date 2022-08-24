import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Container,
  Box,
  StackDivider,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { IoShirt } from 'react-icons/io5';

function Team({ name, players }) {
  return (
    <Box mt={4}>
      <Heading
        as="h3"
        size="xs"
        mb={2}
        fontWeight="semibold"
        textTransform="uppercase"
      >
        {name}
      </Heading>

      {players.map(player => (
        <Box
          key={player.id}
          p={4}
          borderWidth="1px"
          mt="-1px"
          bg="white"
        >
          <HStack>
            <Icon as={IoShirt} />
            <Box fontWeight="bold">{player.name}</Box>
          </HStack>
        </Box>
      ))}
    </Box>
  );
}

Team.defaultProps = {
  players: [],
};

Team.propTypes = {
  name: PropTypes.string,
  players: PropTypes.array,
};

export default Team;
