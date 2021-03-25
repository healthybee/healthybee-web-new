import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FitnessProgramSection from "../fitness_program/FitnessProgramSection";

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

function DetoxProgSection(props) {
  return (
    <Box style={{ backgroundColor: "#FFFFFF" }} mt={7}>
      <Box mt={7} fontWeight={500}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" align="center" gutterBottom="true">
            Fitness Programs
          </Typography>
        </ThemeProvider>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Typography variant="h6" gutterBottom="true">
              When we are eating, up to 80% of our energy is consumed in
              digestion. During a detox, the body no longer needs to digest, so
              all this saved energy is diverted into detoxification of toxins in
              your body and healing. Once detoxified, the body becomes lighter,
              more flexible, the mind becomes clearer and more creative.
              <br />
              <b>Note:</b> At any point in time you are not able to control your
              hunger then you can eat any seasonal fruit.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <FitnessProgramSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

DetoxProgSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(DetoxProgSection);
