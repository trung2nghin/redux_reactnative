import DATA from '../screens/Home/data/data';
import { ADD_SUCCESS } from './constants';
import { DELETE_SUCCESS } from './constants';
import { SEARCH_SUCCESS } from './constants';
import { EDIT_SUCCESS } from './constants';

const todoSlice = (state = DATA, action: any) => {
  switch (action.type) {
    case ADD_SUCCESS: {
      const newTodo = {
        id: Date.now(),
        Name: action.payload,
      };
      const newData = [...state, newTodo];
      return newData;
    }

    case DELETE_SUCCESS: {
      return state.filter((x) => x.id !== action.payload);
    }

    case SEARCH_SUCCESS: {
      return action.payload
        ? state.filter((x) => {
          const itemData = x.Name.toUpperCase();
          const textData = String(action.payload).toLocaleUpperCase();
          return itemData.indexOf(textData) > -1;
        })
        : DATA;
    }

    case EDIT_SUCCESS: {
      state.map((x) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (x.id == action.payload.id) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          x.Name = action.payload.Name;
          return x;
        }
        return x;
      });
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default todoSlice;
