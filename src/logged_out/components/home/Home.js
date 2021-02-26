import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import HowWeWorkSection from "./HowWeWorkSection";
import DetoxProgSection from "./DetoxProgSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <HowWeWorkSection />
      <DetoxProgSection />
      <TestimonialSection />
      <ContactSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
