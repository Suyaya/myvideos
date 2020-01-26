import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{
    
    
    const content = props.videos.map((video)=>{
        return(<VideoItem key={video.id.videoId} video={video} onSelectedVideo={props.onSelectedVideo}/>)
    })
    return(
        <div className="ui link divided items">
           {content}
        </div>
    )
}
export default VideoList;