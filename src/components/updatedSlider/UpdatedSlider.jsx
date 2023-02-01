// react
import React from "react";

// chakra
import {
  Flex,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

// common
import { styles } from "./UpdetadeSliderStyle";

export const UpdatedSlider = ({ name, size, setValue }) => {
  const checkedValue = size < 1000 ? size : 1000;

  const setStorageAndTransferVal = (value) => setValue(value);

  return (
    <Flex style={styles.wrapper}>
      <Flex style={styles.headerInput}>
        <Text style={styles.headerInputText}>{name}:</Text>
        <NumberInput
          variant="unstyled"
          defaultValue={0}
          onChange={setStorageAndTransferVal}
          value={checkedValue}
        >
          <NumberInputField style={styles.inputField} />
        </NumberInput>
        <Text style={styles.headerInputText}>GB</Text>
      </Flex>
      <Slider
        defaultValue={0}
        onChange={setStorageAndTransferVal}
        focusThumbOnChange={false}
        value={size}
        min={0}
        max={1000}
      >
        <SliderTrack boxSize="7px" bg="gray.200">
          <SliderFilledTrack bg="gray" />
        </SliderTrack>
        <SliderThumb bg="black" />
      </Slider>
      <Flex style={styles.sliderInfo}>
        <Text style={styles.sliderInfoMin}>0 GB</Text>
        <Text style={styles.sliderInfoMax}>1000 GB</Text>
      </Flex>
    </Flex>
  );
};
