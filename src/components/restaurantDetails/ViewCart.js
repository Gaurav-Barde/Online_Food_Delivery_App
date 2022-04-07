import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';

export default function ViewCart() {
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, current) => prev + current, 0);

  // const totalUSD = total.toLocaleString('en', {
  //   style: 'currency',
  //   currency: 'USD',
  // });
  const totalUSD = `$${total}`;

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <CheckOutModalContent
          setModalVisible={setModalVisible}
          restaurantName={restaurantName}
          items={items}
          totalUSD={totalUSD}
        />
      </Modal>
      {total ? (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.viewCartButton}
            onPress={() => setModalVisible(true)}>
            <Text style={[styles.viewCartText, {marginRight: 15}]}>
              View Cart
            </Text>
            <Text style={styles.viewCartText}>{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const CheckOutModalContent = ({
  setModalVisible,
  restaurantName,
  items,
  totalUSD,
}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {items.map((item, index) => (
          <View key={index}>
            <OrderItem item={item} />
          </View>
        ))}
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>SubTotal</Text>
          <Text style={styles.subTotalText}>{totalUSD}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.checkoutButtonTitle}>Checkout</Text>
          <Text style={styles.checkoutButtonPrice}>{totalUSD}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewCartButton: {
    position: 'absolute',
    width: '70%',
    bottom: 10,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCartText: {
    color: 'white',
    fontSize: 19,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
  },
  restaurantName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  subTotalText: {
    fontSize: 15,
    fontWeight: '600',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  checkoutButtonTitle: {
    color: 'white',
    fontSize: 18,
  },
  checkoutButtonPrice: {
    color: 'white',
    position: 'absolute',
    right: 20,
    top: 18,
  },
});
