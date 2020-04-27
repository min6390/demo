import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,Alert,
    StatusBar, TextInput, Image, KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';

import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            spinner:false,
        }
    }
    Register = () => {
        const {email, password,spinner} = this.state;
        if (email && password) {
            if (password.length > 5) {
              this.setState({spinner: true});
                console.log('AAA','feqfw');
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() => Alert.alert(
                        'Alert Title',
                        'Create Account Success',
                        [
                            {text: 'OK', onPress: () => this.props.navigation.navigate('SignIn')},
                        ],
                        {cancelable: false},
                    ))
                    .catch(error =>
                        this.setState(
                            {errorMessage: error.message},
                            this.setState({spinner: false})
                        ));
            } else {
                Alert.alert(
                    'Error',
                    'Password hơn 6 kí tự ',
                    [{text: 'OK'}]);
            }
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
                <Text
                    style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 10}}>REGISTER</Text>
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
                    onPress={this.Register}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Create to Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewButtonRow}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Back to Login</Text>
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
