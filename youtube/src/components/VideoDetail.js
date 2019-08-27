import React from 'react';
import {Paper, Typography} from '@material-ui/core';


const VideoDetail = ({ video }) =>{

    if(!video) return <div>Loading...</div>
        console.log(video);
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <Paper elevation={6} className="videodetails" style={{height:'70%',position:'fixed'}}>
                <iframe frameBorder="0" height="100%" width="100%" 
                title="video player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} className="videodes" style={{padding:'15px', position:'fixed'}}>


                <Typography variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </React.Fragment>
        
    );
}
export default VideoDetail;