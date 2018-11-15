import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Card, Button  } from 'react-native-elements'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
      }

    state = {email: '',
             password: '',
             emailError: false,
             passwordError: false}
    
    handleLogin = () => {
        var data = this.validation();
    
        if(data === false){
          return;
        }

        if(data.email === "Admin" && data.password === "Password"){
            this.props.loggin();
        }
    }

    validation = () => {
        let error = false;
        this.setState({passwordError: false, emailError: false})
    
        if(this.state.email === ''){
          this.setState({emailError: true})
          this.email.current.shake();
          error = true;
        }
    
        if(this.state.password === ''){
          this.setState({passwordError: true})
          this.password.current.shake();
          error = true;
        }
    
        if(error){
          return false;
        }
    
        var data = {password: this.state.password, email: this.state.email};
    
        return data;
      }

    handleRegisterPage = () => {
        this.props.registerPage();
    }

    render(){
        return(
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput ref={this.email} onChangeText={(value) => this.setState({email: value})} shake={this.state.emailError}/>
                <FormValidationMessage>{this.state.emailError ? 'Email Error' : ''}</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.password} onChangeText={(value) => this.setState({password: value})} shake={this.state.passwordError}/>
                <FormValidationMessage>{this.state.passwordError ? 'Password Error' : ''}</FormValidationMessage>

                <View style={{width: '100%'}}>
                    <Button style={{width: '100%'}} title='Login' onPress={this.handleLogin}/>
                </View>

                <Text style={{color: 'blue', marginTop: '5%'}}
                    onPress={() => this.handleRegisterPage()}>
                    Register
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