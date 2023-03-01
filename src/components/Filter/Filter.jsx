import React from 'react';
import { SectionFilter, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const query = useSelector(selectFilter);
  const dispatch = useDispatch();

const onChange = query => {
  dispatch(setFilter(query))
}

  const handleChange = event => {
    onChange(event.target.value)
  };

  return (
    <SectionFilter>
      <Label>Filter</Label>
      <Input type="text" value={query} onChange={handleChange} />
    </SectionFilter>
  );
};

export default Filter;
