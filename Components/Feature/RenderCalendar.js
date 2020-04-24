import React from 'react';
import {
    Text, View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';

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

    onPressDay() {
        if (this.props.onPressDay) {
            this.props.onPressDay(this.state.selectedTimestamp);
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
                                  this.setState({
                                      viewCalendar: true,
                                      day,
                                      selectedTimestamp: day.timestamp / 1000,
                                  }, () => {
                                      this.onPressDay();
                                  });
                              }}
                              theme={{calendarBackground: '#e6e6e6'}}
                    />

                </View>
        );
    }
}
const time = moment().format();
const timeMax = moment().add(14, 'days').calendar();
