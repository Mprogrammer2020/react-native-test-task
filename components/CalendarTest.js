
import { Button } from '@rneui/base';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function CalendarTest() {

    return (
        <View >
            <Text style={styles.testHeader}>Calendar test</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    testHeader: {
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10,
    },
});
