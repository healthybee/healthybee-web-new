import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ReactPlayer from "react-player";


const theme = createMuiTheme();
theme.typography.h3 = {
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};

function DetoxProgSection(props) {
  return (
    <Box style={{ backgroundColor: "#FFFFFF" }} mt={7}>
      <Grid fontWeight={500}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" align="center" gutterBottom="true">
            Detox Program
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} sm={12}>
          <h2>What is Detox program ?</h2>
          <h4>
            When we are eating, up to 80% of our energy is consumed in
            digestion. During a detox, the body no longer needs to digest,
            so all this saved energy is diverted into detoxification of
            toxins in your body and healing. Once detoxified, the body
            becomes lighter, more flexible, the mind becomes clearer and
            more creative.
            When we are eating, up to 80% of our energy is consumed in
            digestion. During a detox, the body no longer needs to digest,
            so all this saved energy is diverted into detoxification of
            toxins in your body and healing. Once detoxified, the body
            becomes lighter, more flexible, the mind becomes clearer and
            more creative.
            When we are eating, up to 80% of our energy is consumed in
            digestion. During a detox, the body no longer needs to digest,
            so all this saved energy is diverted into detoxification of
            toxins in your body and healing. Once detoxified, the body
            becomes lighter, more flexible, the mind becomes clearer and
            more creative.
            <br />
            <b>Note:</b> At any point in time you are not able to control
            your hunger then you can eat any seasonal fruit.
          </h4>
        </Grid>
        <Grid item xs={12} md={5} sm={12}>
              <ReactPlayer
                url="https://youtu.be/vCerLmXZw7k"
                controls={true}
                width="100%"
                height="340px"
              />
            </Grid>
      </Grid>
    </Box>
  );
}

DetoxProgSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(DetoxProgSection);
