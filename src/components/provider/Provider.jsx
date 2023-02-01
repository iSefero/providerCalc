// chakra
import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

// common
import { breakpointStyles, styles } from "./ProviderStyle";
import { breakpoints } from "../../style/breakpoints";

export const Provider = ({ logo, name, radioButton }) => {
  const breakpoint = useBreakpointValue(breakpoints) || breakpoints.md;

  return (
    <Flex style={breakpointStyles[breakpoint].wrapper}>
      <Flex style={breakpointStyles[breakpoint].providerFooter}>
        <Text style={styles.providerName}>{name}</Text>
        <Flex>{radioButton()}</Flex>
      </Flex>
      <Image style={styles.img} src={logo} />
    </Flex>
  );
};
