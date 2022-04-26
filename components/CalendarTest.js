
import { Button } from '@rneui/base';
import { Text } from '@rneui/themed';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarTest() {

    const startingDayStyle = {
        startingDay: true,
        customStyles: {
            container: {
                backgroundColor: '#3975FF',
                borderRadius: 10,
                width: 60
            },
            text: {
                color: 'white',
            }
        }
    }

    const selectedDayStyle = {
        startingDay: true,
        customStyles: {
            container: {
                backgroundColor: '#3975FF',
                borderRadius: 0,
                width: 60
            },
            text: {
                color: 'white',
            }
        }
    }

    const endingDayStyle = {
        startingDay: true,
        customStyles: {
            container: {
                backgroundColor: '#3975FF',
                borderRadius: 10,
                width: 60
            },
            text: {
                color: 'white',
            }
        }
    }

    const [markedDates, setMarkedDates] = useState({})
    const [weekStart, setWeekStart] = useState(moment().startOf('week'))
    const [weekEnd, setWeekEnd] = useState(moment().startOf('week'))

    useEffect(() => {
        var days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
        };
        setWeekStart(days[0])
        setWeekEnd(days[6])
        let newMarkedDates = {}
        days.forEach((item, index) => {
            if (index == 0)
                newMarkedDates[item] = startingDayStyle
            else if (index == 6)
                newMarkedDates[item] = endingDayStyle
            else
                newMarkedDates[item] = selectedDayStyle
        })
        setMarkedDates(newMarkedDates)
    }, [])

    const onPrevClicked = () => {
        var days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).subtract(1, 'week').add(i, 'days').format("YYYY-MM-DD"));
        };
        setWeekStart(days[0])
        setWeekEnd(days[6])
        let newMarkedDates = {}
        days.forEach((item, index) => {
            if (index == 0)
                newMarkedDates[item] = startingDayStyle
            else if (index == 6)
                newMarkedDates[item] = endingDayStyle
            else
                newMarkedDates[item] = selectedDayStyle
        })
        setMarkedDates(newMarkedDates)
    }

    const onNextClicked = () => {
        var days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(1, 'week').add(i, 'days').format("YYYY-MM-DD"));
        };
        setWeekStart(days[0])
        setWeekEnd(days[6])
        let newMarkedDates = {}
        days.forEach((item, index) => {
            if (index == 0)
                newMarkedDates[item] = startingDayStyle
            else if (index == 6)
                newMarkedDates[item] = endingDayStyle
            else
                newMarkedDates[item] = selectedDayStyle
        })
        setMarkedDates(newMarkedDates)
    }

    return (
        <View >
            <Text style={styles.testHeader}>Calendar test</Text>
            <View style={styles.ansCont}>
                <Calendar
                    markingType={'custom'}
                    markedDates={markedDates} />
            </View>

            <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
                <Button onPress={onPrevClicked} containerStyle={{ flex: 1 }} buttonStyle={styles.button} title="Previous week" />
                <Button onPress={onNextClicked} containerStyle={{ flex: 1, marginStart: 20 }} buttonStyle={styles.button} title="Next week" />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    testHeader: {
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFA978',
        height: 48,
        borderRadius: 8
    },
    ansCont: {
        width: '100%',
        padding: 15,
        flex: 1,
        borderColor: '#CDCDCD33',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10
    },
});
