import React, { Component } from 'react'
import { List, ListItem, Divider, Badge, Icon, Card } from 'react-native-elements'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Linking, TouchableHighlight, Button } from 'react-native'
import PopupDialog from 'react-native-popup-dialog';
import Modal from "react-native-modal";

import data from '../assets/camp_info.json';
import { determineBadgeColor } from '../util/utils';
   
class ScrollList extends Component {
  state = {
    modalVisible: false,
    data: {},
    currentOpenIndex: 1 
  }

   handleCampChoice = (item, index) => {
      this.setModalVisible(true);
      this.setState({data: data[item], currentOpenIndex: index});
   }

   openGoogleMapsWithDirections = (lat, long) => {
    Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + lat + "," + long)
   }

   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

   render() {
      return (
        <View>
          <ScrollView>
            <List>
                {
                  this.props.camps.map((item, index) => {
                    const badgeStyle = {
                      backgroundColor: determineBadgeColor(item.score / 10),
                      alignContent: 'flex-end'
                    };
                    return (
                      <ListItem
                        key = {(item.idpCamp ? item.idpCamp : item.nearbyIdpCamp)}
                        style = {styles.container}
                        onPress = {() => this.handleCampChoice(item.idpCamp, index+1)}
                        title = {<View style={{display: 'flex', flexDirection: 'row'}}>
                                    <View style={{width: '15%'}}>
                                        <Text style = {styles.text}>
                                          {index + 1 }.
                                        </Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style = {styles.text}>
                                          {(item.idpCamp ? item.idpCamp : item.nearbyIdpCamp)}
                                        </Text>
                                    </View>
                                    <View style={{alignContent: 'flex-end', display: 'flex', flexDirection: 'row'}}>
                                        <Badge containerStyle={badgeStyle}>
                                            <Text>{item.score / 10}%</Text>
                                        </Badge>
                                    </View>
                                </View>}
                          rightIcon = {<Icon 
                                        name={'directions'} 
                                        onPress={() => this.openGoogleMapsWithDirections(item.coords.latitude, item.coords.longitude)}
                                        />
                                      }
                                  
                      />
                    );
                  })
                }
            </List>
          </ScrollView>
              <Modal
                  isVisible={this.state.modalVisible}
                  backdropOpacity={0.7}
                  onBackdropPress={() => { this.setModalVisible(!this.state.modalVisible)}}
              >
                <Card 
                  title={Object.keys(this.state.data).length !== 0 ? this.state.currentOpenIndex + '. ' + this.state.data.siteName : ''}
                  containerStyle={{borderRadius: 5}}
                  style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '75%',
                  width: '75%',
                  backgroundColor: 'white'}}>
                      {
                        Object.keys(this.state.data).map((item) => {
                          const upper = (item.charAt(0).toUpperCase() + item.substr(1)).match(/[A-Z][a-z]*/g).join(' ');
                          return(<View>
                                    <Text style={{marginTop: '1%', marginBottom: '1%'}}> {upper + ': ' + this.state.data[item] + '\n'}</Text> 
                                    <Divider/>
                                </View>)
                        })
                      }

                    <Button 
                      title="Hide"
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      </Button>
                </Card>
              </Modal>
         </View>
      )
   }
}
export default ScrollList

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
   }
})