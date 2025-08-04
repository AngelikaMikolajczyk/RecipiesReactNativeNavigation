import { Text, View, StyleSheet } from 'react-native';

export function List({elements}) {
    return (
       elements.map(element => (
            <View key={element} style={styles.listItem}>
                <Text style={styles.itemText}>{element}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#F7C3DFFF'
    },
    itemText: {
        color: '#501B2CFF',
        textAlign: 'center'
    }
})