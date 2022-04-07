import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetails from './src/screens/RestaurantDetails';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';

const Stack = createNativeStackNavigator();

const store = configureStore();

const RootNavigation = () => {
  const screenOption = {
    headerShown: false,
    gestureEnabled: true,
    // if you want to change the back swipe width
    gestureDirection: 'horizontal',
    gestureResponseDistance: {
      horizontal: 300,
    },
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="RestaurantDetails"
            screenOption={screenOption}
            component={RestaurantDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
