// chakra
import {
  Text,
  RadioGroup,
  Stack,
  Radio as RadioButton,
} from "@chakra-ui/react";

export const RadioInput = ({ value, setValue, buttonOne, buttonTwo }) => {
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack spacing={1} direction="row">
        <RadioButton size="sm" colorScheme="gray" value="1">
          <Text fontSize="9px"> {buttonOne}</Text>
        </RadioButton>
        <RadioButton size="sm" colorScheme="gray" value="2">
          <Text fontSize="9px"> {buttonTwo}</Text>
        </RadioButton>
      </Stack>
    </RadioGroup>
  );
};
