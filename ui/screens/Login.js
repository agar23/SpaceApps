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
        if(this.state.email === "Admin" && this.state.password === "Password"){
            this.props.loggin();
        }
    }

    handleRegisterPage = () => {
        this.props.registerPage();
    }

    render(){
        return(
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput ref={this.email} onChangeText={(value) => this.setState({email: value})} shake={this.state.emailError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} ref={this.password} onChangeText={(value) => this.setState({password: value})} shake={this.state.passwordError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

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