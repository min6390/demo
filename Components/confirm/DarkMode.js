import React, {Component} from 'react';
import {
    View,
    isEnabled,
    Switch, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import {Appearance} from 'react-native-appearance';
import theme, {darkTheme, lightTheme} from './theme';


export default class darkMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: true,
            switchValue: false,
        };
    }

    // toggleSwitch = (value) => {
    //     this.setState({switchValue: value});
    //     if (this.state.switchValue === true) {
    //         this.setState({isDark: true});
    //     } else {
    //         this.setState({isDark: false});
    //     }
    //
    // };
    open() {
        this.setState({switchValue: false});
    }


    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.setState({isDark: false})}>
                    <Text>Light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState({isDark: true})}>
                    <Text>dark</Text>
                </TouchableOpacity>
                {/*<Switch*/}
                {/*    trackColor={{false: '#767577', true: '#81b0ff'}}*/}
                {/*    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}*/}
                {/*    onValueChange={this.toggleSwitch}*/}
                {/*    value={this.state.switchValue}*/}
                {/*/>*/}
            </View>
        );
    }
}
const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'light' ? 'white' : 'black';
const color = isDark ? '#405af1' : '#f20';
let backgroundColor = isDark ? lightTheme.titleColor : darkTheme.titleColor;


