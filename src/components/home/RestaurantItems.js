import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const localRestaurants = [
  {
    name: 'Barbeque Nation',
    image_url:
      'https://www.reviewjournal.com/wp-content/uploads/2020/08/14097007_web1_restaurant.meals_.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: '1254',
    ratings: '4.5',
  },
  {
    name: 'OYE SHAWA RESTAURANT',
    image_url: 'https://upserve.com/media/sites/2/Restaurant-Decor-Blog.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: '1254',
    ratings: '3.5',
  },
];

const RestaurantItems = ({navigation, restaurantData}) => {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RestaurantDetails', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              ratings: restaurant.rating,
              categories: restaurant.categories,
            })
          }
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: 'white',
          }}>
          <View style={{marginBottom: 30}}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo
              name={restaurant.name}
              ratings={restaurant.rating}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({image}) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{width: '100%', height: 180}}
    />
    <Icon
      name="heart"
      size={24}
      color="white"
      style={{position: 'absolute', right: 60, top: 10}}
    />
  </>
);

const RestaurantInfo = ({name, ratings}) => (
  <View style={{marginTop: 10}}>
    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
      {name}
    </Text>
    <Text style={{color: 'grey', fontSize: 13}}>30-45 • min</Text>
    <Text
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 8,
        color: 'black',
        backgroundColor: '#eee',
        borderRadius: 15,
        fontWeight: '900',
      }}>
      {ratings}
    </Text>
  </View>
);

export default RestaurantItems;
