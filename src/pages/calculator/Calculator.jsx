// react
import React from "react";

// chakra
import { Flex, useBreakpointValue } from "@chakra-ui/react";

// common
import { UpdatedSlider } from "../../components/updatedSlider/UpdatedSlider";
import { BarChart } from "../../components/barChart/BarChart";
import { providerInfo } from "../../data/providerInfo";
import { Provider } from "../../components/provider/Provider";
import { RadioInput } from "../../components/radio/RadioInput";
import { breakpointStyles, styles } from "./CalculatorStyle";
import { breakpoints } from "../../style/breakpoints";

export const Calculator = () => {
  const [storageVal, setStorageVal] = React.useState(0);

  const [transferVal, setTransferVal] = React.useState(0);

  const [bunnyOption, setBunnyOption] = React.useState("1");

  const [scalewayOption, setScalewayOption] = React.useState("1");

  const breakpoint = useBreakpointValue(breakpoints) || breakpoints.md;

  // Counting the values of each bar chart
  providerInfo.forEach((i) => {
    if (i.name === "backblaze") {
      i.value = i.priceStorage * storageVal + i.priceTransfer * transferVal;
    }
    if (i.name === "vultr") {
      i.value = i.priceStorage * storageVal + i.priceTransfer * transferVal;
    }
    if (i.name === "bunny") {
      i.value =
        bunnyOption === "1"
          ? i.priceStorage.HDD * storageVal + i.priceTransfer * transferVal
          : i.priceStorage.SSD * storageVal + i.priceTransfer * transferVal;
    }
    if (i.name === "scaleway") {
      i.value =
        scalewayOption === "1"
          ? i.priceStorage.Multi * (storageVal - 75) +
            i.priceTransfer * (transferVal - 75)
          : i.priceStorage.Single * (storageVal - 75) +
            i.priceTransfer * (transferVal - 75);
    }
  });

  // Reassignment of values if after calculation they are less or more than their min or max values
  providerInfo.forEach((i) => {
    if (i.name === "backblaze") i.value = i.value < 7 ? 7 : i.value;
    if (i.name === "bunny") i.value = i.value > 10 ? 10 : i.value;
    if (i.name === "vultr") i.value = i.value < 5 ? 5 : i.value;
    if (i.name === "scaleway") i.value = i.value < 0 ? 0 : i.value;
  });

  // Display diagram
  const renderDiagram = providerInfo.map((i, index) => {
    // Assigning radio buttons with specific values and for specific columns
    const renderRadioButton = () => {
      return i.name === "bunny" || i.name === "scaleway" ? (
        <RadioInput
          buttonOne={i.name === "bunny" ? "HDD" : "Multi"}
          buttonTwo={i.name === "bunny" ? "SSD" : "Single"}
          value={i.name === "bunny" ? bunnyOption : scalewayOption}
          setValue={i.name === "bunny" ? setBunnyOption : setScalewayOption}
        />
      ) : (
        ""
      );
    };

    // Calculation of which column now has the smallest value
    const getMinValue = providerInfo.reduce((prev, cur) => {
      return cur.value < prev.value ? cur : prev;
    });

    return (
      <Flex style={breakpointStyles[breakpoint].providerWrapper} key={index}>
        <Flex gap="10px">
          <Provider
            logo={i.logo}
            name={i.name}
            radioButton={renderRadioButton}
          />
        </Flex>
        <Flex style={breakpointStyles[breakpoint].diagram} key={index}>
          <BarChart
            bg={i.name === getMinValue.name ? getMinValue.color : "gray"}
            barSize={i.value}
          />
        </Flex>
      </Flex>
    );
  });

  return (
    <Flex style={breakpointStyles[breakpoint].wrapper}>
      <Flex style={styles.sliderWrapper}>
        <Flex style={breakpointStyles[breakpoint].sliderContent}>
          <Flex style={breakpointStyles[breakpoint].slider}>
            <UpdatedSlider
              name={"Storage"}
              setValue={setStorageVal}
              size={storageVal}
            />
          </Flex>
          <Flex style={breakpointStyles[breakpoint].slider}>
            <UpdatedSlider
              name={"Transfer"}
              setValue={setTransferVal}
              size={transferVal}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex style={breakpointStyles[breakpoint].providerContainer}>
        {renderDiagram}
      </Flex>
    </Flex>
  );
};
