import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import './App.css';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetails from './components/video-details';

const API_KEY = 'YOUTUBE_API_KEY';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      searchingVideos: null
    }
    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (dataList) => {
      this.setState({
        videos: dataList,
        selectedVideo: dataList[0]
      });
      //this.setState({videos}) = this.setState({videos: videos}) meaning that
      console.log(dataList);
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div className='container'>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className='row'>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        </div>
      </div>
    );
  }
}

export default App;
