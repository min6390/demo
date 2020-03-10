import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, Modal, Dimensions,
    StyleSheet, KeyboardAvoidingView, ScrollView,
} from 'react-native';

export default class RenderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            address: '',
        };
    }

    open(){
        this.setState({isModalVisible : true})
    }
    close(){
        if(this.props.callback){
            this.props.callback(this.state.address)
        }
    }
    render() {
        return (
            <Modal
                animationType={'none'}
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
                                    source={require('../../images/close.png')}/>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal: 80, fontSize: 15}}> Số nhà/Căn hộ </Text>
                        </View>
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
                                        this.setState({isModalVisible: false},
                                            ()=>{this.close()});
                                    }}>
                                    <Text>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
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
