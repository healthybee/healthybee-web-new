import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
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
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box mt={4} fontWeight={500}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" align="center" gutterBottom="true">
            Detox Program
          </Typography>
        </ThemeProvider>
        <Container>
          <Box mt={4} display="flex" justifyContent="center">
            <Grid md={6} sm={8}>
              <ReactPlayer
                url="https://youtu.be/vCerLmXZw7k"
                controls={true}
                width="100%"
                height="340px"
              />
            </Grid>
          </Box>
          <Box ml={2} mr={2}>
            <h2>Why Detox is required ?</h2>
            <h4>
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
          </Box>
        </Container>
      </Box>
    </div>
  );
}

DetoxProgSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(DetoxProgSection);
