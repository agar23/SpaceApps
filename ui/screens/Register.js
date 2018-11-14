import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Card, Button  } from 'react-native-elements'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.confirmPassword = React.createRef();
      }

    state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            firstNameError: false,
            lastNameError: false,
            phoneError: false,
            emailError: false,
            passwordError: false,
            confirmPasswordError: false
            }
    
    handleRegister = () => {
        
    }

    handleLoginPage = () => {
        this.props.loginPage();
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                    <FormLabel>First Name</FormLabel>
                    <FormInput ref={this.firstName} onChangeText={(value) => this.setState({firstName: value})} shake={this.state.firstNameError}/>
                    {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
                    </View>
                    <View style={{width: '50%'}}>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput ref={this.lastName} onChangeText={(value) => this.setState({lastName: value})} shake={this.state.lastNameError}/>
                    {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
                    </View>
                </View>

                <FormLabel>Phone Number</FormLabel>
                <FormInput ref={this.phone} onChangeText={(value) => this.setState({phone: value})} shake={this.state.phoneError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <FormLabel>Email</FormLabel>
                <FormInput ref={this.email} onChangeText={(value) => this.setState({email: value})} shake={this.state.emailError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.password} onChangeText={(value) => this.setState({password: value})} shake={this.state.passwordError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.confirmPassword} onChangeText={(value) => this.setState({confirmPassword: value})} shake={this.state.confirmPasswordError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}


                <View style={{width: '100%'}}>
                    <Button style={{width: '100%'}} title='Register' onPress={this.handleRegister}/>
                </View>

                <Text style={{color: 'blue', marginTop: '5%'}}
                    onPress={() => this.handleLoginPage()}>
                    Login
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  })