import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,Alert,
    Text,
    StatusBar, TextInput, Image, KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';
import * as firebase from "react-native-firebase";
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            spinner:false,
        }
    }

    emailLogin = () => {
        const {email, password} = this.state;
        if (email && password) {
            this.setState({spinner: true});
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(()=>this.setState({spinner: false}))
                .then(() => this.props.navigation.navigate('Home'))
                .catch(error =>
                    this.setState({errorMessage: error.message},
                        this.setState({spinner: false}),
                        Alert.alert(
                            'Error',
                            'Sai tài khoản or Mật khẩu',
                            [{text: 'OK'}])));
        }
    };


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../images/removebg-preview.png')}/>
                        <Spinner
                        visible={this.state.spinner}/>
                </View>
                <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 10}}>LOGIN</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your Email'}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        this.refs.txtPassword.focus();
                    }}
                    onChangeText={email => {
                        this.setState({email});
                    }}
                    value={this.state.email}/>
                <TextInput
                    maxLength={15}
                    style={styles.textInput}
                    placeholder={'Enter your Password'}
                    secureTextEntry
                    ref={'txtPassword'}
                    onChangeText={password => {
                        this.setState({password});
                    }}
                    value={this.state.password}/>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={styles.buttonView}
                    onPress={this.emailLogin}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>OR</Text>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewButtonRow}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Forgot your password
                            ?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'black',
        backgroundColor: '#dcdcdc',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1 / 2,
        borderRadius: 10,
        borderColor: 'gray',
    },
    buttonView: {
        color: 'black',
        backgroundColor: '#8fbc8f',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1 / 2,
        borderRadius: 8,
        borderColor: 'gray',
    },
    viewButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,

    },
});
