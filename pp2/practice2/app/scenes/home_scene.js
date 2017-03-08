import React, {Component} from 'react';
import CompanyDetailContainer from '../components/company/CompanyDetailContainer';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

export default class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.createDetailScene = this.createDetailScene.bind(this);
  }

  createDetailScene() {
    console.log("hit createDetailScene");
    this.props.navigator.push({ name: "DetailScene" });
  }

  render() {
    let img = {
      uri: 'https://img.clipartfest.com/05858af97b86c827ac669e6b8a2192b8_red-apple-sponsor-22-banner-apple_400-456.jpeg'
    };
    return (
      <View style={styles.screenView}>
        <View style={styles.nav}>
          <CompanyDetailContainer />
        </View>
        <Image source={img} style={styles.picture}></Image>
        <TouchableOpacity onPress={this.createDetailScene}>
          <Text>
            Go to detail scene!
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
  nav: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  headerText: {
    fontSize: 20,
    color: 'red',
  },
  picture: {
    margin: 10,
    height: 100,
    width: 100,
  }
});
