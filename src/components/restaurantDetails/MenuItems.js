import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

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

const MenuItems = ({restaurantName}) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: 'Add_To_Cart',
      payload: {...item, restaurantName, checkboxValue},
    });
  };

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodInCart = (cartItems, food) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            <BouncyCheckbox
              iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
              fillColor="green"
              onPress={checkboxValue => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(cartItems, food)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <View style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({food}) => (
  <View style={{width: 220, justifyContent: 'space-evenly'}}>
    <Text style={styles.title}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({food}) => (
  <View>
    <Image style={styles.image} source={{uri: food.image}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  divider: {
    width: '90%',
    height: 1,
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: '#ccc',
  },
});

export default MenuItems;
