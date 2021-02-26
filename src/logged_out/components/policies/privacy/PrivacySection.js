import React from "react";

import { withWidth, withStyles } from "@material-ui/core";
import Privacy from "./Privacy";

const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function PrivacySection(props) {
  return <Privacy />;
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(PrivacySection)
);