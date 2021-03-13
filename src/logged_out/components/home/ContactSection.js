import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  withWidth,
  ThemeProvider,
  createMuiTheme,
  Box,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

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
  // const { theme } = props;
  return (
    <Box mt={7} style={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6} data-aos="zoom-in-up">
            <ThemeProvider theme={theme}>
              <Typography variant="h3" gutterBottom="true">
                Get in touch with us
              </Typography>
            </ThemeProvider>
            <Contact />
          </Grid>
          <Grid item xs={12} sm={12} lg={4} data-aos="zoom-in-up">
            <Typography variant="h4" gutterBottom="true">
              People are digging our meals! Hear what they are saying about
              plant-based living.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ContactSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(ContactSection);
