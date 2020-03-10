import React from 'react';
import {
    StyleSheet,
    View,
    Text, Alert,
    Image, TouchableOpacity,
} from 'react-native';
import * as firebase from 'react-native-firebase';

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            number :0
        }
    }

    render() {
        const ProgramBar = (props) => {
            const process = props.process;
            return (
                <View {...props}>
                    <View style={process >-1 ? styles.imageView:styles.imageViewFinal}>
                        <Image
                            source={require('../../images/thanhtientrinh/sort.png')}/>
                    </View>
                    <View style={process >0 ? styles.line:styles.lineFinal}/>
                    <View style={process >-0 ? styles.imageView:styles.imageViewFinal}>
                        <Image
                            source={require('../../images/thanhtientrinh/tick.png')}/>
                    </View>
                    <View style={process >1 ? styles.line:styles.lineFinal}/>
                    <View style={process >1 ? styles.imageView:styles.imageViewFinal}>
                        <Image
                            source={require('../../images/thanhtientrinh/dollar.png')}/>
                    </View>
                </View>

            );
        };
        return (
            <View style={{alignItems: 'center', flex: 1,margin:5}}>
                <ProgramBar style={styles.ProgramBar} process={this.state.number}></ProgramBar>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    line: {
        height: 2,
        flex: 2,
        backgroundColor: '#8dd0ff',
    },
    imageView: {
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 105,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: '#8dd0ff',
    },
    imageViewFinal:{
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 105,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: 'gray',
    },
    lineFinal: {
        height: 2,
        flex: 2,
        backgroundColor: 'gray',
    },
    ProgramBar: {
        marginHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
