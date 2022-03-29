import { ADD_SUCCESS } from './constants';
import { DELETE_SUCCESS } from './constants';
import { EDIT_SUCCESS } from './constants';
import { SEARCH_SUCCESS } from './constants';

export const onAdd = (Name: string) => {
  return {
    type: ADD_SUCCESS,
    payload: Name,
  };
};

export const onDelete = (id: number) => {
  return {
    type: DELETE_SUCCESS,
    payload: id,
  };
};

export const onSearch = (Name: string) => {
  return {
    type: SEARCH_SUCCESS,
    payload: Name,
  };
};

export const onEdit = (id: number, Name: string) => {
  return {
    type: EDIT_SUCCESS,
    payload: { id, Name },
  };
};
