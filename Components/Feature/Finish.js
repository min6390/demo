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


export default class Finish extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 30, color: '#dcdcdc'}}> Thanks You !</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>
                    <Text>
                        Back to Login
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}
const windowHeight = Dimensions.get('window').height;
