import { createStore, combineReducers } from 'redux';
import todoSlice from './todoSlice';

const rootReducer = combineReducers({ todoSlice });
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
