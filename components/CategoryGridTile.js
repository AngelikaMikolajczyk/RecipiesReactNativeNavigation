import { View, Pressable, StyleSheet, Text, Platform } from 'react-native'

export function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    button: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonPressed: {
        opacity: 0.7
    }
})