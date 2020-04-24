import React, {Component} from 'react';
import {
    View,
    Image,
    Dimensions, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput,
} from 'react-native';
import ProgressBar from '../../Feature/ProgressBar';
import RenderModal from '../../Feature/RenderModal';

export default class Periodic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',

        };
    }

    onPressModal = (address) => {
        this.setState({address});
    };


    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <ScrollView>
                    <ProgressBar process={0}/>

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
                            <Text style={styles.title}> LỊCH LÀM VIỆC HẰNG TUẦN</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonViewCalendar}
                                          onPress={() => {
                                          }}>
                            <View></View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/clock.png')}/>
                        <Text style={styles.title}> THỜI GIAN LÀM VIỆC</Text>
                        <View style={styles.viewWordTime}>
                            <View style={{margin: 5}}>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <Image
                            source={require('../../../images/imageBooking/voucher.png')}/>
                        <Text style={styles.title}> MÃ KHUYẾN MÃI </Text>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={() => {
                                          }}>
                            <Text></Text>
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
                    width: windowWidth,
                }}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={{
                            justifyContent: 'center', width: windowWidth - 30, height: windowWidth / 8,
                            backgroundColor: 'green', alignItems: 'center', borderRadius: 15, marginBottom: 15,
                        }}
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
    viewWordTime: {
        margin: 5,
        width: '96%',
        borderWidth: 1 / 2,
        backgroundColor: '#e6e6e6',
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
});



