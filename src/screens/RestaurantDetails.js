import {View, StyleSheet} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetails/About';
import MenuItems from '../components/restaurantDetails/MenuItems';
import ViewCart from '../components/restaurantDetails/ViewCart';

const foods = [
  {
    title: 'Tandoori Chicken',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$14.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
  {
    title: 'Butter Chicken',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$16.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
  {
    title: 'Garlic Chicken',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$18.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
  {
    title: 'Roasted Chicken1',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$22.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
  {
    title: 'Roasted Chicken2',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$25.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
  {
    title: 'Roasted Chicken3',
    description:
      'Biryani, North Indian, Chinese, Wraps, Lebanese, Hyderabadi, Afghan',
    price: '$27.50',
    image:
      'https://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1-1024x683.jpg',
  },
];

const RestaurantDetails = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <About route={route} />
      <View style={styles.divider} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 20,
    backgroundColor: '#bbb',
  },
});

export default RestaurantDetails;
