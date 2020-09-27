import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`;

const RegistrationWrapper = ({children}) => <Wrapper>{children}</Wrapper>

export default RegistrationWrapper;