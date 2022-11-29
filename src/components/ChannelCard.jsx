import React from 'react';
import {Box,Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';


const ChannelCard = ({ channelDetail,marginTop }) => {
  
  return (
    <Box sx={{
      boxShadow: "none", borderRadius: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '350px', md: '330pxs' },
      marginTop,

    }}>
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 18, color: "gray", ml:'5px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (<Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>) }
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;