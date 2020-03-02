import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import {HeaderTitle} from 'react-navigation-stack';


export default class ACCleaning extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" enabled>
                <View style={{justifyContent: 'space-between'}}>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/placeholder.png')}/>
                        <Text style={styles.title}>ĐỊA ĐIỂM LÀM VIỆC</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonView}
                    onPress={()=>this.props.navigation.navigate('MapPicker')}>
                        <Text></Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/home.png')}/>
                        <Text style={styles.title}>SỐ NHÀ/CĂN HỘ</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text>ĐỊA ĐIỂM LÀM VIỆC</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/calendar.png')}/>
                        <Text style={styles.title}>LỊCH LÀM VIỆC</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text>ĐỊA ĐIỂM LÀM VIỆC</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/bank.png')}/>
                        <Text style={styles.title}>GIÁ THAM KHẢO</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text>ĐỊA ĐIỂM LÀM VIỆC</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/writing.png')}/>
                        <Text style={styles.title}>GHI CHÚ</Text>
                    </View>
                    <TextInput
                        style={styles.inputView}
                        placeholder='Ghi chú'/>
                    <TouchableOpacity style={styles.buttonConfirm}>
                        <Text style={{fontSize: 15}}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonView: {
        borderWidth: 1 / 2,
        backgroundColor: '#cdd9e3',
        width: '95%',
        height: '9%',
        marginHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        fontSize: 15,
        marginHorizontal: 10,
    },
    inputView: {
        borderWidth: 1 / 2,
        backgroundColor: '#cdd9e3',
        width: '95%',
        height: '18%',
        marginHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    buttonConfirm: {
        marginTop: 30,
        backgroundColor: '#cdd9e3',
        marginHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
