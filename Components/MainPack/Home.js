import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Account')}>
                            <Image
                                style={styles.imageView}
                                source={require('../../images/user.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', paddingHorizontal: 15}}>
                        <Text>Hello</Text>
                        <Text>......</Text>
                    </View>
                </View>
                <ScrollView style={{height: '92%'}}>

                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '8%',
        backgroundColor: '#8fbc8f',
        paddingHorizontal: 10,
    },
    imageView: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
    },
});
