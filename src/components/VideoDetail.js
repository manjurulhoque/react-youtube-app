import React from 'react'

export default ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='col-md-8'>
            <div className="card border-secondary">
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={videoUrl}></iframe>
                </div>
                <div className='card-body' style={{padding: 0}}>
                    <div className='card-title' style={{paddingTop: '1.25rem', paddingBottom: '1.25rem'}}>{video.snippet.title}</div>
                    <div className='card-text' style={{paddingBottom: '1.25rem'}}>{video.snippet.description}</div>
                </div>
            </div>
        </div>
    )
}
