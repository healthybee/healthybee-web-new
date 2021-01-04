import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, withWidth } from "@material-ui/core";
import ScriptTag from "react-script-tag";
import FaqsAccordion from "./FaqsAccordion";
import ReactPlayer from "react-player";

function FitnessProgramDetails(props) {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container lg-p-top">
        <ReactPlayer
          url="https://youtu.be/vCerLmXZw7k"
          controls={true}
          width="100%"
          height="340px"
        />
      </div>
      <br />
      <div className="container">
        <Typography variant="h4">Why Detox is required ?</Typography>
        <Typography variant="body1" color="textSecondary">
          When we are eating, up to 80% of our energy is consumed in digestion.
          During a detox, the body no longer needs to digest, so all this saved
          energy is diverted into detoxification of toxins in your body and
          healing. Once detoxified, the body becomes lighter, more flexible, the
          mind becomes clearer and more creative. Note: At any point in time you
          are not able to control your hunger then you can eat any seasonal
          fruit.
        </Typography>
      </div>
      <br />
      <div className="container">
        <Typography variant="h4">How does it work?</Typography>
        <Typography variant="body1" color="textSecondary">
          In this detox program, we will provide 5 delicious, immunity boosting
          juices in a day delivered to your location for 2 days. You don’t have
          to consume anything solid during these 2 days. Come join us and let’s
          get toxins out of your body!
        </Typography>
      </div>
      <br />
      <div className="container">
        <Typography variant="h4">Benefits of Detoxification:</Typography>
        <Typography variant="body1" color="textSecondary">
          <ul>
            <li>Elimination of toxins from the body</li>
            <li>Safe rapid weight loss for those who are overweight</li>
            <li>Clearer skin</li>
            <li>Extreme mental clarity</li>
            <li>Greater flexibility</li>
            <li>Tons of more energy</li>
          </ul>
        </Typography>
      </div>
      <div className="container">
        <Typography variant="h4">
          What will you get in this program ?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <ul>
            <li>Dietician consultation to plan meal post-detox program.</li>
            <li>5 Juices a day for two days delivered to your location.</li>
            <li>DIY Detox Recipe PDF.</li>
            <li>Detailed FAQ document.</li>
            <li>Extend Community Support.</li>
          </ul>
        </Typography>
      </div>
      <div className="container">
        <Typography variant="h4">Program Details:</Typography>
        <Typography variant="body1" color="textSecondary">
          <ul>
            <li>
              Fees:{" "}
              <b>
                <strike>Rs.2500</strike>
              </b>{" "}
              <b>Rs.2000</b> <i>(Introductory offer price 20% off)</i>
            </li>
            <li>
              Date: <b>All weekends (sat-sun) in January 2021</b>
            </li>
            <i>
              (Deliverable in Wakad, Baner, Hinjewadi, Dange Chowk, VishalNagar,
              Pimple Nilakh & Pimple Saudagar)
            </i>
          </ul>
          <Box pl={3}>
            <form>
              <ScriptTag
                src="https://checkout.razorpay.com/v1/payment-button.js"
                data-payment_button_id="pl_G3N2KZhR0c7D5V"
              >
                {" "}
              </ScriptTag>{" "}
            </form>
          </Box>
        </Typography>
      </div>
      <br />
      <div className="container">
        <Typography variant="h4">Frequently Asked Questions:</Typography>
        <FaqsAccordion />
      </div>
    </div>
  );
}

FitnessProgramDetails.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(FitnessProgramDetails);
