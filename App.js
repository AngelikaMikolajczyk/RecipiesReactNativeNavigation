import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {CategoriesScreen} from './screens/CategoriesScreen';
import * as SystemUI from 'expo-system-ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';

SystemUI.setBackgroundColorAsync("#24180f");

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
