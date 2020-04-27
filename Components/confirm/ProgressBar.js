import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

export default ({process}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15}}>
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
