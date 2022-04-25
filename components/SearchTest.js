import { Text } from '@rneui/themed';
import { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

export default function SearchTest() {

    const [search, setSearch] = useState('')
    const onSearch = (search) => setSearch(search)


    return (
        <View>
            <Text style={styles.testHeader}>Search test</Text>
            <View style={styles.ansCont}>
                <Image source={require('../assets/Icon.png')} />
                <TextInput placeholder='Search' onChangeText={onSearch} style={styles.inputText} />
            </View>

            <View style={styles.ansCont}>
                <View style={styles.ansImg} />
                <View style={{ marginStart: 10 }}>
                    <Text>Searched Text</Text>
                    <Text style={styles.ansText}>{search}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: { width: '100%', marginStart: 10, fontSize: 13 },
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
