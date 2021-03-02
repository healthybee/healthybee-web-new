import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";

function Privacy(props) {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container lg-p-top">
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5">Privacy Policy</Typography>
            <Typography variant="body1" color="textPrimary">
              <ol>
                <li>
                  Your IP is logged when placing an order. This is for reasons
                  of fraud protection. Fraudulent orders will be submitted to
                  the appropriate authorities.
                </li>
                <br />
                <li>
                  HealthyBee collects personally identifiable information that
                  you may voluntarily provide on online forms, which may
                  include: user registration, contact requests, guest comments,
                  online surveys, and other online activities. The personally
                  identifiable information (Personal Information) collected on
                  this Site / our Mobile Application can include some or all of
                  the following: your name, address, telephone number, email
                  addresses, demographic information, and any other information
                  you may voluntarily provide.
                </li>
                <br />
                <li>
                  In addition to the Personal Information identified above, our
                  web servers automatically identify computers by their IP
                  addresses. Company may use IP addresses to analyze trends,
                  administer the site track users movement and gather broad
                  demographic information for aggregate use. To emphasize, IP
                  addresses are not linked to Personal.
                </li>
              </ol>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5">Disclaimer</Typography>
            <Typography variant="body1" color="textPrimary">
              <ol>
                <li>
                  It is your own responsibility to ensure that you are fully
                  aware of all of these terms and conditions when making a
                  purchase on www.healthybee.fit / HealthyBee Mobile
                  Applications.
                </li>
                <br />

                <li>
                  HealthyBee reserves the right to change / modify these terms &
                  conditions at their own discretion anytime.
                </li>
                <br />

                <li>
                  The images shown are only indicative in nature & the actual
                  product may vary in size, colour etc.
                </li>
                <br />

                <li>
                  HealthyBee reserves the right to change any part or piece of
                  information on this web site without any notice to customers
                  or visitors.
                </li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Privacy.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(Privacy);
