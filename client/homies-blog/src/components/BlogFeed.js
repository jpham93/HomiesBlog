import React, { Component } from 'react';
import { BlogPost } from './';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledGrid = styled(Grid)`
  display: flex;
  align-content: center;
`

const StyledDiv = styled.div`
  flex-grow: 1;
`

class BlogFeed extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledGrid container spacing={24}>
          <Grid item xs={12}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Grid>
        </StyledGrid>
      </StyledDiv>
    );
  }
}

export default BlogFeed;