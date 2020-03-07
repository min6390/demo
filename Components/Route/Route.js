import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../LoginPACK/SignIn';
import SignUp from '../LoginPACK/SignUp';
import ForgotPassword from '../LoginPACK/ForgotPassword';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../MainPack/Home';
import Loading from './Loading';
import History from '../MainPack/History';
import cNotification from '../MainPack/cNotification';
import Screen from '../MainPack/Screen';
import Account from '../MainPack/HomePack/Account';
import ACCleaning from '../MainPack/HomePack/ACCleaning';
import MapPicker from '../Feature/MapPicker';
import Finish from '../Feature/Finish';
import TotalSanitation from '../MainPack/HomePack/TotalSanitation';


const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image source={require('../../images/imageBooking/home.png')}
                           style={styles.icon}/>
                ),
            },
        },
        History: {
            screen: History,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: () => (
                    <Image source={require('../../images/imageBooking/history.png')}
                           style={styles.icon}/>
                ),
            },
        },
        cNotification: {
            screen: cNotification,
            navigationOptions: {
                tabBarLabel: 'Notification',
                tabBarIcon: () => (
                    <Image source={require('../../images/imageBooking/writing.png')}
                           style={styles.icon}/>
                ),
            },
        },
        Screen: {
            screen: Screen,
            navigationOptions: {
                tabBarLabel: 'Screen',
                tabBarIcon: () => (
                    <Image source={require('../../images/imageBooking/clock.png')}
                           style={styles.icon}/>
                ),
            },
        },
    },
);
const LoginNavigator = createStackNavigator({
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                headerShown: false,
            },
        },

        SignUp: {
            screen: SignUp,
            navigationOptions: {
                headerShown: false,
            },
        },

        ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions: {
                headerShown: false,/**/
            },
        },
    },
);

const Navigator = createStackNavigator({
    LoginNavigator: {
        screen: LoginNavigator,
        navigationOptions: {
            headerShown: false,
        },
    },

    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            headerShown: false,
        },
    },

    ACCleaning: {
        screen: ACCleaning,
        navigationOptions: {},
    },

    Account: {
        screen: Account,
        navigationOptions: {
            headerShown: false,
        },
    },
    MapPicker: {
        screen: MapPicker,
        navigationOptions: {},
    },
    Finish: {
        screen: Finish,
        navigationOptions: {headerShown: false},
    },
    TotalSanitation: {
        screen: TotalSanitation,
        navigationOptions: {},
    },
    Loading: {
        screen: Loading,
        navigationOptions: {
            headerShown: false,
        },
    },

}, {initialRouteName: 'Loading'});

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

export default createAppContainer(Navigator);
