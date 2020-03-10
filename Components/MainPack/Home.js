import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, TouchableOpacity,
} from 'react-native';

const widthScreen = Dimensions.get('window').width;

export default class Home extends React.Component {
    render() {
        return (
            <View style={{height: '100%'}}>
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
                <ScrollView>
                    <View style={styles.viewScrollView}>
                        <TouchableOpacity style={styles.buttonViewLeft}
                                          onPress={() => this.props.navigation.navigate('ACCleaning')}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/washing-machine.png')}/>
                            </View>
                            <Text>
                                ACCleaning
                            </Text>
                            <View style={{
                                position: 'absolute', right: 15, top: 10, borderRadius: 5, borderColor: 'gray'
                                , borderWidth: 1, backgroundColor: 'yellow',
                            }}>
                                <Text>
                                    Ưu đãi
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/bug-spray.png')}/>
                            </View>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('TotalSanitation');
                                          }}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/vacuum-cleaner.png')}/>
                            </View>
                            <Text>
                                Tổng vệ sinh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('Retail');
                                          }}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/broom.png')}/>
                            </View>
                            <Text>
                                Dùng lẻ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/schedule.png')}/>
                            </View>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}>
                            <View style={styles.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/couch.png')}/>
                            </View>
                            <Text>
                                fwasfw
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#8fbc8f',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Text> Khuyết mãi </Text>
                        <Text style={{fontSize: 20}}> . . . </Text>
                        <Text> Xem tất cả </Text>
                    </View>
                    <ScrollView style={{flexDirection: 'row'}}
                                horizontal={true}>
                        <TouchableOpacity>
                            <Image
                                style={styles.imageViewCard}
                                source={require('../../images/1.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.imageViewCard}
                                source={require('../../images/2.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.imageViewCard}
                                source={require('../../images/3.png')}/>
                        </TouchableOpacity>
                    </ScrollView>
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
    imageAccount: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 2,
        marginLeft: 15,
    },
    textAccount: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#778899',
    },
    viewScrollView: {
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
    },
    buttonViewLeft: {
        width: (widthScreen - 80) / 2,
        height: (widthScreen - 80) / 2,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8fbc8f',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    imageViewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderColor: '#6495ed',
        borderRadius: 50,
        borderWidth: 3,
        marginTop: 10,
    },
    imageViewCard: {
        height: 150,
        width: 320,
        margin: 10,
        marginHorizontal: 10,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: 'gray',
    },
});
