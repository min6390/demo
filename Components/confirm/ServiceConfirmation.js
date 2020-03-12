import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import ProgressBar from '../Feature/ProgressBar';
import moment from 'moment';

export default class ServiceConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCalendar: '',

        };
    };

    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        this.setState({
            dataCalendar: moment.unix(data).format('dddd, D MMMM [năm] YYYY'),
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                    <ProgressBar process={1}/>
                    <Text style={{marginTop: 20, marginBottom: 10, marginHorizontal: 20, fontSize: 16}}>
                        THÔNG TIN CA LÀM
                    </Text>
                    <View style={styles.container}>
                        <View >
                            <Text style={styles.textView}>{this.state.dataCalendar}</Text>
                            <Text style={styles.textView}>{this.state.dataCalendar}</Text>
                            <Text style={styles.textView}>{this.state.dataCalendar}</Text>
                        </View>
                    </View>
                    <Text style={{marginTop: 20, marginBottom: 10, marginHorizontal: 20, fontSize: 16}}>
                        Gói dịch vụ
                    </Text>
                    <View style={[styles.title, {flexDirection: 'row'}]}>
                        <Text style={{fontSize: 17}}>Tổng : </Text>
                        <Text style={{fontSize: 17}}> Tiènnnnnnnnn</Text>
                    </View>

                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={{
                        justifyContent: 'center', width: windowWidth - 30, height: windowWidth / 8,
                        backgroundColor: 'green', alignItems: 'center', borderRadius: 15, marginBottom: 15,
                    }}
                                      onPress={() => {
                                          this.props.navigation.navigate('ServiceConfirmation');
                                      }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}> TIẾP TỤC </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        height: windowWidth / 2,
        width: windowWidth - 40,
        backgroundColor: '#bfbfbf',
        borderRadius: 15,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    textView:{
        fontSize:16,
        padding:10,
        borderBottomWidth: 2 / 3,
        borderColor: 'gray'
    },
    title: {
        height: windowWidth / 8,
        width: windowWidth - 40,
        backgroundColor: '#bfbfbf',
        borderRadius: 15,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
});
