import React from 'react';
import logo from '../logo.svg';

const VideoDetails = (props) => {

    if (!props.video) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    //const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;