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

    render(){
        return(
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput ref={this.email} onChangeText={(value) => this.setState({email: value})} shake={this.state.emailError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <FormLabel>Password</FormLabel>
                <FormInput ref={this.password} onChangeText={(value) => this.setState({password: value})} shake={this.state.passwordError}/>
                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

                <Button title='Login' onPress={this.handleLogin}/>
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