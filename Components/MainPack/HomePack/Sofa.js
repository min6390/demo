import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, TextInput,
} from 'react-native';
import RenderWorkTime from '../../confirm/RenderWorkTime';
import RenderModal from '../../Feature/RenderModal';
import RenderCalendar from '../../Feature/RenderCalendar';

export default class Sofa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
    }

    onPressModal = (address) => {
        this.setState({address});
    };

    onPressDay = (selectedTimestamp) => {
        this.selectedTimestamp = selectedTimestamp;
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/placeholder.png')}/>
                        <Text style={styles.title}>
                            ĐỊA ĐIỂM LÀM VIỆC
                        </Text>
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
                                              // this.setState({isModalVisible:true})
                                              if (this.renderModal) {
                                                  this.renderModal.open();
                                              }
                                          }}>
                            <Text>{this.state.address}</Text>
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
                            <View><RenderCalendar ref={ref => this.renderCalendar = ref} onPressDay={this.onPressDay}/></View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/bank.png')}/>
                        <Text style={styles.title}> GIÁ THAM KHẢO </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
                                          }
                                          }>
                            <Text>Xem bảng giá</Text>
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
                <View style={{width: windowWidth}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.btnContinue}
                                          onPress={() => {

                                          }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> TIẾP TỤC </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RenderModal ref={ref => this.renderModal = ref} onPressModal={this.onPressModal}/>
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
    title: {
        width: '75%',
        fontSize: 18,
        marginHorizontal: 5,
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
    btnContinue:{
        justifyContent: 'center',
        width: windowWidth - 30,
        height: windowWidth / 8,
        backgroundColor: 'green',
        alignItems: 'center', borderRadius: 15,
        marginBottom: 15,
    }
});