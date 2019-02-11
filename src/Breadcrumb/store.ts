// Import External Dependencies
import { createStore } from 'redux';

// Create the reducer
const crumbs = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ADD_CRUMB':
      return [...state, action.payload];

    case 'UPDATE_CRUMB':
      return state.map(({ ...crumb }) => {
        return crumb.id === action.payload.id ? action.payload : crumb;
      });

    case 'REMOVE_CRUMB':
      return state.filter(({ ...crumb }) => {
        return crumb.id !== action.payload.id;
      });

    default:
      return state;
  }
};

// Create the store
const store = createStore(crumbs);

// Export store and Dispatch method
export default store;
export const Dispatch = store.dispatch;
