import React from 'react';
import styled from 'styled-components';

const CustomSelect = styled.select`
  padding: 10px 5px;
  margin-bottom: 25px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
  outline: none;
`;

const Select = React.memo(({ options, placeholder, handleChange, name, value }) => {
  return (
    <CustomSelect onChange={handleChange} name={name} value={value}>
      <option hidden>{placeholder}</option>
      {options.map((optionItem) => (
        <option key={optionItem} value={optionItem} >
          {optionItem}
        </option>
      ))}
    </CustomSelect>
  );
});

export default Select;
