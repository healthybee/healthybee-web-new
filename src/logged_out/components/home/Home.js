import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import DetoxProgSection from "./DetoxProgSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";
import SubscriptionSection from "./SubscriptionSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <SubscriptionSection />
      <Container fixed>
        <FeatureSection />
        <br />
        <br />
        <DetoxProgSection />
        <br />
        <br />
        <TestimonialSection />
        <br />
        <br />
        <ContactSection />
      </Container>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
