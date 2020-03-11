import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Modal, TouchableOpacity, Image, Dimensions,
} from 'react-native';


import Picker from '@gregfrench/react-native-wheel-picker';

const PickerItem = Picker.Item;

export default class WheelPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            leftPicker: 0,
            rightPicker: 0,
            firstTime: ['08:00', '08:30', '09:00', '09:30', '10:00'],
            lastTime: ['10:00', '10:30', '11:00', '11:30', '12:00'],
            isModalVisiblePicker: false,
        };
    }

    open() {
        this.setState({isModalVisiblePicker: true});
    }

    dateTime = () => {
        const number = this.state.number;
        if (number == 0) {
            this.setState({
                firstTime: ['08:00', '08:30', '09:00', '09:30', '10:00'],
                lastTime: ['10:00', '10:30', '11:00', '11:30', '12:00'],
            });
        } else if (number == 1) {
            this.setState({
                firstTime: ['13:00', '13:30', '14:00', '14:30', '15:00'],
                lastTime: ['15:00', '15:30', '16:00', '16:30', '17:00'],
            });
        } else if (number == 2) {
            this.setState({
                firstTime: ['17:00', '17:30', '18:00', '18:30', '19:00'],
                lastTime: ['19:00', '19:30', '20:00', '20:30', '21:00'],
            });

        }
    };

    validate = () => {
        let {leftPicker, rightPicker} = this.state;
        if (leftPicker > 0) {
            if (rightPicker < leftPicker) {
                this.setState({rightPicker: leftPicker});
            }
        }
    };

    renderWorkTime() {
        const ProgramBar = (props) => {
            let process = props.process;
            return (
                <View {...props}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                        <View style={process == 0 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={process == 0 ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 0}, this.dateTime);
                                  }}>
                                SÁNG
                            </Text>
                        </View>
                        <View style={process == 1 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={process == 1 ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 1}, this.dateTime);
                                  }}>
                                CHIỀU
                            </Text>
                        </View>
                        <View style={process == 2 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={process == 2 ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 2}, this.dateTime);
                                  }}>
                                TỐI
                            </Text>
                        </View>
                    </View>
                </View>);
        };
        return (
            <View>
                <ProgramBar process={this.state.number}/>
            </View>
        );
    };

    render() {
        return (
            <View>
                {this.renderWorkTime()}
                <View style={{flexDirection: 'row', marginVertical: 10, marginHorizontal: 10}}>
                    <Text style={{fontWeight: 'bold'}}> Giờ làm việc : </Text>
                    <Text
                        style={{marginHorizontal: 20, color: 'blue'}}
                        onPress={() => {
                            this.setState({isModalVisiblePicker: true});
                        }}>
                        {this.state.firstTime[this.state.leftPicker]} - {this.state.lastTime[this.state.rightPicker]}
                    </Text>
                </View>
                <Modal
                    transparent={true}
                    visible={this.state.isModalVisiblePicker}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flex: 1,
                        backgroundColor: 'gray',
                        opacity: 0.9,
                    }}>

                        <View style={styles.container}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <TouchableOpacity
                                        style={{width: 16, height: 16}}
                                        onPress={() => {
                                            this.setState({isModalVisiblePicker: false});
                                        }}>
                                        <Image
                                            source={require('../../images/close.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{marginHorizontal: 80, fontSize: 18}}> Giờ làm việc </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Picker style={styles.wheelPicker}
                                        selectedValue={this.state.leftPicker}
                                        itemStyle={{color: 'black', fontSize: 26}}
                                        onValueChange={(index) => this.setState({leftPicker: index}, this.validate)}>
                                    {this.state.firstTime.map((value, i) => (
                                        <PickerItem label={value} value={i} key={'money' + value}/>
                                    ))}
                                </Picker>
                                <Picker style={styles.wheelPicker}
                                        selectedValue={this.state.rightPicker}
                                        itemStyle={{color: 'black', fontSize: 26}}
                                        onValueChange={(index) => this.setState({rightPicker: index}, this.validate)}>
                                    {this.state.lastTime.map((value, i) => (
                                        <PickerItem label={value} value={i} key={'money' + value}/>
                                    ))}
                                </Picker>
                            </View>
                            <TouchableOpacity style={styles.btnFinish}
                                              onPress={() => {
                                                  this.setState({isModalVisiblePicker: false});

                                              }}>
                                <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            // {/*  </View>*/}
            //     {/*    <Text style={{margin: 20, color: '#ffffff'}}>*/}
            //     {/*        Đây là gì：{this.state.itemList[this.state.selectedItem]}*/}
            //     {/*    </Text>*/}
            //
            //     {/*    <Text style={{margin: 20, color: '#ffffff'}}*/}
            //     {/*          onPress={this.onAddItem}>*/}
            //     {/*        Đây nữa？*/}
            //     {/*    </Text>*/}
            //     {/*    <Text>{this.state.itemList[this.state.selectedItem]}</Text>*/}
            //     {/*</View>*/}
        );
    }
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    btnFinish: {
        borderRadius: 10,
        backgroundColor: 'green',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    wheelPicker: {
        width: 150,
        height: 100,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container: {
        position: 'absolute',
        borderColor: 'black',
        top: (windowWidth / 2) * 2.5,
        borderRadius: 20,
        height: windowWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titleContainer: {
        borderRadius: 8,
        height: 35,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    baseContainer: {
        height: 35,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseText: {
        fontWeight: 'bold',
    },
    titleText: {
        fontWeight: 'bold',
        color: 'white',
    },
});
