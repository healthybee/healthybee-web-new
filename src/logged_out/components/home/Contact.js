import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField, withWidth } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import transitions from "@material-ui/core/styles/transitions";
import { feedbackApi } from "../../../api/feedbackApi";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important",
  },
  socialIcon: {
    fill: theme.palette.common.white,
    backgroundColor: "#33383b",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
});

function ContactSection(props) {
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const customerEmail = useRef();
  const customerMobile = useRef();
  const customerMessage = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = async () => {
      try {
        setFeedbackStatus(null);
        setIsLoading(true);
        const res = await feedbackApi({
          email: customerEmail.current.value,
          number: customerMobile.current.value,
          message: customerMessage.current.value,
          access_token: "USroAGMKeL5yhdhAVmgJZYttXFaZFOuf",
        });
        if (res?.data) {
          setFeedbackStatus("feedbackSent");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    postData();
  };

  return (
    <Grid item xs={12} md={6} lg={6}>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <Box mb={3}>
            <TextField
              variant="outlined"
              name="email"
              type="email"
              multiline
              placeholder="Email"
              inputRef={customerEmail}
              inputProps={{ "aria-label": "Get in Touch" }}
              fullWidth
              required
            />
          </Box>
          <Box mb={3}>
            <TextField
              variant="outlined"
              name="mobile"
              type="tel"
              multiline
              placeholder="Mobile"
              inputRef={customerMobile}
              inputProps={{ "aria-label": "Get in Touch" }}
              pattern="[0-9]{10}"
              fullWidth
              required
            />
          </Box>

          <Box mb={3}>
            <TextField
              variant="outlined"
              multiline
              placeholder="Message"
              inputRef={customerMessage}
              inputProps={{ "aria-label": "Get in Touch" }}
              rows={4}
              fullWidth
              required
            />
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Send Message {isLoading && <ButtonCircularProgress />}
        </Button>
      </form>
      {feedbackStatus === "feedbackSent" && (
        <>
          <br />
          <Box alignItems="center">
            <Box mb={3}>
              <Alert severity="success">
                Thank you for reaching us, we will get back to you very soon.
              </Alert>
            </Box>
          </Box>
        </>
      )}
    </Grid>
  );
}

ContactSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(ContactSection)
);
