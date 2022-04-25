import { Button } from '@rneui/base';
import { Text } from '@rneui/themed';
import { Image, StyleSheet, View } from 'react-native';

export default function MessageTest() {

    return (
        <View >
            <Text style={styles.testHeader}>Messages test</Text>
            <View style={styles.cardCont}>
                <View style={styles.flexRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.normalText}>
                            This is an empty state, to be used for messages and/or blog articles.
                        </Text>
                        <Text style={styles.cardSubtitle}>
                            Four lines to describe the message/article to be highlighted. The text is accompanied by an illustration in the top right-hand corner.
                        </Text>
                    </View>
                    <Image source={require('../assets/Illustrations.png')} />
                </View>

                <View style={styles.cardButtonCont}>
                    <Button buttonStyle={styles.agreeBtn} titleStyle={{ fontSize: 12, color: '#B4EDA0' }} title="Not now" />
                    <Button buttonStyle={styles.cancelBtn} titleStyle={{ fontSize: 12 }} title="See message" />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    cardCont: { backgroundColor: '#EAFFC9', borderRadius: 10, borderRadius: 10, padding: 15 },
    cardButtonCont: { flexDirection: 'row', justifyContent: 'flex-end' },
    flexRow: { flexDirection: 'row' },
    cardSubtitle: { fontSize: 13, color: '#7D7D7D', marginTop: 10 },
    agreeBtn: { backgroundColor: '#EAFFC9', width: 100 },
    cancelBtn: { backgroundColor: '#B4EDA0', width: 100 },
    testHeader: {
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10,
    },

});
