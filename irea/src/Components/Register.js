import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import ViewContainer from './ViewContainer';
import { Input } from './Input';
import { Button } from './Button';
import { firebaseRef } from '../Services/firebaseRef';
export default class Login extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
        this._register = this._register.bind(this)
    }

    _register()
    {
        var {navigate} = this.props.navigation;
        var {registerError} = false;  
        registerError = false;
        if(this.state.password == this.state.confirmPassword){
            firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
                registerError = true
                console.log(registerError)
                Alert.alert("Please check your email")
                navigate("Screen3")
            })
        }
        else
        {
            Alert.alert("Your passwords did not match")
        }
     
    }
    render(){
        return(
            <ViewContainer>

                <View style={styles.imageContainer}>
                    <Text style={styles.image}>IREA</Text>
                </View>
                <View style={styles.inputButtons}>
                    <Input 
                        style={styles.textInput} 
                        onChangeText={(text) => this.setState({email: text})}   
                        value={this.state.email}
                        placeholder="EMAIL"
                    />
                    <Input 
                        style={styles.textInput} 
                        onChangeText={(text) => this.setState({password: text})}   
                        value={this.state.password}
                        placeholder="PASSWORD"    
                        secureTextEntry={true}
                    />

                    <Input 
                        style={styles.textInput} 
                        onChangeText={(text) => this.setState({confirmPassword: text})}   
                        value={this.state.confirmPassword}
                        placeholder="CONFIRM PASSWORD"    
                        secureTextEntry={true}
                    />
                 
                    <View style={styles.login}>
                        <Button onPress={this._register}><Text>Create Account</Text></Button>
                    </View>
                </View>  
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        fontSize: 60,
        fontWeight: '700',
    },
    imageContainer:{
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 100
    },
    inputButtons:{
        width: '90%',
    }
})