import React, { Component } from 'react'
import { List, ListItem, Divider, Badge, Icon, Card, FormLabel, FormInput, ButtonGroup } from 'react-native-elements'
import { Picker, Text, View, TouchableOpacity, StyleSheet, ScrollView, Linking, TouchableHighlight, Button } from 'react-native'
import PopupDialog from 'react-native-popup-dialog';
import Modal from "react-native-modal";
   
class ProfileForm extends Component {
    constructor(props){
        super(props);
        this.age = React.createRef();
        this.familySize = React.createRef();
    }

  state = {
    modalVisible: this.props.open,
    data: {},
    currentOpenIndex: 1,
    gender: '',
    age: '',
    familySize: ''
  }

  componentWillReceiveProps(nextProps){
      this.setState({modalVisible: nextProps.open})
  }

  updateGender (selectedIndex) {
    this.setState({selectedIndex})
  }

   closeModal() {
    this.props.closeModal()
  }

   render() {
      const ageRe = /^[1-9]?[0-9]{1}$|^100$/;
      const familySizeRe =  /^[0-9]*[1-9][0-9]*$/;
      const buttons = ['M', 'F', 'O']

      return (
        <View>
              <Modal
                  isVisible={this.state.modalVisible}
                  backdropOpacity={0.7}
                  onBackdropPress={() => { this.closeModal()}}
              >
                <Card 
                  title="Please fill out some details about yourself"
                  containerStyle={{borderRadius: 5}}
                  style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '75%',
                  width: '75%',
                  backgroundColor: 'white'}}>
                    <View style={{alignItems: 'center'}}>
                        <FormLabel labelStyle={styles.label}>Age</FormLabel>
                        <FormInput
                            style={{width: '25%'}}
                            ref={this.age}
                            onChangeText={(value) => (ageRe.test(value) ? this.setState({age: value}) : this.age.current.clearText())}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <FormLabel labelStyle={styles.label}>Gender</FormLabel>
                        {/* <Picker
                            style={{width: '50%'}}
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                            <Picker.Item label="Male" value="M" />
                            <Picker.Item label="Female" value="F" />
                            <Picker.Item label="Other" value="O" />
                        </Picker> */}
                        <ButtonGroup
                            onPress={(index) => this.setState({gender: buttons[index]})}
                            selectedIndex={buttons.indexOf(this.state.gender)}
                            buttons={buttons}
                            containerStyle={{height: 50, width: '50%'}}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <FormLabel labelStyle={styles.label}>Family Size</FormLabel>
                        <FormInput
                            style={{width: '25%'}}
                            ref={this.familySize}
                            onChangeText={(value) => (familySizeRe.test(value) ? this.setState({familySize: value}) : this.familySize.current.clearText())}
                        />
                    </View>

                    <Button 
                      title="Hide"
                      onPress={() => {
                        this.closeModal();
                      }}>
                      </Button>
                </Card>
              </Modal>
         </View>
      )
   }
}
export default ProfileForm

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
   label: {
        color: 'black'
   }
})