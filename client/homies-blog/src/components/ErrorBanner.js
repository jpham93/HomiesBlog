import React from 'react';
import { Popper, Paper, Typography, Fade } from '@material-ui/core';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

const StyledTypopgrahy = styled(Typography)`
  color: red;
  padding: 10px;
`;

export default (props) => {
  return (
    <Popper
      open={!isEmpty(props.errors)}
      anchorEl={document.getElementById('popper-anchor')}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <StyledTypopgrahy>{props.errors.message}</StyledTypopgrahy>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}