import { breakpoints } from "../../style/breakpoints";

export const styles = {
  sliderWrapper: {
    justifyContent: "center",
  },
};

export const breakpointStyles = {
  [breakpoints.lg]: {
    wrapper: {
      padding: "30px",
      gap: "40px",
      border: "3px solid black",
      borderRadius: "20px",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
    },

    sliderContent: {
      width: "90%",
      gap: "80px",
      justifyContent: "space-between",
    },

    slider: {
      width: "50%",
    },

    providerContainer: {
      flexDirection: "column",
    },

    providerWrapper: {
      flexDirection: "row",
      height: "60px",
    },

    diagram: {
      width: "100%",
      borderLeft: "8px solid black",
    },
  },

  [breakpoints.md]: {
    wrapper: {
      padding: "20px",
      gap: "40px",
      border: "3px solid black",
      borderRadius: "20px",
      width: "100%",
      flexDirection: "column-reverse",
      justifyContent: "center",
    },

    sliderContent: {
      width: "80%",
      gap: "20px",
      flexDirection: "column",
    },

    slider: {
      width: "100%",
    },

    providerContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },

    providerWrapper: {
      flexDirection: "column-reverse",
      height: "400px",
    },

    diagram: {
      width: "100%",
      height: "500px",
      borderBottom: "8px solid black",
      alignItems: "center",
      flexDirection: "column",
    },
  },
};
