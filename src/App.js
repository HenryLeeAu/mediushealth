import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTheme } from './actions';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #000;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <AppWrapper>DDD</AppWrapper>;
  }
}

function mapStateToProps(state) {
  return {
    themeReducer: state.themeReducer,
  };
}

export default connect(
  mapStateToProps,
  { updateTheme }
)(App);
