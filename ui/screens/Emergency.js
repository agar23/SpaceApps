import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import RecommendedList from '../components/RecommendedList';
import Map from '../components/Map'
import campsExt from '../assets/top_camps.json';
import { initialRegion } from '../constants/Constants';
import ProfileForm from '../components/ProfileForm';

export default class EmergencyScreen extends React.Component {
  static navigationOptions = {
    title: 'Top IDP Camps Near You',
  };

  constructor(props) {
    super(props);
    this.state = {
      profileFormModalOpen: true ,
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

  closeModal = () => {
    this.setState({profileFormModalOpen: false})
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
        <RecommendedList 
          camps={this.state.camps}
          setStartCoords={this.setStartCoords} 
        />
        <ProfileForm open={this.state.profileFormModalOpen} closeModal={this.closeModal}/>
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
