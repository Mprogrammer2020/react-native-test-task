import { Text } from '@rneui/themed';
import { SectionList, StyleSheet, View } from 'react-native';

export default function ListTest() {

    const data = [
        {
            title: 'Food',
            data: [
                { name: 'Bananas', type: 'Grocery Ape', quantity: '2', unit: 'Kg' },
                { name: 'Sugar', type: 'Candy shop', quantity: '0.5', unit: 'Kg' },
                { name: 'Tuna', type: 'Temple of the catch', quantity: '155', unit: 'Kg' }
            ]
        },
        {
            title: 'Technology',
            data: [
                { name: 'Polystation', type: 'Stairsmart', quantity: '300', unit: 'Qt' },
            ]
        }
    ]

    return (
        <View>
            <Text style={styles.testHeader}>List test</Text>
            <View style={styles.ansCont}>
                <SectionList
                    sections={data}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => {
                        return <View style={styles.listItemCont}>
                            <View style={styles.ansImg} />
                            <View style={styles.listTextCont}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.normalText}>{item.name}</Text>
                                    <Text style={styles.subItemText}>{item.type}</Text>
                                </View>
                                <Text style={styles.normalText}>{item.quantity} <Text style={styles.subItemText}>{item.unit}</Text></Text>
                            </View>
                        </View>
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
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
    listItemCont: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
    listTextCont: { marginStart: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    subItemText: {
        color: '#C2C2C2',
        fontSize: 13
    },
    header: {
        color: '#808080',
        fontSize: 13,
    }
});
