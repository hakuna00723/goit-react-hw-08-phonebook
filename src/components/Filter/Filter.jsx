import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Label>
      Find contacts by Name
      <Input type="text" name="filter" onChange={onFilter}></Input>
    </Label>
  );
};
