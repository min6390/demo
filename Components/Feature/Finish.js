import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

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

