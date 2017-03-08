import React from 'react';
import { View,
         Text,
         StyleSheet,
         Modal,
         TouchableHighlight} from 'react-native';

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
              modalVisible: false,
              modalVisible2: false };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.setModalVisible2 = this.setModalVisible2.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompany(4);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
  }

  render() {
    return (
      <View style={{marginTop: 70, flexDirection: 'column'}}>

        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Company Name:</Text>
          <Text style={styles.lineValue}>{this.props.company.name}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Company Symbol:</Text>
          <Text style={styles.lineValue}>{this.props.company.symbol}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Price:</Text>
          <Text style={styles.lineValue}>${this.props.company.price}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Change since Yesterday:</Text>
          <Text style={styles.lineValue}>{this.props.company.price_percent_change}%</Text>
        </View>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          >
      </Modal>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setModalVisible2(false)}
          >
      </Modal>
    </View>
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
