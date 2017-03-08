import React from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         ListView,
         Modal,
         ActivityIndicator,
         TouchableHighlight} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

const MOCKED_MOVIES_DATA = [
 {
   title: "Loading",
   year: 'Null',
   posters: {
     thumbnail: ''
   }
 }
];



class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
    const x = this.props.movies;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

     this.state = {
       loading: false,
       dataSource:  ds.cloneWithRows(MOCKED_MOVIES_DATA) ,
     };
  }

  componentDidMount() {
    this.setState({loading: true});
    const that = this;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.props.fetchCompany(REQUEST_URL).then(
      (res) => {
        that.setState({
          dataSource: ds.cloneWithRows(that.props.movies),
          loading: false
        });
      }
    )
  }

  renderRow(movie) {
    let img = {
      uri: movie.posters.thumbnail,
    };

    return (
      <View>
      <ActivityIndicator
        animating={this.state.loading}
        color="black"
        style={[styles.centering, {height: 80}]}
        size="large"
      />
      <Image source={img} style={styles.image}/>
        <Text>
          {movie.title}
        </Text>
        <Text>
          {movie.year}
        </Text>
      </View>
    );
  }

  render() {
     return (
       <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderRow.bind(this)}
       />
     );
 }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  image: {
    padding: 10,
    width: 100,
    height: 100,
  },
  infoline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginRight: 20,
    marginLeft: 20
  },

  lineLabel: {
    fontSize: 14
  },
  lineValue: {
    fontSize: 20
  }
});

export default CompanyDetail;
