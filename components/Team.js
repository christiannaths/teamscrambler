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
    <div>
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Box
        w="100%"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
      >
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {players.map(player => (
            <Box key={player.id}>
              <HStack>
                <Icon as={IoShirt} />
                <Box fontWeight="bold">{player.name}</Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </div>
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
