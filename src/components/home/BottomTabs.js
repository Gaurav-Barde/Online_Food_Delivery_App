import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}>
      <BottomTabItem iconName="home" name="Home" />
      <BottomTabItem iconName="search" name="Browse" />
      <BottomTabItem iconName="shopping-bag" name="Grocery" />
      <BottomTabItem iconName="file-text" name="Orders" />
      <BottomTabItem iconName="user" name="Account" />
    </View>
  );
};

const BottomTabItem = ({iconName, name}) => (
  <TouchableOpacity>
    <View style={{alignItems: 'center'}}>
      <Icon name={iconName} size={25} color="black" />
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default BottomTabs;

const styles = StyleSheet.create({});
