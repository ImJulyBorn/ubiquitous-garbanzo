import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	ImageBackground,
	Image,
	Alert,
	ToastAndroid,
	KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import {collection} from 'firebase/firestore';
import firebase from 'firebase';
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    
    handleLogin=(email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.navigate("BottomTab")
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    render(){
        const {email,password} = this.state;

        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' >
                <ImageBackground style={styles.bgImage} source={require("../assets/background2.png")}>
                  <View style={styles.upperContainer}>
                    <Image source={require("../assets/appIcon.png")} style={styles.appIcon}></Image>
                    <Image source={require("../assets/appName.png")} style={styles.appName}></Image>
                  </View>

                  <View style={styles.lowerContainer}>
                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter your email address'}
                        onChangeText={(input)=>{
                            this.setState({
                                email: input
                            })
                        }}
                        placeholderTextColor={"grey"}
                    />

                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter you password'
                        onChangeText={(input)=>{
                            this.setState({
                                password: input
                            })
                        }}
                        placeholderTextColor={'grey'}
                    />

                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.handleLogin(this.state.email, this.state.password)
                    }}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    
                  </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: 
    { flex: 1, backgroundColor: '#FFFFFF', }, 
    bgImage: 
    { flex: 1, resizeMode: 'cover', justifyContent: 'center', }, 
    upperContainer: 
    { flex: 0.5, justifyContent: 'center', alignItems: 'center', }, 
    appIcon: 
    { width: 280, height: 280, resizeMode: 'contain', marginTop: 80, }, 
    appName: 
    { width: 130, height: 130, resizeMode: 'contain', }, 
    lowerContainer: 
    { flex: 0.5, alignItems: 'center', },
    textinput: { width: '75%', height: 55, padding: 10, borderColor: '#FFFFFF', borderWidth: 4, borderRadius: 10, fontSize: 18, color: '#FFFFFF', fontFamily: 'Rajdhani_600SemiBold', backgroundColor: '#5653D4', }, button: { width: '43%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F48D20', borderRadius: 15, }, buttonText: { fontSize: 24, color: '#FFFFFF', fontFamily: 'Rajdhani_600SemiBold', },
})