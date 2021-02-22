import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import HowWeWorkSection from "./HowWeWorkSection";
import DetoxProgSection from "./DetoxProgSection";
import TestimonialSection from "./TestimonialSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <Container fixed>
        <FeatureSection />
        <HowWeWorkSection />
        <DetoxProgSection />
        <TestimonialSection />
      </Container>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
