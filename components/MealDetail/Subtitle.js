import { Text, StyleSheet } from 'react-native';

export function Subtitle({children}) {
    return <Text style={styles.subtitle}>{children}</Text>
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#F7C3DFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 6,
        borderBottomColor: '#F7C3DFFF',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
    }
})