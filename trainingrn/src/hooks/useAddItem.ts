import { useDispatch, useSelector } from 'react-redux';
import { onAdd } from '../reduxs/action';

export const useAddItem = () => {
  const addItem = useSelector((state: any) => state.todoSlice);
  const dispatch = useDispatch();
  const onAddItem = (Name: string): void => {
    dispatch(onAdd(Name));
  };

  return {
    addItem,
    onAddItem,
  };
};
