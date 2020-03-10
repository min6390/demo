import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, Modal, Dimensions,
    StyleSheet, KeyboardAvoidingView, ScrollView, TouchableHighlight,
} from 'react-native';

export default class WorkTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }

    render() {
        const ProgramBarg = (props) => {
         let   process = props.process;
            return (
                <View {...props}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20}}>
                        <View style={ process==0 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={ process==0 ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 0});
                                  }}>
                                SÁNG
                            </Text>
                        </View>
                        <View style={ process==1 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={ process==1 ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 1});
                                  }}>
                                CHIỀU
                            </Text>
                        </View>
                        <View style={ process==2 ? styles.titleContainer : styles.baseContainer}>
                            <Text style={ process==2  ? styles.titleText : styles.baseText}
                                  onPress={() => {
                                      this.setState({number: 2});
                                  }}>
                                TỐI
                            </Text>
                        </View>
                    </View>
                </View>);
        }
            return (
                <View>
                    <ProgramBarg process={this.state.number}/>
                </View>
            );
        };
}
    const styles = StyleSheet.create({
        titleContainer:{
            borderRadius:8,
            height:35,
            width:60,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'green',
        },
      baseContainer:{
            height:35,
            width:60,
            justifyContent:'center',
            alignItems:'center',
        },
        baseText: {
            fontWeight: 'bold',
        },
        titleText: {
            fontWeight: 'bold',
            color:'white',
        },
    });
