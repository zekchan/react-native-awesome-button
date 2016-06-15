'use strict';

import React, {Component} from 'react';
import  {
  Platform,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
} from 'react-native';

var ProgressBar = React.createClass({
  render() {
    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS color={this.props.color} style={this.props.style}/>
      );
    } else {
      return (
        <ProgressBarAndroid color={this.props.color} style={this.props.style} styleAttr={"Small"}/>
      );
    }
  }
});

module.exports = ProgressBar;
