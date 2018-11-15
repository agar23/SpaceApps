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
        var data = this.validation();

        if(data == false){
            return;
        }
    }

    validation = () => {
        let emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        let phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

        let error = false;
        this.setState({firstNameError: false, lastNameError: false, emailError: false, phoneError: false, passwordError: false, confirmPasswordError: false})        
        if(this.state.firstName === ''){
            this.setState({firstNameError: true})
            this.firstName.current.shake();
            error = true;
        }

        if(this.state.lastName === ''){
            this.setState({lastNameError: true})
            this.lastName.current.shake();
            error = true;
        }
        
        if(!this.isOkPass(this.state.password)){
            this.setState({passwordError: true})
            this.password.current.shake();
            error = true;
        }

        if(this.state.password != this.state.confirmPassword){
            this.setState({confirmPasswordError: true})
            this.confirmPassword.current.shake();
            error = true;
        }

        if(this.state.email === '' || !emailValidation.test(String(this.state.email).toLowerCase())){
            this.setState({emailError: true})
            this.email.current.shake();
            error = true;
        }

        if(this.state.phone === '' || !phoneValidation.test(String(this.state.phone).toLowerCase())){
            this.setState({phoneError: true})
            this.phone.current.shake();
            error = true;
        }

        var data = {firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password};
        if(error){
            return false
        }

        return data;
    }

    isOkPass(p){
        var anUpperCase = /[A-Z]/;
        var aLowerCase = /[a-z]/;
        var aNumber = /\d/;
        var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
        if( (p.length < 8)  || !anUpperCase.test(p) || !aLowerCase.test(p) || !aNumber.test(p) || !aSpecial.test(p) ){
            return false;
        }
        else {
            return true;
        }
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
                    <FormValidationMessage>{this.state.firstNameError ? 'First Name Error' : ''}</FormValidationMessage>
                    </View>
                    <View style={{width: '50%'}}>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput ref={this.lastName} onChangeText={(value) => this.setState({lastName: value})} shake={this.state.lastNameError}/>
                    <FormValidationMessage>{this.state.lastNameError ? 'Last Name Error' : ''}</FormValidationMessage>
                    </View>
                </View>

                <FormLabel>Phone Number</FormLabel>
                <FormInput ref={this.phone} onChangeText={(value) => this.setState({phone: value})} shake={this.state.phoneError}/>
                <FormValidationMessage>{this.state.phoneError ? 'Phone Number Error' : ''}</FormValidationMessage>

                <FormLabel>Email</FormLabel>
                <FormInput ref={this.email} onChangeText={(value) => this.setState({email: value})} shake={this.state.emailError}/>
                <FormValidationMessage>{this.state.emailError ? 'Email Error' : ''}</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.password} onChangeText={(value) => this.setState({password: value})} shake={this.state.passwordError}/>
                <FormValidationMessage>{this.state.passwordError ? 'Password Error' : ''}</FormValidationMessage>

                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.confirmPassword} onChangeText={(value) => this.setState({confirmPassword: value})} shake={this.state.confirmPasswordError}/>
                <FormValidationMessage>{this.state.confirmPasswordError ? 'Confirm Password Error' : ''}</FormValidationMessage>


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