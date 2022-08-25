import PropTypes from 'prop-types';
import { VStack, Button, Text } from '@chakra-ui/react';

function StackedButton({ variant, onClick, TopIcon, BottomIcon, label, ...rest }) {
  return (
    <Button onClick={onClick} variant={variant} {...rest}>
      <VStack>
        {TopIcon && <TopIcon />}
        {label && <Text fontSize="xs">{label}</Text>}
        {BottomIcon && <BottomIcon />}
      </VStack>
    </Button>
  );
}

StackedButton.defaultProps = {};

StackedButton.propTypes = {};

export default StackedButton;
