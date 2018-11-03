import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import FlatListBasics from '../components/List';
import Map from '../components/Map'
import campsExt from '../assets/top_camps.json';
import { initialRegion } from '../constants/Constants';

export default class EmergencyScreen extends React.Component {
  static navigationOptions = {
    title: 'Top IDP Camps Near You',
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
      camps: campsExt.camps
    })
  }

  setStartCoords = (lat) => {
    this.setState({
      startLatitude: lat.lat,
      startLongitude: lat.long
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={initialRegion}
          places={this.state.camps}
          destLatitude={this.state.startLatitude}
          destLongitude={this.state.startLongitude}
        />
        <FlatListBasics 
        camps={this.state.camps}
        setStartCoords={this.setStartCoords} 
        />
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
