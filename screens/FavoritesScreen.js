import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MealsList } from '../components/MealsList/MealsList';
// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

export function FavoritesScreen() {
    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoritesMealIds = useSelector((state) => {
        return state.favoriteMeals.ids;
    });
    // const fovoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
    const fovoriteMeals = MEALS.filter(meal => favoritesMealIds.includes(meal.id));


    if(fovoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }

    return <MealsList items={fovoriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})