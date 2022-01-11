const media = "@media only screen and ";

export const theme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    gray: "#525252",
    lightGreen: "#369457",
    green: "#1F6032",
    darkGreen: "#093009",
    veryDarkGreen: "#041704",
  },
  media: {
    xlarge: `${media}(max-width: 1200px)`,
    large: `${media}(max-width: 992px)`,
    medium: `${media}(max-width: 768px)`,
    small: `${media}(max-width: 576px)`,
  },
};
