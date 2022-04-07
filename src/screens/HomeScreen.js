import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, {
  localRestaurants,
} from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY =
  'l9_S1wpdDwEiSbDkpQLwDlq_ZgfHhb3fUMf62MGSs0mBftULegaD0VdBpyPGB4O04-IayEE6UgaNK-apcePwxVkqn67funDE82ZTLfcURONsx-4warmtFQrcvRgqYnYx';

const HomeScreen = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Fransisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#fff'}}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          navigation={navigation}
          restaurantData={restaurantData}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
