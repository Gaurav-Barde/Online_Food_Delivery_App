import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from 'firebase/compat';
import 'firebase/compat/firestore';

import MenuItems from '../components/restaurantDetails/MenuItems';

const OrderCompletedScreen = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Paneer Chilly',
        description: 'Greatness of Paneer Blends with the Greatness of Chilly',
        price: '$12',
        image:
          'https://www.manjulaskitchen.com/wp-content/uploads/chilli_paneer.jpg',
      },
    ],
  });
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, current) => prev + current, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unSubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => setLastOrder(doc.data())),
      );

    return () => unSubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        style={{height: 100, alignSelf: 'center'}}
        source={require('../../assets/animations/check-mark.json')}
        autoPlay
        loop={false}
      />
      <Text style={styles.header}>
        Your Order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <MenuItems hideCheckbox={true} foods={lastOrder.items} />
      <LottieView
        style={{height: 200}}
        source={require('../../assets/animations/cooking.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
});

export default OrderCompletedScreen;
