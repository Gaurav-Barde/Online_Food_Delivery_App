import React from 'react';

const defaultState = {
  selectedItems: {items: [], restaurantName: ''},
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'Add_To_Cart': {
      let newState = {...state};
      if (action.payload.checkboxValue) {
        console.log('Add to Cart');
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log('Remove from Cart');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.title !== action.payload.title,
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
