import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import About from '../components/restaurantDetails/About';
import MenuItems from '../components/restaurantDetails/MenuItems';
import ViewCart from '../components/restaurantDetails/ViewCart';

const RestaurantDetails = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <About route={route} />
      <View style={styles.divider} />
      <MenuItems restaurantName={route.params.name} />
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
