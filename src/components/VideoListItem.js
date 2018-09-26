import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return(
        <li className='list-group-item' onClick={() => onVideoSelect(video) } style={{cursor: 'pointer'}}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img alt='' className='media-object' src={imgUrl}/> 
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
} 

export default VideoListItem;