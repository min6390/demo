import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView,
} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';

const widthScreen = Dimensions.get('window').width;

export default class TotalSanitation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            address: '',
            isCalendarVisible: false,
            viewCalendar: true,
            dayGet: '',
            dateSelected: '',
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
        const {viewCalendar} = this.state;
        return (viewCalendar ?
                <View style={{marginHorizontal: 5, height: 50, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16}}> {today} </Text>
                </View>
                : <View>
                    <Calendar style={{backgroundColor: '#e6e6e6'}}
                              current={this.state.day}
                              firstDay={1}
                              minDate={time}
                              maxDate={timeMax}
                              onDayPress={(day) => {
                                  this.setState({viewCalendar: true, day});
                              }}
                              theme={{calendarBackground: '#e6e6e6'}}
                    />
                </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <ScrollView>
                    <View style={{marginHorizontal: 10, borderBottomWidth: 1 / 2, borderColor: 'gray', padding: 5}}>
                        <Text style={{fontSize: 16}}> Trước khi Tổng vệ sinh, Jupviec sẽ tiến hành khảo sát tại nhà
                            bạn</Text>
                    </View>
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
                        onPress={()=>{this.setState({isModalVisible:true})}}>
                            <Text>{this.state.address} </Text>
                            <View>{this.renderModal()}</View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.container}>
                            <Image
                                source={require('../../../images/imageBooking/calendar.png')}/>
                            <Text style={styles.title}> LỊCH LÀM VIỆC </Text>
                        </View>
                        <View style={styles.buttonViewCalendar}
                                          onPress={() => {
                                              this.setState({viewCalendar: false});
                                          }}>
                            <View>{this.renderCalendar()}</View>
                        </View>
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
                    height: '15%',
                    alignItems: 'center',
                    width: widthScreen,
                    justifyContent: 'center',
                }}>
                    <Text style={{marginRight: 100}}>(Miễn phí nếu Đặt Tổng vệ sinh)</Text>
                    <View style={{flexDirection: 'row-reverse', marginRight: 60}}>
                        <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
                            30.000đ
                        </Text>
                        <Text style={{fontSize: 20}}>
                            Giá khảo sát :
                        </Text>

                    </View>
                    <TouchableOpacity style={{
                        justifyContent: 'center', width: widthScreen - 30, height: '40%',
                        backgroundColor: 'green', alignItems: 'center', borderRadius: 15,
                    }}
                                      onPress={() => {
                                          this.props.navigation.navigate('Finish');
                                      }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> ĐẶT KHẢO SÁT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const time = moment().format();
const timeMax = moment().add(14, 'days').calendar();
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
        height: 120,
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
