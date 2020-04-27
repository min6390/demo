import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.defaultLocale = 'vi';
const dayOfWeek = [1, 2, 3, 4, 5, 6, 0];
const dayOfWeek1 = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
export default class RenderCalendarPeriodic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: [],
            viewCalendarPeriodic: true,
            markedDates: {},
            current: moment().format('YYYY-MM-DD'),
        };
    }

    open() {
        this.setState({viewCalendarPeriodic: false});
    }

    onPress = (day) => () => {
        const {week} = this.state;
        if (week.indexOf(day) > -1) {
            let array = week.filter(i => i !== day);
            this.setState({
                week: array,
            }, this.getMarkedDates);
        } else {
            this.setState({
                week: [...week, day],
            }, this.getMarkedDates);
        }
    };
    getMarkedDates = () => {
        let currentTemp = null;
        const {week, current} = this.state;
        let i = 0;
        let sum = [];
        for (i; i < 16; i++) {
            const timeMax = moment().add(i, 'days').format('YYYY-MM-DD');
            sum.push(timeMax);
        }
        const array = sum;
        let markedDates = {};
        array.forEach(date => {
            const day = moment(date, 'YYYY-MM-DD').day();
            if (week.indexOf(day) > -1) {
                markedDates = {
                    ...markedDates,
                    [date]: {selected: false},
                };
                if (!currentTemp) {
                    currentTemp = date;
                }

                // console.log('min', JSON.stringify(markedDates));
            } else {
                markedDates = {
                    ...markedDates,
                    [date]: {disabled: true, disableTouchEvent: true},
                };
                // console.log('min', JSON.stringify(markedDates));
            }
        });

        this.setState({markedDates, current: currentTemp ? currentTemp : current});

    };

    onDayPeriodicPress = () => {
        if (this.props.onDayPeriodicPress) {
            this.props.onPressDay(this.state.selectedTimestampPeriodic);
        }
    };

    renderCalendar() {
        let today = moment.unix(this.state.selectedTimestampPeriodic || moment().unix()).format('dddd, D MMMM [năm] YYYY');
        let {viewCalendarPeriodic} = this.state;
        return (
            viewCalendarPeriodic ?
                <View style={{flexDirection: 'row', marginVertical: 10, marginHorizontal: 10}}>
                    <Text style={{fontWeight: 'bold'}}> Giờ làm việc : </Text>
                    <TouchableOpacity style={{marginHorizontal: 20}}
                                      onPress={() => {
                                          this.setState({viewCalendarPeriodic: false});
                                      }
                                      }>
                        <Text style={{color: 'blue', textStyle: 16}}>{today}</Text>
                    </TouchableOpacity>
                </View> :
                <View>
                    <Calendar
                        current={this.state.current}
                        minDate={time}
                        maxDate={timeMax}
                        disableMonthChange={true}
                        firstDay={1}
                        markedDates={this.state.markedDates}
                        onDayPress={(day) => {
                            this.setState({
                                viewCalendarPeriodic: true,
                                day,
                                selectedTimestampPeriodic: day.timestamp / 1000,
                            }, () => {
                                this.onDayPeriodicPress();
                            });
                        }}
                        theme={{calendarBackground: '#e6e6e6'}}
                    />
                </View>

        );
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 5}}>
                    {
                        dayOfWeek.map((day, index) => {
                            const {week} = this.state;
                            const backgroundColor = week.indexOf(day) > -1 ? '#34ab11' : '#e6e6e6';
                            const textColor = week.indexOf(day) > -1 ? 'white' : 'black';
                            return (
                                <TouchableOpacity key={index}
                                                  style={[styles.button, {backgroundColor: backgroundColor}]}
                                                  onPress={this.onPress(day)}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: textColor,
                                        textStyle: 'bold',
                                    }}>{dayOfWeek1[day]}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
                <View>
                    {this.renderCalendar()}
                </View>
            </View>
        );
    }
}

const time = moment().format();
const timeMax = moment().add(14, 'days').format();
const styles = StyleSheet.create({
    button: {
        marginHorizontal: 3,
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
});

