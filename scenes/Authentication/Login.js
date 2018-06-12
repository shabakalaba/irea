import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { firebaseRef } from '../../services/firebase';

export default class Login extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this._login = this._login.bind(this)
    }

    _login()
    {
        console.log(this.state.email)
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
            console.log(error.code)
            console.log(error.message)
        })
    }
    render(){
        return(
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.imageContainer}>
                    <Text style={styles.image}>IREA</Text>
                </View>
                <View style={styles.inputButtons}>
                    <View style={styles.textContainer}>
                        <TextInput 
                            style={styles.textInput} 
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({email: text})}   
                            value={this.state.email}
                            placeholder="EMAIL"
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <TextInput 
                            style={styles.textInput} 
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({password: text})}   
                            value={this.state.password}
                            placeholder="PASSWORD"    
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.login}>
                        <Button onPress={this._login}><Text>Login</Text></Button>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton}>
                            <Text style={styles.registerButtonText}>Create Account</Text>
                        </TouchableOpacity>
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
        marginBottom: 150,
        marginTop: 100
    },
    inputButtons:{
        width: '90%',
    },
    textContainer: {
        marginTop: 10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
    },
    textInput: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 18,
        fontWeight: '700',
        width: '100%',
    }
})