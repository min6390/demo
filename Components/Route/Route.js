import React from 'react';
import {
    StyleSheet, Image,
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
import Retail from '../MainPack/HomePack/Retail';
import ServiceConfirmation from '../confirm/ServiceConfirmation';
import MoneyPay from '../Feature/MoneyPay';
import Periodic from '../MainPack/HomePack/Periodic';
import Sofa from '../MainPack/HomePack/Sofa';
import PriceListSofaService from '../confirm/PriceListSofaService';
import Disinfection from '../MainPack/HomePack/Disinfection';
import darkMode from '../confirm/DarkMode';


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
        navigationOptions: {
            title: 'Vệ sinh điện lạnh',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },

    Account: {
        screen: Account,
        navigationOptions: {
            headerShown: false,
        },
    },
    ServiceConfirmation: {
        screen: ServiceConfirmation,
        navigationOptions: {
            title: 'Xác nhận dịch vụ',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    MapPicker: {
        screen: MapPicker,
        navigationOptions: {},
    },
    Disinfection: {
        screen: Disinfection,
        navigationOptions: {},
    },
    Finish: {
        screen: Finish,
        navigationOptions: {headerShown: false},
    },
    TotalSanitation: {
        screen: TotalSanitation,
        navigationOptions: {
            title: 'Tổng vệ sinh',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    Retail: {
        screen: Retail,
        navigationOptions:{
            title: 'Dùng lẻ',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    Sofa: {
        screen: Sofa,
        navigationOptions: {
            title: 'Vệ sinh Sofa',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    DarkMode: {
        screen: darkMode,

    },
    MoneyPay: {
        screen: MoneyPay,
    },
    Periodic: {
        screen: Periodic,
        navigationOptions: {
            title: 'Định kỳ',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    PriceListSofaService: {
        screen: PriceListSofaService,
        navigationOptions: {
            title: 'Bảng giá dịch vụ',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
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
