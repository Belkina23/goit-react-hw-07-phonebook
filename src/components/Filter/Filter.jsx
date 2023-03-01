import { SectionFilter, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <SectionFilter>
      <Label>Filter</Label>
      <Input type="text" value={filterValue} onChange={handleChange} />
    </SectionFilter>
  );
};

export default Filter;
