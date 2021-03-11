import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import calculateSpacing from "./calculateSpacing";
import HowWeWork from "./HowWeWork";
import { ReactComponent as HealthyMeal } from "../../../icons/healthy-eating.svg";
import { ReactComponent as DeliveryMan } from "../../../icons/delivery-man.svg";
import { ReactComponent as Nutritionist } from "../../../icons/nutritionist.svg";
import { ReactComponent as Safe } from "../../../icons/safe.svg";
import { ReactComponent as Clipboard } from "../../../icons/clipboard.svg";
import { ReactComponent as Seasoning } from "../../../icons/seasoning.svg";

const features = [
  {
    color: "#00C853",
    headline: "Customized Meal",
    icon: <HealthyMeal style={{ width: "100px", height: "90px" }}/>,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "In-house Dressing & Sauces",
    icon: <Seasoning style={{ width: "100px", height: "90px" }} />,
    mdDelay: "0",
    smDelay: "200",
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
    headline: "Regular Reporting",
    icon: <Clipboard style={{ width: "100px", height: "90px" }} />,
    mdDelay: "0",
    smDelay: "300",
  },
  {
    color: "#d50000",
    headline: "100% Safe & Hygenic",
    icon: <Safe style={{ width: "100px", height: "90px" }} />,
    mdDelay: "0",
    smDelay: "200",
  }
];

const theme = createMuiTheme();
theme.typography.h3 = {
  fontWeight: "bold",
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};

function HowWeWorkSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box mt={7}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" align="center" gutterBottom="true">
            How We Work
          </Typography>
        </ThemeProvider>
        <Box mt={5}>
          <Grid container  spacing={calculateSpacing(width)} 
                style={{
                  textAlign: "center"
                }}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={2}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <HowWeWork
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

HowWeWorkSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(HowWeWorkSection);
