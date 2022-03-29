import { useDispatch, useSelector } from 'react-redux';
import { onEdit } from '../reduxs/action';

export const useEditItem = () => {
  const editItem = useSelector((state: any) => state.todoSlice);
  const dispatch = useDispatch();
  const onEditItem = (id: number, Name: string): void => {
    dispatch(onEdit(id, Name));
  };

  return {
    editItem,
    onEditItem,
  };
};
