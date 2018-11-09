import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheme, fetchProfile } from 'actions/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import HomePage from 'pages/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={{ mode: this.props.theme.color }}>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
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
