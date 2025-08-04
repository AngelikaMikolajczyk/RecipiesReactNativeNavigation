import { Pressable, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export function IconButton({onPress, icon, color}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.iconConatiner, pressed && styles.pressed]}>
            <AntDesign name={icon} size={24} color={color} />
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