import React from "react";
import Card from "components/Card";
import PropTypes from "prop-types";

const CarMake = ({ make }) => (
  // If no error message present, still render some text
  // this is done to reserve the space in the dom for the error message
  <Card>
    <Card>{make.make_display}</Card>
    <Card>{make.make_country}</Card>
  </Card>
);

CarMake.propTypes = {
  make: PropTypes.object,
};

export default CarMake;
