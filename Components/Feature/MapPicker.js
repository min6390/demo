import React, {Component} from 'react';
import {
    Alert,
    Text,
    TouchableHighlight,
    View,
    Modal,
    ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import MapView from 'react-native-maps';

export default class MapPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return  (
        <MapView
            style={{flex:1}}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
