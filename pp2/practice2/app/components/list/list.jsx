import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Image,
} from 'react-native';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        This is the List Component!
      </View>
    )
  }
}
