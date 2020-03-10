import React from 'react';
import {
    StyleSheet,
    View,
    Text, Alert,
    Image, TouchableOpacity, ScrollView, TextInput, Dimensions,
} from 'react-native';
import ProgressBar from '../../Feature/ProgressBar';
import RenderModal from '../../Feature/RenderModal';
import RenderCalendar from '../../Feature/RenderCalendar';

export default class Retail extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            address: '',
            isCalendarVisible: false,
        };
    };

    callback = (address) => {
        this.setState({address});
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <ScrollView>
                    <ProgressBar/>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/placeholder.png')}/>
                        <Text style={styles.title}> ĐỊA ĐIỂM LÀM VIỆC </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
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
                                              // this.setState({isModalVisible:true})
                                              if (this.renderModal) {
                                                  this.renderModal.open();
                                              }
                                          }}>
                            <Text>{this.state.address}</Text>
                            <View><RenderModal ref={ref => this.renderModal = ref}
                                               callback={this.callback}/></View>
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
                                              if (this.renderCalendar) {
                                                  this.renderCalendar.open();
                                              }
                                          }}>
                            <View><RenderCalendar ref={ref => this.renderCalendar = ref}/></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/clock.png')}/>
                        <Text style={styles.title}> GIỜ LÀM VIỆC</Text>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text> BẢNG GIÁ DỊCH VỤ </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/voucher.png')}/>
                        <Text style={styles.title}> MÃ KHUYẾN MÃI </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
                                          }}>
                            <Text></Text>
                            <View></View>
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
                    }}
                                      onPress={() => {
                                          this.props.navigation.navigate('Finish');
                                      }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> ĐĂNG KÝ </Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}
const windowWidth = Dimensions.get('window').width;
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