import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth, withStyles, Box } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import calculateSpacing from "./calculateSpacing";
import Testimonial from "./Testimonial";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("xl")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

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
function TestimonialSection(props) {
  const { width, classes } = props;
  return (
    <Box mt={7}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3" align="center" gutterBottom="true">
          What Customers Say
        </Typography>
      </ThemeProvider>
      <div>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <Testimonial />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

TestimonialSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(TestimonialSection)
);
