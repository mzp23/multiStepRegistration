import React from 'react';
import ReactTooltip from 'react-tooltip';
import * as Styled from './Input.styled';

const Input = React.memo(
  ({
    type,
    name,
    placeholder,
    isValid,
    invalidMessage,
    handleChange,
    value,
    disabled
  }) => {
    return (
      <>
        <Styled.CustomInput
          type={type}
          name={name}
          placeholder={placeholder}
          data-tip={isValid}
          data-for={name}
          data-event="keyup"
          data-event-off="blur"
          onChange={handleChange}
          value={value}
          disabled={disabled}
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
