// react
import React from "react";

// chakra
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

// common
import { breakpointStyles } from "./BarChartStyle";
import { breakpoints } from "../../style/breakpoints";

export const BarChart = ({ barSize, bg }) => {
  const breakpoint = useBreakpointValue(breakpoints) || breakpoints.md;

  const changeBarSize =
    breakpoint === breakpoints.lg
      ? { width: barSize + "%" }
      : { height: barSize + "%" };

  return (
    <Flex style={breakpointStyles[breakpoint].wrapper}>
      <Text style={breakpointStyles[breakpoint].barChartText}>
        {Math.ceil(barSize * 4) / 4} $
      </Text>
      <Flex
        style={breakpointStyles[breakpoint].diagramItem}
        backgroundColor={bg}
        {...changeBarSize}
      ></Flex>
    </Flex>
  );
};
