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
                        onPress={()=>this.props.navigation.navigate('ACCleaning')}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/washing-machine.png')}/>
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
                        <TouchableOpacity style={styles.buttonViewRight}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/bug-spray.png')}/>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/vacuum-cleaner.png')}/>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewRight}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/broom.png')}/>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewLeft}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/schedule.png')}/>
                            <Text>
                                fwasfwafawfw
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewRight}>
                            <Image
                                style={styles.imageViewButton}
                                source={require('../../images/imagesHome/couch.png')}/>
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
        width: 150,
        height: 150,
        backgroundColor: '#8fbc8f',
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
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
    buttonViewRight: {
        width: 150,
        height: 150,
        backgroundColor: '#8fbc8f',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        margin: 10,
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
