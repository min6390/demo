import React, {Component} from 'react';
import {
    Alert,
    Text,
    TouchableHighlight,
    View,
    Modal,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    default as PermissionsAndroid,
    Dimensions,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import {check, request, openSettings, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {failedColor} from 'react-native-calendars/src/style';


export default class RetailMoney extends Component {
    render() {
        console.log('AAA',this.props.money)
        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', margin: 10,
                alignItems: 'center', marginHorizontal: 20,
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Text>
                        Số tiền
                    </Text>
                    <Text style={{color: 'gray'}}>
                        (đã bao gồm phí dụng cụ):
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}> {this.props.money}</Text>
                </View>
            </View>

        );
    }
}
const windowHeight = Dimensions.get('window').height;
