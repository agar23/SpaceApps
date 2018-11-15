import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native'
import { List, ListItem, Divider, Badge, Icon } from 'react-native-elements'
   
class RecommendedList extends Component {
   handleCampChoice = (item) => {
      this.props.setStartCoords({
          lat: item.coords.latitude,
          long: item.coords.longitude
      })
   }

   openGoogleMapsWithDirections = (lat, long) => {
    Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + lat + "," + long)
   }

   render() {
      return (
         <View>
            <ScrollView>
                <List>
                    {
                    this.props.camps.map((item, index) => (
                    <ListItem
                        key = {(item.idpCamp ? item.idpCamp : item.nearbyIdpCamp)}
                        title = {<View style={{display: 'flex', flexDirection: 'row'}}>
                                    <View style={{width: '75%'}}>
                                        <Text>
                                            {(item.idpCamp ? item.idpCamp : item.nearbyIdpCamp)}
                                        </Text>
                                    </View>
                                    <View style={{alignContent: 'flex-end', display: 'flex', flexDirection: 'row'}}>
                                        <Badge containerStyle={styles.badge}>
                                            <Text>{item.score}%</Text>
                                        </Badge>
                                    </View>
                                </View>}
                        onPress = {() => this.handleCampChoice(item)}
                        rightIcon = {<Icon 
                                        name={'directions'} 
                                        onPress={() => this.openGoogleMapsWithDirections(item.coords.latitude, item.coords.longitude)}
                                    />}
                        >
                    </ListItem>
                    ))
                    }
                </List>
            </ScrollView>
         </View>
      )
   }
}
export default RecommendedList

const styles = StyleSheet.create ({
   container: {
      flex: 0,
      flexDirection: 'row',
      padding: 20,
      marginTop: 3,
      backgroundColor: '#F8F8FF',
      justifyContent: 'space-between',
   },
   text: {
      color: '#4f603c'
   },
   badge: {
    backgroundColor: 'lightgreen'
   }
})