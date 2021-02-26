import React from "react";

import { withWidth, withStyles } from "@material-ui/core";
import Terms from "./Terms";

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

function TermsSection(props) {
  return <Terms />;
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(TermsSection)
);
