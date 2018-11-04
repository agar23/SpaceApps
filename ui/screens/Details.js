import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ScrollList from '../components/ScrollList';
import allCamps from '../assets/all_camps.json';


export default class EmergencyScreen extends React.Component {
  static navigationOptions = {
    title: 'Top IDP Camps in Nigeria',
  };

  constructor(props) {
    super(props);
    this.state = { 
      camps: [], 
      coords: [],
      error: null,
      location: null,
      region: null,
      startLatitude: null,
      startLongitude: null
     };  
  }

  componentDidMount() {
    this.setState({
      camps: allCamps.camps
    })
  }


  setStartCoords = (lat) =>{
    this.setState({
      startLatitude: lat.lat,
      startLongitude: lat.long
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollList 
        camps={this.state.camps}
        setStartCoords={this.setStartCoords} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
})
