import React from 'react';
import {
    Text, View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['fr'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    monthNamesShort: ['T1.', 'T2.', 'T3', 'T4', 'T5', 'T6', 'T7.', 'T8', 'T9', 'T10.', 'T11', 'T12'],
    dayNames: ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    dayNamesShort: ['CN.', 'Th2.', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'],
    today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'vi';
export default class RenderCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalendarVisible: false,
            viewCalendar: true,
        };
    }

    open() {
        this.setState({viewCalendar: false});
    }
    onDayPress(){
        if(this.props.onDayPress){
         this.props.onDayPress(this.state.selectedTimestamp)
        }
    }
    render() {
        let today = moment.unix(this.state.selectedTimestamp).format('dddd, D MMMM [năm] YYYY');
        let {viewCalendar} = this.state;
        return (viewCalendar ?
                <View style={{marginHorizontal: 5, height: 50, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16}}>{today}</Text>
                </View>
                : <View>
                    <Calendar style={{backgroundColor: '#e6e6e6'}}
                              current={this.state.day}
                              firstDay={1}
                              minDate={time}
                              maxDate={timeMax}
                              onDayPress={(day) => {
                                  this.setState({viewCalendar: true, day, selectedTimestamp: day.timestamp / 1000},()=>{
                                      this.onDayPress();
                                  });
                                  console.log('AA',day)
                              }}
                              theme={{calendarBackground: '#e6e6e6'}}
                    />

                </View>
        );
    }
}
const time = moment().format();
const timeMax = moment().add(14, 'days').calendar();
