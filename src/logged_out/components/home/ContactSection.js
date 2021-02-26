import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  withWidth,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import Contact from "./Contact";

const theme = createMuiTheme();
theme.typography.h3 = {
  fontSize: "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

function ContactSection(props) {
  const { width, theme } = props;
  return (
    <div
      className="lg-mg-top lg-mg-bottom"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3" align="center" gutterBottom="true">
          Get in touch with us
        </Typography>
      </ThemeProvider>
      <div className={classNames("container")}>
        <Grid container spacing={calculateSpacing(width)} align="center">
          <Grid item xs={12} sm={12} lg={12} data-aos="zoom-in-up">
            <Contact />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ContactSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(ContactSection);
