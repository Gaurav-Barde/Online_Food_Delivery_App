import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';

const items = [
  {
    Image: require('../../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    Image: require('../../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    Image: require('../../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    Image: require('../../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    Image: require('../../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    Image: require('../../../assets/images/coffee.png'),
    text: 'Cofee & Tea',
  },
  {
    Image: require('../../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              style={{width: 50, height: 40, resizeMode: 'contain'}}
              source={item.Image}
            />
            <Text style={{fontSize: 13, fontWeight: '900', color: 'black'}}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
