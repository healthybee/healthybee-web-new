import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, withWidth, withStyles } from "@material-ui/core";
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

function TestimonialSection(props) {
  const { width, classes } = props;
  return (
    <div
      className="lg-mg-top lg-mg-bottom"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        What Customers Say
      </Typography>
      <div className={classNames("container", classes.containerFix)}>
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
    </div>
  );
}

TestimonialSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(TestimonialSection)
);
