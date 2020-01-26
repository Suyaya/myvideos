import React from 'react';



const VideoItem = (props) =>{

    return(
        <div key={props.video.id} className="item" onClick={()=>{
            let SelectedVideo = props.video
            props.onSelectedVideo(SelectedVideo);
        }} value={props.video}>
            <div className="ui image">
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} ></img>
                {props.video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem;