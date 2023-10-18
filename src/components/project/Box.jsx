import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./box.css"

export const Box = ({ imageSrc, title, content, shareLink, learnMoreLink }) => {
  return (
    <div className='container'>
      <Card sx={{ maxWidth: 250 }} className='box__container'>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={shareLink} target="_blank">Github</Button>
          <Button size="small" href={learnMoreLink} target="_blank"></Button>
        </CardActions>
      </Card>
    </div>
  );
};