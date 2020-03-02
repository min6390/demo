import React from 'react';
import {
    StyleSheet,
    View,
    Text, Alert,
    Image, TouchableOpacity,
} from 'react-native';
import * as firebase from 'react-native-firebase';

export default class Account extends React.Component {
    constructor() {
        super();
    };

    signOut = () => {
        Alert.alert(
            'Thông báo',
            'Bạn thực sự muốn đăng xuất ?',
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        console.log('BBB',"qfqw");
                        firebase
                            .auth()
                            .signOut()
                          //  .then(() => this.props.navigation.navigate('LoginNavigator'))
                            .catch(error => {});
                    },
                },
            ],
            {cancelable: false},
        );

    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>
                    THÔNG TIN TÀI KHOẢN
                </Text>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, flexDirection: 'row'}}>
                    <Image
                        style={styles.imageView}
                        source={require('../../../images/imageBooking/account.png')}/>

                </View>
                <View style={{marginHorizontal: 20, marginTop: 40}}>
                    <Text style={styles.textView}>Name:</Text>
                    <Text style={styles.textView}>Ngày sinh:</Text>
                    <Text style={styles.textView}>Số điện thoại:</Text>
                    <Text style={styles.textView}>Email:</Text>
                    <Text style={styles.textView}>Địa chỉ:</Text>
                    <Text style={styles.textView}>View địa chỉ:</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/*<TouchableOpacity*/}
                    {/*    onPress={() => this.props.navigation.navigate('TabNavigator')}>*/}

                    {/*</TouchableOpacity>*/}
                    <TouchableOpacity style={styles.buttonLogOut}
                                      onPress={this.signOut}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}> Đăng xuất </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        fontSize: 16,
        margin: 5,
    },
    buttonLogOut: {
        margin: 10,
    },
});
