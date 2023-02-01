import { breakpoints } from "../../style/breakpoints";

export const breakpointStyles = {
  [breakpoints.lg]: {
    wrapper: {
      flexDirection: "row-reverse",
      justifyContent: "left",
      alignItems: "center",
      width: "100%",
    },

    diagramItem: {
      border: "1px solid black",
      borderLeft: "none",
      height: "30px",
    },

    barChartText: {
      paddingLeft: "5px",
      fontWeight: "800",
    },
  },

  [breakpoints.md]: {
    wrapper: {
      flexDirection: "column",
      width: "30%",
      justifyContent: "flex-end",
      height: "100%",
    },

    diagramItem: {
      border: "1px solid black",
      borderBottom: "none",
    },

    barChartText: {
      paddingTop: "5px",
      fontWeight: "800",
      writingMode: "vertical-rl",
      rotate: "180deg",
      lineHeight: "30px",
    },
  },
};
