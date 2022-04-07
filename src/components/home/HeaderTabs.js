import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
      <HeaderButton
        buttonTitle="Delivery"
        // backgroundColor="black"
        // color="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        buttonTitle="Pickup"
        // backgroundColor="white"
        // color="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = props => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 15,
      paddingVertical: 6,
      backgroundColor:
        props.activeTab === props.buttonTitle ? 'black' : 'white',
      borderRadius: 30,
    }}
    onPress={() => {
      props.setActiveTab(props.buttonTitle);
    }}>
    <Text
      style={{
        color: props.activeTab === props.buttonTitle ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.buttonTitle}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({});
