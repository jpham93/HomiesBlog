import React, { Component } from 'react';
import { BlogPost } from './';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledGrid = styled(Grid)`
  display: flex;
  align-content: center;
  width: 80%;
  margin: auto;
`

const StyledDiv = styled.div`
  width: 100%;
  max-height: 600px;
  margin-top: -25px;
  overflow-y: auto;
`

class BlogFeed extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledGrid
          container
          spacing={24}
          direction='column'
          justify='center'

        >
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