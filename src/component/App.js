import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoItem from './VideoItem';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';


class App extends React.Component {

    state = {videos:[],selectedVideo:null};

    onSelectedVideo = (selectedVideo)=>{
        console.log(selectedVideo);
        this.setState({selectedVideo:selectedVideo});
    }

    onSearchSubmit = (term)=>{
        axios.get('https://www.googleapis.com/youtube/v3/search',{
             params:{
                 part: 'snippet',
                 q: term,
                 key: 'AIzaSyCE8ryviZhGLrL1GrYbNhJ6K0Drwc1CRsc'
             }
         }).then((response)=>{
             this.setState({videos: response.data.items,selectedVideo:response.data.items[0]})
         })
        }
    render(){
        return (
        <div className="ui container">
            <SearchBar onSubmit = {this.onSearchSubmit} />
            <div className="ui grid">
                <div  className="ui row">
                    <div className="eleven wide column">
                    <VideoPlayer video = {this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                    <VideoList videos = {this.state.videos} onSelectedVideo = {this.onSelectedVideo} />  
                    </div>
                </div>
            </div>   
        </div>
        
        )
    }
}

export default App;