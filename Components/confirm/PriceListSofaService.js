import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView, FlatList,
} from 'react-native';

export default class PriceListSofaService extends React.Component {
    render() {
        return (
            <View>
                <ScrollView style={{flexDirection: 'row'}}
                            horizontal={true}>
                    <View style={styles.container}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>KHU VỰC HÀ NỘI</Text>
                        </View>
                        <FlatList
                            data={PRICE_HN}
                            renderItem={({item}) =>
                                <View>
                                    <View style={styles.titles}>
                                        <Text style={{
                                            color: 'gray',
                                            textAlignVertical: 'center',
                                            marginVertical: 15,
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            textAlignVertical: 'center',
                                            marginVertical: 15,
                                        }}>{item.price}</Text>
                                    </View>
                                </View>}/>
                        <TouchableOpacity style={styles.btnContinue}
                                          onPress={() => {
                                              this.props.navigation.navigate('Sofa');
                                          }}>
                            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 15}}>Tiếp
                                tục</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>KHU VỰC HỒ CHÍ
                                MINH</Text>
                        </View>
                        <FlatList
                            data={PRICE_SG}
                            renderItem={({item}) =>
                                <View>
                                    <View style={styles.titles}>
                                        <Text style={{
                                            color: 'gray',
                                            textAlignVertical: 'center',
                                            marginVertical: 15,
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            textAlignVertical: 'center',
                                            marginVertical: 15,
                                        }}>{item.price}</Text>
                                    </View>
                                </View>}/>
                        <TouchableOpacity style={styles.btnContinue}
                                          onPress={() => {
                                              this.props.navigation.navigate('Sofa');
                                          }}>
                            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 15}}>Tiếp
                                tục</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
        btnContinue: {
            backgroundColor: 'green',
            height: windowWidth / 12,
            justifyContent: 'center',
            borderRadius: 5,
        },
        titles: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 5,
            borderBottomWidth: 1 / 2,
        },
        container: {
            padding: 10,
            width: windowWidth - 50,
            height: windowWidth * 1.5,
            backgroundColor: '#FFF',
            marginHorizontal: windowWidth / 18,
            marginVertical: 30,
            borderRadius: 10,
            borderWidth: 1 / 3,
            borderColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
        },
    },
);
const PRICE_HN = [
    {
        name: 'Nệm bông ép',
        price: ' 300-500k/chiếc',
    },
    {
        name: 'Nệm cao su/lò xo',
        price: '350-500k/chiếc',
    },
    {
        name: 'Sofa nỉ/vải',
        price: '300-500K/chiếc',
    },
    {
        name: 'sofa da',
        price: '400-600k/chiếc',
    },
    {
        name: 'Thảm gia đình',
        price: '250-350k/chiếc',
    },
    {
        name: 'Thảm văn phòng',
        price: '6-15k/m2',
    },
    {
        name: 'Rèm',
        price: '40k/kg',
    },
];
const PRICE_SG = [
    {
        name: 'Nệm bông ép',
        price: ' 250-350k/chiếc',
    },
    {
        name: 'Nệm cao su/lò xo',
        price: '300-400k/chiếc',
    },
    {
        name: 'Sofa nỉ/vải',
        price: '250-400K/chiếc',
    },
    {
        name: 'sofa da',
        price: '300-500k/chiếc',
    },
    {
        name: 'Thảm gia đình',
        price: '250-350k/chiếc',
    },
    {
        name: 'Thảm văn phòng',
        price: '6-15k/m2',
    },
    {
        name: 'Rèm',
        price: '40k/kg',
    },
];