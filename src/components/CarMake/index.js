import React from "react";
import Card from "components/Card";
import PropTypes from "prop-types";

const competitors = (allMakes, make, isCommon = false) =>
  allMakes.reduce((a, cv) => {
    if (cv.make_id !== make.make_id && cv.make_country === make.make_country) {
      if (!isCommon || cv.make_is_common === "1") {
        a.push(cv);
      }
    }
    return a;
  }, []);

const CarMake = ({ make, allMakes }) => (
  <Card key={make.make_id}>
    <Card>{make.make_display}</Card>
    <Card>{make.make_country}</Card>
    <Card>competitors: {competitors(allMakes, make).length}</Card>
    <Card>common competitors: {competitors(allMakes, make, true).length}</Card>
  </Card>
);

const CarMake2 = ({ make }) => (
  <Card key={make.make_id}>
    <Card>{make.make_display}</Card>
    <Card>{make.make_country}</Card>
    <Card>competitors: {make.competitorCount}</Card>
    <Card>common competitors: {make.commonCompetitorCount}</Card>
  </Card>
);

CarMake.propTypes = {
  make: PropTypes.object,
  allMakes: PropTypes.array,
};
CarMake2.propTypes = CarMake.propTypes;

export default CarMake2;
