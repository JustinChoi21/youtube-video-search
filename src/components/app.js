import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import _ from 'lodash';

const API_KEY = 'AIzaSyBpASW3rjL8Sd8IrKwj9gJJ_cG7Dmk7_m4';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.onSearchChange('react.js');

  }

  onSearchChange(term) {

    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce(term => {this.onSearchChange(term)}, 300);

    return ( // return 에 ()를 쓰지 않으면 JSX를 한줄로 작성해야 한다
      <div>
        <SearchBar onSearchChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}
