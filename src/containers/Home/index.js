import React from "react";
import { getModels, clearModels } from "actions";
import Button from "components/Button";
import CarMake from "components/CarMake";
import CarMake2 from "components/CarMake";
import Card from "components/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makesWithCompetitorsO1 } from "selectors/makes";

const Home = ({ getModels, clearModels, makes }) => (
  <React.Fragment>
    <Card>
      <Button onClick={() => getModels()}>Get the car makes</Button>
    </Card>
    <Card>
      <Button onClick={() => clearModels()}>Clear</Button>
    </Card>
    <React.Fragment>
      {makes && makes.map(make => <CarMake allMakes={makes} make={make} />)}
    </React.Fragment>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    makes: makesWithCompetitorsO1(state),
    //makes: state.makes.makes,
  };
};

const mapDispatchToProps = {
  getModels,
  clearModels,
};

Home.propTypes = {
  getModels: PropTypes.func,
  clearModels: PropTypes.func,
  makes: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
