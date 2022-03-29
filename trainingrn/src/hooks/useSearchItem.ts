import { useDispatch, useSelector } from 'react-redux';
import { onSearch } from '../reduxs/action';

export const useSearchItem = () => {
  const searchItem = useSelector((state: any) => state.todoSlice);
  const dispatch = useDispatch();
  const onSearchItem = (Name: string): void => {
    dispatch(onSearch(Name));
  };

  return {
    searchItem,
    onSearchItem,
  };
};
