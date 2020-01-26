import React from 'react'
import { Embed } from 'semantic-ui-react'


const VideoPlayer = (props) => {

    if(!props.video){
        return(
            <div>Loading...</div>
        )
    }else{
        return(
        <div className="ui segment">
            <Embed
                id= {props.video.id.videoId}
                source='youtube'
            />
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>)
    }
   
}

export default VideoPlayer;