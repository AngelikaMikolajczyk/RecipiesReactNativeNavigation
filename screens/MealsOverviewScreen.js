import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import { MealsList } from '../components/MealsList/MealsList';

export function MealsOverviewScreen({ route, navigation }) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])

    return <MealsList items={displayedMeals}/>
}

