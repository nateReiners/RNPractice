import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet
} from 'react-native';

import HomeScene from './scenes/home_scene.js';
import DetailScene from './scenes/detail_scene.js';
import configureStore from './store';
import { Provider } from 'react-redux';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if(route.name === 'HomeScene') {
      return <HomeScene navigator={navigator}/>;
    }
    if(route.name === 'DetailScene') {
      return <DetailScene navigator={navigator}/>;
    }
  }

  render() {
    let store = configureStore();

    return (
      <Provider store={store}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'HomeScene' }}
          renderScene={ this.renderScene }
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        />
      </Provider>
    );
  }
}
