import { useDispatch, useSelector } from 'react-redux';
import { onDelete } from '../reduxs/action';

export const useDeleteItem = () => {
  const deleteItem = useSelector((state: any) => state.todoSlice);
  const dispatch = useDispatch();
  const onDeleteItem = (id: number): void => {
    dispatch(onDelete(id));
  };

  return {
    deleteItem,
    onDeleteItem,
  };
};
