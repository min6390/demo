import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Alert,
} from 'react-native';
import * as firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            spinner: false,
        };
    }

    forgotPassword = () => {
        const {email} = this.state;
        if (email.trim()) {
            this.setState({spinner: true});
            firebase
                .auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    this.setState({spinner: false});
                })
                .then(() => Alert.alert(
                    'Thông báo',
                    'Yêu cầu đã được gửi đến Email của bạn',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('SignIn')},
                    ],
                    {cancelable: false},
                    ),
                ).catch(() => {
                    this.setState({spinner: false});
                    alert('Email không tồn tại');
                },
            );

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
                    style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 10}}>RESET YOUR PASS
                    WORD</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your Email'}
                    onChangeText={email => {
                        this.setState({email});
                    }}
                    value={this.state.email}/>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={styles.buttonView}
                                      onPress={this.forgotPassword}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}
                        >Send</Text>
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
