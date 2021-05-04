import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Button,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    color: "white",
    backgroundColor: "#f5a301",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    "&:hover": {
      backgroundColor: "#f5a301",
    },
  },
  higlightBox: {
    backgroundImage: `url(${"./images/logged_out/Home_Image_001.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  container: {
    borderTop: "5px solid lightgrey",
    color: "#663712",
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, width } = props;
  return (
    <Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={5} style={{ display: "flex" }}>
          <Box
            mb={1}
            mt={3}
            pl={3}
            pr={1}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Quicksand",
                fontWeight: 500,
                fontSize: "2rem",
              }}
            >
              We help you to achieve, your fitness goal
            </Typography>
            <Typography variant="h6">
              Search for fresh, mouth-watering, & calories counted meal ends
              here
            </Typography>
            <Button
              variant="outlined"
              fullwidth
              className={classes.extraLargeButton}
              classes={{ label: classes.extraLargeButtonLabel }}
              href="https://dinein.inresto.com/wla/wla-welcome?cgId=5fa26edf42903d80ba197997"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Order Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            className={classes.higlightBox}
            style={
              isWidthUp("md", width) ? { height: "70vh" } : { height: "50vh" }
            }
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
