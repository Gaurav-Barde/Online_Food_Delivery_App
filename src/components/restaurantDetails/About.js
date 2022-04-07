import {View, Text, Image} from 'react-native';
import React from 'react';

// Hard coded data
// const yelpRestaurantInfo = {
//   name: 'Farmhouse Kitchen Thai Cuisine',
//   image:
//     'https://www.tripsavvy.com/thmb/QDuEw21CnAKC1T7INaD7XMqilrU=/395x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv()/GettyImages-913677156-3fca0dd4029849ab912cd48cfec4a4db.jpg',
//   price: '$$',
//   ratings: 4.5,
//   reviews: 1500,
//   categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
// };

// const {name, image, price, ratings, reviews, categories} = yelpRestaurantInfo;
// const description =
//   categories.map(cat => cat.title).join(' • ') +
//   ` • ${price} • 🎫 • ${ratings}  ⭐ • (${reviews})`;

const About = ({route}) => {
  const {name, image, price, ratings, reviews, categories} = route.params;
  const description =
    categories.map(cat => cat.title).join(' • ') +
    ` • ${price} • 🎫 • ${ratings}  ⭐ • (${reviews})`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantInfo name={name} description={description} />
    </View>
  );
};

const RestaurantImage = ({image}) => (
  <View>
    <Image
      style={{width: '100%', height: 120}}
      source={{
        uri: image,
      }}
    />
  </View>
);

const RestaurantInfo = ({name, description}) => (
  <View>
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        paddingHorizontal: 15,
        marginTop: 10,
        color: 'black',
      }}>
      {name}
    </Text>
    <Text
      style={{
        paddingHorizontal: 15,
        marginTop: 10,
        fontWeight: '600',
        fontSize: 16,
      }}>
      {description}
    </Text>
  </View>
);

export default About;
