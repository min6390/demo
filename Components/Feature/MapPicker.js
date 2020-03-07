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
    default as Dimensions,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import {check, request, openSettings, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {failedColor} from 'react-native-calendars/src/style';


export default class MapPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 10.793049,
                longitude: 106.659384,
                latitudeDelta: 0.0019,
                longitudeDelta: 0.0019,
            },
            bottomMargin: 1,
        };
    }

    checkLocationPermission = async (callback) => {
        const result = await check(Platform.select({
            ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        }));
        if (result === RESULTS.GRANTED) {
            callback(true);
        } else {
            this.requestLocationPermission(callback);
        }
    };

    requestLocationPermission = async (callback) => {
        const result = await request(Platform.select({
            ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        }));
        if (result === RESULTS.GRANTED) {
            callback(true);
        } else {
            if (result === RESULTS.BLOCKED) {
                openSettings().catch(() => console.log('Cannot open settings.'));
            } else {
                callback(false);
            }
        }
    };

    componentDidMount() {
        this.checkLocationPermission((status) => {
            if (status) {
                Geolocation.getCurrentPosition((position) => {
                        // console.log('AAA', position);
                        this.setState({
                            region: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            },
                            marker: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            },
                        });
                    }, error => console.log(error),
                    {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000});
            }
        });

    }

    render() {
        return (
            <View style={{flex: 2}}>
                <MapView
                    showsMyLocationButton={true}
                    style={{
                        flex: 1,
                        marginBottom: this.state.bottomMargin,             // using state in styling
                    }}
                    region={this.state.region}
                    showsUserLocation={true}
                    onMapReady={() => this.setState({bottomMargin: 0})}
                    onRegionChangeComplete={(RegionChange) => {
                        this.setState({
                            RegionChange: {
                                latitude: 10.793049,
                                longitude: 106.659384,
                            },
                        });
                    }}>
                </MapView>
            </View>
        );
    }
}

