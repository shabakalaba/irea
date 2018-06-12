import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
export default class Login extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render(){
        return(
            <ViewContainer>
                <StatusbarBackground />

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
                        <Button><Text>Login</Text></Button>
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
    }
})