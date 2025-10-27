import { Pressable, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function IconButton({onPress, icon, color}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.iconConatiner, pressed && styles.pressed]}>
            <FontAwesome name={icon} size={24} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.4
    },
    iconConatiner: {
        marginRight: 6
    }
})