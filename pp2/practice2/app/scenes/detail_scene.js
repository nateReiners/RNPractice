import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

export default class DetailScene extends Component {
  constructor(props) {
    super(props);
    this.createHomeScene = this.createHomeScene.bind(this);
  }

  createHomeScene() {
    this.props.navigator.push({ name: "HomeScene" });
  }

  render() {
    let img = {
      uri: 'http://pngimg.com/uploads/orange/orange_PNG786.png',
    };

    return (
      <View style={styles.screenView}>
        <View style={styles.nav}>
          <Text style={styles.headerText}>
            This is the detail scene
          </Text>
        </View>
        <Image source={img} style={styles.picture}></Image>
          <TouchableOpacity onPress={this.createHomeScene}>
            <Text>
              Go to home scene!
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  nav: {
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  headerText: {
    fontSize: 20,
    color: 'red'
  },
  picture: {
    margin: 10,
    height: 100,
    width: 100,
  }
});
