import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  grey
} from '@material-ui/core/colors'

const StyledMedia = styled(CardMedia)`
  height: 240px;
  object-fit: contain;
`;

const StyledCard = styled(Card)`
  background: ${grey[50]}
  margin-bottom: 10px;
  max-width: 800px;
  padding: 1%;
`;

const BlogPost = (props) => {

  return (
    <StyledCard>
      <Typography component="p">
        <a href="">Domphan</a>
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2" align='center'>
          Check out this weird animal
          </Typography>
      </CardContent>
      {
        !props.multimedia
          ? <CardActionArea>
            <StyledMedia
              component="img"
              image="https://co0069yjui-flywheel.netdna-ssl.com/wp-content/uploads/2017/08/Lizard-1000x520.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          : null
      }
      <CardContent>
        <Typography component="p">
          Hey homies, just got a new pet animal.
          </Typography>
      </CardContent>
    </StyledCard>
  )

}

export default BlogPost;