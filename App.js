import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {CategoriesScreen} from './screens/CategoriesScreen';
import * as SystemUI from 'expo-system-ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
// import { FavoritesContextProvider } from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

SystemUI.setBackgroundColorAsync("#24180f");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#501B2CFF'},
    headerTintColor: 'white',
    sceneStyle: { backgroundColor: '#240F1BFF'},
    drawerContentStyle: { backgroundColor: '#501B2CFF'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#501B2CFF',
    drawerActiveBackgroundColor: '#BEA2ABFF',
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({color, size}) => <Entypo name="list" size={size} color={color}/>
      }}/>
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
      drawerIcon: ({color, size}) => <AntDesign name='star' size={size} color={color} />
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#501B2CFF'},
                headerTintColor: 'white',
                cardStyle: { backgroundColor: '#240F1BFF'}
          }}>
            <Stack.Screen 
              name='MealsCategories' 
              component={DrawerNavigator} 
              options={{
                title:'All',
                headerShown: false
              }}/>
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetails'
              component={MealDetailsScreen}
              options={{
                title: 'About the Meal'
              }}
              // jest ok jeśli nie ma potrzeby interackcji z contentem danego ekranu
              // options={{
              //   headerRight: () => {
              //     return (
              //       <Button title='Tap me!'/>
              //     )
              //   }
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
