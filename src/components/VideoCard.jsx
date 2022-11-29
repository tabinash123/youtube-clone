import React from 'react'
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  

  return (
    <Card sx={{ width:300,boxShadow:12,borderRadius:2 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
           alt={snippet?.title} 
          sx={{ width: 300, height: 180 }}
          
        />        
      </Link>
      <CardContent sx={{background:'#1e1e1e',height:106}} >
       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant=' subtitle1'
            fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60) }
          </Typography>          
        </Link>
       <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle1'
            color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 5 }} />
          </Typography>          
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;