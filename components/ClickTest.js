import { Button } from '@rneui/base';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ClickTest() {

    const [clicks, setClicks] = useState(0)
    const onClicked = () => setClicks(clicks => clicks + 1)

    return (
        <View >
            <Text style={styles.testHeader}>Click test</Text>
            <Button onPress={onClicked} buttonStyle={styles.clickMeBtn} title="Click me" />
            <View style={styles.ansCont}>
                <View style={styles.ansImg} />
                <View style={{ marginStart: 10 }}>
                    <Text style={styles.normalText}>Number of button clicks</Text>
                    <Text style={styles.ansText}>{clicks}</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20
    },
    clickMeBtn: {
        backgroundColor: '#FFA978',
        height: 56,
        borderRadius: 8
    },
    ansCont: {
        width: '100%',
        padding: 15,
        borderColor: '#CDCDCD33',
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10
    },
    normalText: { fontSize: 13 },
    ansImg: {
        height: 30, width: 30,
        backgroundColor: '#e5e5e5', borderRadius: 5
    },
    ansText: {
        color: '#c2c2c2',
        fontSize: 13
    },
    testHeader: {
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10,
    },
});
