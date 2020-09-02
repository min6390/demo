import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, TouchableOpacity,
} from 'react-native';
import theme, {stylesTest} from '../confirm/theme';
import DarkMode, {styleDarkMode} from '../confirm/DarkMode';
import { Appearance, useColorScheme } from 'react-native-appearance';
import RenderModal from '../Feature/RenderModal';
import colors from '../confirm/colors';
export default class History extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            switchValue : false
        }
    }
    onPressDark = (switchValue) => {
        this.setState({switchValue});

    };
    render(){
        return(
            <View style={[styles.container,{flex:1}]}>
                <DarkMode onPressDark={this.onPressDark}/>
                <TouchableOpacity onPress={() => alert(Appearance.getColorScheme())}>
                    <Text>fawf</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container :{
        backgroundColor:colors.wallpaperColor
    }
});