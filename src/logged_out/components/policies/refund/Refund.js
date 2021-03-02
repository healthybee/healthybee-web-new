import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";

function Refund(props) {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container lg-p-top">
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5">Return Policy</Typography>
            <Typography variant="body1" color="textPrimary">
              <ol>
                <li>
                  HealthyBee hopes that you never have to cancel or return a
                  product. At the same time, we would be there to help you
                  whenever you do so due to certain circumstances. As a first
                  step we are laying out our cancellation and return policy to
                  take care of your hassles. Order has not been prepared yet:
                  Any order which has not been prepare can be cancelled and
                  refunded.
                </li>
                <br />
                <li>
                  Food was spill when received: We take utmost care while
                  packaging to ensure that the product reaches you the way you
                  had seen it on our website. However, due to situations beyond
                  our control, the items delivered might get damaged in transit.
                  We would be more than happy to replace or refund your order
                  under such circumstance. We would request you to let us know
                  of the damage along with images within few hours of receiving
                  the order to claim the same.
                </li>
                <br />
                <li>
                  Incorrect items received: We are proud of the robustness of
                  our fulfilment process and the right shipment would reach the
                  right person at the right place. In case you receive items
                  that are different from the ones you ordered, we will ship the
                  right items to you right away and collect the incorrect items
                  from you at your convenience.
                </li>
                <br />
                <li>
                  Any other reasons for cancellation or return would be handled
                  on a case-to-case basis. Please contact us to initiate return
                  of any of the above queries. Please Note: If the user receives
                  damaged goods/ defective goods, then it lies to our
                  jurisdiction to replace or refund the amount. There will be no
                  return delivery, a restocking fee, or any other charges that
                  to be pay by user/customer.
                </li>
              </ol>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5">Refunds</Typography>
            <Typography variant="body1" color="textPrimary">
              <ol>
                <li>
                  In case of refunds, The amount paid by you will get refunded
                  using mode of payment within 5-7 days. If refund via payment
                  gateway is not possible, our customer team will contact you to
                  share NEFT / RTGS details in order to transfer the money.
                </li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Refund.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(Refund);
