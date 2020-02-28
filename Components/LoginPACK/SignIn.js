import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput, Image, KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';

export default class SignIn extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../images/removebg-preview.png')}/>
                </View>
                <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 10}}>LOGIN</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your Email'}/>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your Password'}/>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>OR</Text>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewButtonRow}>
                    <TouchableOpacity >
                        <Text style={{fontSize: 15, textAlign: 'center',color:'#708090'}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{fontSize: 15, textAlign: 'center',color:'#708090'}}>Forgot your password ?</Text>
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
    viewButtonRow:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal:25,

    }
});
