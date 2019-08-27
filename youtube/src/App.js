import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import 'bootstrap/dist/css/bootstrap.min.css';



import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import SearchBar from'./components/SearchBar';





class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('bongo videos')
  }

  onVideoSelect = (video) =>{
      this.setState({ selectedVideo: video})
  }
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search',{
      params:{
        part: 'snippet',
        maxResults: 50,
        key: 'AIzaSyCWR_P_OvzuaHTXDszWi-WtuJZVAZwxp9k',
        q: searchTerm,

    }
  });
    
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  render() { 
    const {selectedVideo, videos} = this.state;
    return ( 
      
        
        <Grid  container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            
            
            <Grid item xs={12}>
              {/*SEARCH BAR */}
              <SearchBar onFormSubmit ={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/*video DETAILS */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/*VIDEO LIST */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        
      
      
    );
  }
}

export default App;