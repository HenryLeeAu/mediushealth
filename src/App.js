import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheme, fetchProfile } from 'actions/theme';

import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  default: '#278aef',
  red: '#ff4d78',
  blue:'#278aef'
});

const Box = styled.div`
  background-color: ${backgroundColor};
`;
const AppWrapper = styled.div`
  background: #000;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getTheme({ color: 'red' });
    this.props.fetchProfile(127);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: this.props.theme.color }}>
        <div>
          <Box>cscs</Box>
          <AppWrapper>vdv</AppWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer,
  };
}

export default connect(
  mapStateToProps,
  { getTheme, fetchProfile }
)(App);
