import React, { Component } from 'react';
import AuthForm from './AuthForm';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const StyledGrid = styled.div`
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
      <StyledGrid>
        <AuthForm />
      </StyledGrid>
    );
  }
}

export default HomePage;