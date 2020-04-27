import React, {Component} from 'react';
import {
    View,
    Dimensions, FlatList, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import ProgressBar from '../confirm/ProgressBar';

const DATA = [
    {

        title: 'Online qua VNPAY (giảm 5%)',
    },
    {

        title: 'Online qua Ngân Lượng',
    },
    {

        title: 'Ví momo',
    },
    {

        title: 'Viettel Pay',
    },
    {

        title: 'Tiền mặt',
    },
];

export default class MoneyPay extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ProgressBar process={2}/>
                <FlatList
                    data={DATA}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            <Text style={{fontSize: 18}}>{item.title}</Text>
                        </View>
                    }
                />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={{
                        justifyContent: 'center', width: windowWidth - 30, height: windowWidth / 8,
                        backgroundColor: 'green', alignItems: 'center', borderRadius: 15, marginBottom: 15,
                    }}
                                      onPress={() => {
                                          this.props.navigation.navigate('Finish')
                                      }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> TIẾP TỤC </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        height: windowWidth / 8,
        justifyContent: 'center',
        padding: 30,
        borderRadius: 20,
        borderWidth: 1,
        margin: 10,
        borderColor: 'gray',
        backgroundColor: '#d3d3d3',
    },
});
