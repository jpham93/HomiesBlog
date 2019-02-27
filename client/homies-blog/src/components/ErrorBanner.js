import React from 'react';
import { Popper, Paper, Typography, Collapse } from '@material-ui/core';
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
      placement='top'
    >
      {({ TransitionProps }) => (
        <Collapse {...TransitionProps}>
          <Paper>
            <StyledTypopgrahy>{"test"/*props.errors.message*/}test</StyledTypopgrahy>
          </Paper>
        </Collapse>
      )}
    </Popper>
  );
}