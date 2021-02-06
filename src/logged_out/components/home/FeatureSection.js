import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import { ReactComponent as HealthyMeal } from "../../../icons/healthy-eating.svg";
import { ReactComponent as DeliveryMan } from "../../../icons/delivery-man.svg";
import { ReactComponent as Nutritionist } from "../../../icons/nutritionist.svg";
import { ReactComponent as Safe } from "../../../icons/safe.svg";

const features = [
  {
    color: "#00C853",
    headline: "Customised Meal",
    icon: <HealthyMeal style={{ width: "100px", height: "90px" }}/>,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Doorstep Delivery",
    icon: <DeliveryMan style={{ width: "100px", height: "90px" }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Personalized Nutritionist",
    icon: <Nutritionist style={{ width: "100px", height: "90px" }}/>,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "100% Safe & Hygenic",
    icon: <Safe style={{ width: "100px", height: "90px" }} />,
    mdDelay: "0",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          What You Get
        </Typography>
        <div className="container">
          <Grid container spacing={calculateSpacing(width)} 
                style={{
                  textAlign: "center"
                }}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={3}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(FeatureSection);
