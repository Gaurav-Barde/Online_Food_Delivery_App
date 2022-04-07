import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({cityHandler}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{marginVertical: 15, flexDirection: 'row'}}>
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={newSearch => setSearchText(newSearch)}
        style={{
          backgroundColor: '#eee',
          borderRadius: 20,
          fontWeight: '700',
          marginTop: 7,
          flex: 1,
          padding: 15,
        }}
      />

      <TouchableOpacity
        onPress={() => cityHandler(searchText)}
        style={{
          position: 'absolute',
          right: 10,
          bottom: '30%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="clock" size={16} color="black" />
        <Text style={{color: 'black', fontWeight: '500', marginLeft: 8}}>
          Search
        </Text>
      </TouchableOpacity>
      {/* <GooglePlacesAutocomplete
        renderLeftButton={() => (
        query={{key: 'AIzaSyDH9JeeLc3CBBOxZ86r3Fz7u2hf4JvD11U'}}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          },
        }}
          <View style={{marginLeft: 10}}>
            <Icon name="map-pin" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              borderRadius: 30,
              padding: 5,
              width: 80,
            }}>
            <Icon
          name="clock"
          size={16}
          color="black"
          onPress={() => console.log('Hello')}
        />
            <Text style={{color: 'black', fontWeight: '500'}}>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
