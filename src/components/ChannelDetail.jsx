import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from './../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const{ id }= useParams();

  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setvideos(data?.items));
  }, [id])
  
  return (
      <Box minHeight='95vh'>
    <Box sx={{justifyContent:'center'}}>
        <div style={{
          zIndex: 10,
          height: '300px',
          background : 'linear-gradient(90deg, rgba(223,7,7,1) 0%, rgba(9,115,121,0.9920343137254902) 53%, rgba(0,255,4,0.5970763305322129) 100%)',
        }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop='-110px' />        
      </Box> 

      <Box display='flex' p='2' >
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
      </Box>
      
   
  )
}

export default ChannelDetail;
