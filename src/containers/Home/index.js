import React from "react";
import { getModels } from "actions";
import Button from "components/Button";
import Card from "components/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ getModels, models }) => (
  <React.Fragment>
    <Button onClick={() => getModels()}>Get the car models</Button>
    <React.Fragment>
      {models && models.map(model => <Card model={model} />)}
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
};

Home.propTypes = {
  getModels: PropTypes.func,
  models: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
