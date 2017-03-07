import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet,
} from 'react-native';

import MainScene from './scenes/main_scene.js';
import ComicScene from './scenes/comic_scene.js';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if(route.name === 'MainScene') {
      return <MainScene navigator={navigator}/>;
    }
    if(route.name === 'ComicScene') {
      return <ComicScene navigator={navigator}/>;
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'MainScene' }}
        renderScene={ this.renderScene }
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }
}
