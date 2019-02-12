import React, { Component } from 'react';
import AuthForm from './AuthForm';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const StyledGrid = styled.div`

  max-width: 500px;
  margin-top: 1%;
  label {
    color: darkblue;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <StyledGrid container>
        <AuthForm />
      </StyledGrid>
    );
  }
}

export default HomePage;