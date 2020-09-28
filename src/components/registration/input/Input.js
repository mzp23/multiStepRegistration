import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

const CustomInput = styled.input`
  padding: 10px 5px;
  margin-bottom: 25px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #000;
  }
`;

const Input = React.memo(
  ({
    type,
    name,
    placeholder,
    isValid,
    invalidMessage,
    handleChange,
    value,
  }) => {
    return (
      <>
        <CustomInput
          type={type}
          name={name}
          placeholder={placeholder}
          data-tip={isValid}
          data-for={name}
          data-event="keyup"
          data-event-off="blur"
          onChange={handleChange}
          value={value}
        />
        {!isValid ? (
          <ReactTooltip place="right" type="warning" effect="solid" id={name}>
            <span>{invalidMessage}</span>
          </ReactTooltip>
        ) : null}
      </>
    );
  }
);

export default Input;
