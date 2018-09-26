import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyBPPyXesJOmb2cj7JAkmX-fPjNaGtKCLMU';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selected: null
        }

        this.searchVideo('reactjs');
    }

    searchVideo = (value) => {
        YTSearch({key:API_KEY, term: value}, (videos) => {
            this.setState({
                videos: videos,
                selected: videos[0]
            });
        })
    }

    onVideoSelect = (video) => {
        this.setState({selected: video});
    }

    render() {
        return (
            <div className="App">
                <Header onInputChange={this.searchVideo}/>
                <div className="container" style={{marginTop: 20}}>
                    <div className="row">
                        <VideoDetail video={this.state.selected}/>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
