import { useEffect, useState, useRef, useMemo } from 'react';
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
  StackDivider,
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
import StackedButton from '../ui/StackedButton';
import {
  IoShuffle as ShuffleIcon,
  IoSettingsSharp as SettingsIcon,
  IoShirtSharp as PlayerIcon,
  IoTimeSharp as TimerIcon,
} from 'react-icons/io5';
import useCountdownTimer from '../hooks/useCountdownTimer';

function Countdown() {
  const timer = useCountdownTimer({ s: 5 });

  useMemo(() => {
    if (timer.isRunning) return;
    timer.start();
  }, [timer.start, timer.isRunning]);

  console.log(timer.currentTime.ms);

  return [
    timer.currentTime.s,
    '.',
    Math.round(timer.currentTime.ms / 100),
  ];
}

const Stopwatch = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isRunning, setIsRunning] = useBoolean();

  return (
    <>
      <StackedButton
        variant="ghost"
        TopIcon={TimerIcon}
        onClick={onOpen}
        label="Timer"
      />

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent m={4}>
          <ModalHeader>Stopwatch</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Countdown />
          </ModalBody>

          <ModalFooter>
            <Button
              // onClick={confirmReset ? handleReset : setConfirmReset.on}
              mr={3}
              size="sm"
              variant="ghost"
              colorScheme="red"
            >
              Reset
            </Button>

            <Button
              onClick={setIsRunning.toggle}
              mr={3}
              colorScheme="blue"
            >
              Start
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Stopwatch;
