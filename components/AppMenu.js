import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Container,
  Box,
  Divider,
  VStack,
  HStack,
  IconButton,
  Button,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
} from '@chakra-ui/react';
import { IoShuffle, IoSettingsSharp } from 'react-icons/io5';

function AppMenu({ teamSize, onChangeTeamSize }) {
  const initialFocusRef = React.useRef();
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  return (
    <Popover
      placement="top-start"
      initialFocusRef={initialFocusRef}
      closeOnBlur={false}
      isOpen={isOpen}
    >
      <PopoverTrigger>
        <IconButton onClick={onOpen} icon={<IoSettingsSharp />} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Settings</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4} justify="space-between" align="center">
              <Text fontWeight="bold">Team Size</Text>
              <NumberInput
                value={teamSize}
                min={2}
                max={200}
                size="sm"
                maxW={24}
                onChange={onChangeTeamSize}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </VStack>
        </PopoverBody>
        <PopoverFooter
          border="1"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Button variant="outline" size="sm">
            Reset
          </Button>

          <Button
            onClick={onClose}
            colorScheme="blue"
            ref={initialFocusRef}
          >
            Done
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

AppMenu.defaultProps = {};

AppMenu.propTypes = {
  children: PropTypes.any,
};

export default AppMenu;
