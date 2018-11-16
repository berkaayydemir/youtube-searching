import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    //const video = props.video; konulacaksa const VideoItem = (props) => {
const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}></img>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default VideoItem;