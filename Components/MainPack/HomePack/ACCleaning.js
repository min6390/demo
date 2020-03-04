import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, Modal, Dimensions,
    StyleSheet, KeyboardAvoidingView, ScrollView,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';


import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    monthNamesShort: ['T1.', 'T2.', 'T3', 'T4', 'T5', 'T6', 'T7.', 'T8', 'T9', 'T10.', 'T11', 'T12'],
    dayNames: ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    dayNamesShort: ['CN.', 'Th2.', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'],
    today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';
export default class ACCleaning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            address: '',
            isCalendarVisible: false,
            a: true,
            dayGet: '',
        };
    }

    renderModal() {
        return (
            <Modal
                animationType={'none'}
                onBackdropPress={() => this.setState({isVisible: false})}
                transparent={true}
                visible={this.state.isModalVisible}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: 'gray',
                    opacity: 0.8,
                }}>
                    <View style={styles.viewModal}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={{width: 16, height: 16, margin: 10}}
                                onPress={() => {
                                    this.setState({isModalVisible: false});
                                }}>
                                <Image
                                    source={require('../../../images/close.png')}/>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal: 80, fontSize: 15}}> Số nhà/Căn hộ </Text>
                        </View>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            <View style={{alignItems: 'center'}}>
                                <TextInput style={styles.viewTextInputModal}
                                           multiline={true}
                                           onChangeText={(address) => {
                                               this.setState({address});
                                           }}
                                           value={this.state.address}>
                                </TextInput>
                                <TouchableOpacity
                                    style={{
                                        borderRadius: 8, width: 70, height: 30, margin: 10, backgroundColor: '#c4c4c4',
                                        justifyContent: 'center', alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        this.setState({isModalVisible: false});
                                    }}>
                                    <Text>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </Modal>

        );
    }

    renderCalendar() {
        const today = moment(this.state.day).format('dddd, DD-MM-YYYY');
        const {a} = this.state;
        return (a ?
                <View style={{marginHorizontal: 5, height: 50, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16}}> {today} </Text>
                </View>
                : <View style={{justifyContent: 'center'}}>
                    <Calendar style={{backgroundColor: '#e6e6e6'}}
                              current={this.state.day}
                              firstDay={1}
                              minDate={time}
                              maxDate={timeMax}
                              onDayPress={(day) => {
                                  this.setState({a: true, day});
                              }}
                    />
                    <TouchableOpacity
                        style={{width: 16, height: 16, margin: 10}}
                        onPress={() => {
                            this.setState({a: true});
                        }}>
                        <Image
                            source={require('../../../images/close.png')}/>
                    </TouchableOpacity>
                </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/placeholder.png')}/>
                        <Text style={styles.title}> ĐỊA ĐIỂM LÀM VIỆC </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
                                              this.props.navigation.navigate('MapPicker');
                                          }}>
                            <Text> ĐỊA ĐIỂM LÀM VIỆC </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/home.png')}/>
                        <Text style={styles.title}> SỐ NHÀ/CĂN HỘ </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
                                              this.setState({isModalVisible: true});
                                          }}>
                            <Text > {this.state.address} </Text>
                            <View>{this.renderModal()}</View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.container}>
                            <Image
                                source={require('../../../images/imageBooking/calendar.png')}/>
                            <Text style={styles.title}> LỊCH LÀM VIỆC </Text>
                        </View>
                        <TouchableOpacity style={styles.buttonViewCalendar}
                                          onPress={() => {
                                              this.setState({a: false});
                                          }}>
                            <View>{this.renderCalendar()}</View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/bank.png')}/>
                        <Text style={styles.title}> BẢNG GIÁ DỊCH VỤ </Text>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text> BẢNG GIÁ DỊCH VỤ </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image
                            style={{margin: 5}}
                            source={require('../../../images/imageBooking/writing.png')}/>
                        <Text style={styles.title}> GHI CHÚ </Text>
                        <TextInput style={styles.inputView}
                                   placeholder={'Nhập vào cái gì đó'}/>
                    </View>
                </ScrollView>
                <View style={{
                    height: '10%',
                    alignItems: 'center',
                    width: windowWidth,
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center', width: windowWidth - 30, height: '70%',
                        backgroundColor: 'green', alignItems: 'center', borderRadius: 15,
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> ĐĂNG KÝ </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const time = moment().format();
const timeMax = moment().add(14, 'days').calendar();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonView: {
        margin: 5,
        height: 50,
        width: '96%',
        borderWidth: 1 / 2,
        backgroundColor: '#e6e6e6',
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    title: {
        width: '75%',
        fontSize: 18,
        marginHorizontal: 5,
    },
    inputView: {
        borderWidth: 1 / 2,
        backgroundColor: '#e6e6e6',
        width: '95%',
        height: windowHeight - 650,
        marginHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    viewModal: {
        margin: 10,
        borderRadius: 20,
        height: '35%',
        width: '90%',
        backgroundColor: 'white',
    },
    viewTextInputModal: {
        padding: 10,
        height: '60%',
        width: '80%',
        backgroundColor: '#c4c4c4',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'green',
    },
    buttonViewCalendar: {
        margin: 5,
        width: '94%',
        borderWidth: 1 / 2,
        backgroundColor: '#e6e6e6',
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
});
