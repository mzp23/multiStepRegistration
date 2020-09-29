import React from 'react';
import * as Styled from './Select.styled';

const Select = React.memo(({ options, placeholder, handleChange, name, value }) => {
  return (
    <Styled.CustomSelect onChange={handleChange} name={name} value={value}>
      <option hidden>{placeholder}</option>
      {options.map((optionItem) => (
        <option key={optionItem} value={optionItem} >
          {optionItem}
        </option>
      ))}
    </Styled.CustomSelect>
  );
});

export default Select;
