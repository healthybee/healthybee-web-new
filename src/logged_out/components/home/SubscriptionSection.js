import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
    backgroundImage: `url(${"./images/logged_out/subscription-section.jpg"})`,
    backgroundRepeat: "no-repeat",
    height: "120vh",
    backgroundSize: "100%",
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
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, width } = props;
  return (
    <Fragment>
      <Box pt={15} pb={6} className={classes.higlightBox}>
        <div className={classNames(classes.containerFix, "container")}>
          <Box
            className="row"
            justifyContent="flex-end"
            style={{
              marginRight: "18%",
            }}
          >
            <Grid item xs={4} md={4}>
              <Box display="flex" flexDirection="column" height="100%">
                <Box mb={1} mt={3}>
                  <Typography
                    variant="h3"
                    style={{
                      fontFamily: "Dancing Script",
                      fontSize: "4.5rem",
                    }}
                  >
                    We help you to achieve your fitness goals. <br />
                  </Typography>
                </Box>
                <div>
                  <Box mb={1}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      Happiness starts with healthy food.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    className={classes.extraLargeButton}
                    classes={{ label: classes.extraLargeButtonLabel }}
                    href="/subscription-plans"
                    rel="noopener noreferrer"
                  >
                    Subscribe now
                  </Button>
                </div>
              </Box>
            </Grid>
          </Box>
        </div>
      </Box>
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
