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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useBoolean,
} from '@chakra-ui/react';
import { IoSettingsSharp } from 'react-icons/io5';
import NumberField from '../ui/NumberField';
import StackedButton from '../ui/StackedButton';

function AppMenu({
  teamSize,
  playerCount,
  teamCount,
  onChangeTeamSize,
  onChangeTeamCount,
  onChangePlayerCount,
  onReset,
  maxTeamCount,
  ButtonIcon,
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [confirmReset, setConfirmReset] = useBoolean();

  function handleReset() {
    setConfirmReset.off();
    onClose();
    onReset();
  }

  return (
    <>
      <StackedButton
        onClick={onOpen}
        variant="ghost"
        TopIcon={ButtonIcon}
        label="Settings"
      />

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent m={4}>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="stretch">
              <NumberField
                label="Number of Players"
                value={playerCount}
                onChange={onChangePlayerCount}
                min={0}
              />
              <NumberField
                label="Number of Teams"
                value={teamCount}
                onChange={onChangeTeamCount}
                min={1}
                max={maxTeamCount}
              />
              <NumberField
                label="Team Size"
                value={teamSize}
                onChange={onChangeTeamSize}
                min={1}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={confirmReset ? handleReset : setConfirmReset.on}
              mr={3}
              size="sm"
              variant="ghost"
              color={confirmReset ? 'red.500' : ''}
            >
              {confirmReset
                ? 'Reset all settings and players?'
                : 'Reset'}
            </Button>
            <Button
              size="sm"
              onClick={confirmReset ? setConfirmReset.off : onClose}
              colorScheme={confirmReset ? 'gray' : 'blue'}
            >
              {confirmReset ? 'Cancel' : 'Done'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

AppMenu.defaultProps = {
  onReset: () => {},
};

AppMenu.propTypes = {
  teamSize: PropTypes.number.isRequired,
  playerCount: PropTypes.number.isRequired,
  teamCount: PropTypes.number.isRequired,
};

export default AppMenu;
