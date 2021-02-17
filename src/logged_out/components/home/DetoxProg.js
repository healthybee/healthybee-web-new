import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  },
  cardHeader: {
    textAlign: "center",
  },
});

function DetoxProg(props) {
  const { classes, Icon, headline, text } = props;
  return (
    <Fragment style={{
      textAlign: "center"
    }}>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
      >
        {Icon}
      </div>
      <Typography variant="h6" className={classes.cardHeader} paragraph>
        {headline}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Fragment>
  );
}

DetoxProg.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(DetoxProg);
