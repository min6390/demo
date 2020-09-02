import React from 'react';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Text, Image, TouchableOpacity, Switch, isEnabled,
} from 'react-native';
import {Appearance, AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {darkTheme, lightTheme, stylest, stylesTest} from '../confirm/theme';

const widthScreen = Dimensions.get('window').width;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: true,
            switchValue: false,
        };
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value});
        const colorScheme = useColorScheme();
        if (this.state.switchValue == true) {
            this.setState({isDark: true});
        } else {
            this.setState({isDark: false});
        }
    };

    render() {
        let {isDark} = this.state;
        return (
            <View style={{height: '100%'}}>
                <View
                    style={[stylesTest.container, {backgroundColor: isDark ? lightTheme.titleColor : darkTheme.titleColor}]}>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Account')}>
                            <Image
                                style={stylesTest.imageView}
                                source={require('../../images/user.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', paddingHorizontal: 15}}>
                        <Text>Hello</Text>
                        <Text>......</Text>
                    </View>
                    <View style={{marginLeft: widthScreen / 2, justifyContent: 'center'}}>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue}
                        />
                    </View>
                </View>
                <ScrollView style={{backgroundColor: isDark ? lightTheme.titleColor : darkTheme.titleColor}}>
                    <View
                        style={[stylesTest.viewScrollView, {backgroundColor: isDark ? lightTheme.titleColor : darkTheme.titleColor}]}>
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => this.props.navigation.navigate('ACCleaning')}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/washing-machine.png')}/>
                            </View>
                            <Text>
                                Vệ sinh điện lạnh
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
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('Disinfection');
                                          }}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/bug-spray.png')}/>
                            </View>
                            <Text>
                                Phun, khử khuẩn
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('TotalSanitation');
                                          }}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/vacuum-cleaner.png')}/>
                            </View>
                            <Text>
                                Tổng vệ sinh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('Retail');
                                          }}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/broom.png')}/>
                            </View>
                            <Text>
                                Dùng lẻ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('Periodic');
                                          }}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/schedule.png')}/>
                            </View>
                            <Text>
                                Định kỳ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesTest.buttonViewLeft}
                                          onPress={() => {
                                              this.props.navigation.navigate('Sofa');
                                          }}>
                            <View style={stylesTest.imageViewButton}>
                                <Image
                                    source={require('../../images/imagesHome/couch.png')}/>
                            </View>
                            <Text>
                                Vệ sinh sofa
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
                                style={stylesTest.imageViewCard}
                                source={require('../../images/1.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={stylesTest.imageViewCard}
                                source={require('../../images/2.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={stylesTest.imageViewCard}
                                source={require('../../images/3.png')}/>
                        </TouchableOpacity>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'light' ? 'dark' : 'light';
const color = isDark ? '#405af1' : '#f20';

// const styles= StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         height: '8%',
//         //backgroundColor: '#8fbc8f',
//         paddingHorizontal: 10,
//     },
//     imageView: {
//         height: 40,
//         width: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 20,
//     },
//     imageAccount: {
//         height: 40,
//         width: 40,
//         borderColor: 'gray',
//         borderRadius: 20,
//         borderWidth: 2,
//         marginLeft: 15,
//     },
//     textAccount: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginLeft: 20,
//         color: '#778899',
//     },
//     viewScrollView: {
//         margin: 10,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginHorizontal: 20,
//     },
//     buttonViewLeft: {
//         width: (widthScreen - 80) / 2,
//         height: (widthScreen - 80) / 2,
//         backgroundColor: '#FFF',
//         marginHorizontal: 10,
//         marginVertical: 5,
//         borderRadius: 20,
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#8fbc8f',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 5,
//         },
//         shadowOpacity: 0.36,
//         shadowRadius: 6.68,
//
//         elevation: 11,
//     },
//     imageViewButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 50,
//         width: 50,
//         borderColor: '#6495ed',
//         borderRadius: 50,
//         borderWidth: 3,
//         marginTop: 10,
//     },
//     imageViewCard: {
//         height: 150,
//         width: 320,
//         margin: 10,
//         marginHorizontal: 10,
//         borderRadius: 27,
//         borderWidth: 1,
//         borderColor: 'gray',
//     },
// });
