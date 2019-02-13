import React, { Component } from 'react';
import { SignupForm } from '.';
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  label {
    color: darkblue;
  }
  AuthForm {
    max-width: 50%;
    display: block;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <StyledDiv>
        <SignupForm />
      </StyledDiv>
    );
  }
}

export default HomePage;