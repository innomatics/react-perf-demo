import React from "react";
import { getModels, clearModels } from "actions";
import Button from "components/Button";
import CarMake from "components/CarMake";
import Card from "components/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ getModels, clearModels, models }) => (
  <React.Fragment>
    <Card>
      <Button onClick={() => getModels()}>Get the car models</Button>
    </Card>
    <Card>
      <Button onClick={() => clearModels()}>Clear</Button>
    </Card>
    <React.Fragment>
      {models && models.map(model => <CarMake make={model} />)}
    </React.Fragment>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    models: state.models.models.Makes,
  };
};

const mapDispatchToProps = {
  getModels,
  clearModels,
};

Home.propTypes = {
  getModels: PropTypes.func,
  clearModels: PropTypes.func,
  models: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
