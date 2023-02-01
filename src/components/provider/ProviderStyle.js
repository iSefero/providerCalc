import { breakpoints } from "../../style/breakpoints";

export const styles = {
  img: {
    borderRadius: "50%",
    width: "30px",
  },

  providerName: {
    width: "100%",
    justifyContent: "left",
    fontWeight: "600",
  },
};

export const breakpointStyles = {
  [breakpoints.lg]: {
    wrapper: {
      gap: "15px",
      width: "170px",
      paddingRight: "15px",
      alignItems: "center",
      justifyContent: "space-between",
    },

    providerFooter: {
      flexDirection: "column",
      textAlign: "start",
    },
  },
  [breakpoints.md]: {
    wrapper: {
      gap: "15px",
      width: "100px",
      paddingTop: "15px",
      alignItems: "center",
      flexDirection: "column-reverse",
      justifyContent: "start",
      minHeight: "100px",
    },

    providerFooter: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
};
