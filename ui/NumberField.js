import React from 'react';
import PropTypes from 'prop-types';
import {
  HStack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function NumberField({ label, value, onChange, min, max }) {
  return (
    <HStack spacing={4} justify="space-between" align="center">
      <Text>{label}</Text>
      <NumberInput
        value={value}
        min={min}
        max={max}
        size="sm"
        maxW={24}
        onChange={onChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
}

NumberField.defaultProps = {
  min: 2,
  max: 200,
};

NumberField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default NumberField;
