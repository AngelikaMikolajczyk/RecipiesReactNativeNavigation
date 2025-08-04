import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { useLayoutEffect } from "react";
import { IconButton } from '../components/IconButton';
import { useContext } from "react";
import { FavoritesContext } from '../store/context/favorites-context';

export function MealDetailsScreen({route, navigation}) {
    const favoriteMealsContext = useContext(FavoritesContext);
    const { mealId } = route.params;
    const mealDetails = MEALS.find((meal) => meal.id === mealId);
    console.log('favoriteMealsContext', favoriteMealsContext);
    
    const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

    function onChangeFavoriteStatus() {
        if(mealIsFavorite) {
            favoriteMealsContext.removeFavorite(mealId)
        } else {
            favoriteMealsContext.addFavorite(mealId)
        }
        
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton title='tap me!' onPress={onChangeFavoriteStatus} icon={mealIsFavorite ? 'star' : 'staro'} color='white'/>
            }
        })
    }, [navigation, onChangeFavoriteStatus])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: mealDetails.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{mealDetails.title}</Text>
            <MealDetails 
                duration={mealDetails.duration} 
                complexity={mealDetails.complexity} 
                affordability={mealDetails.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List elements={mealDetails.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List elements={mealDetails.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 24
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        maxWidth: '80%',
    }
})