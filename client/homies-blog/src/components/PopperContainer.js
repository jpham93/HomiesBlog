import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 25px;
`

export default () => {
  return (
    <StyledDiv>
      <button id="popper-anchor">hello test the popper</button>
    </StyledDiv>
  );
}