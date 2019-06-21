import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; // 백틱을 쓰고 ${}을 쓰는 방식 : 템플릿 문자열 => ES6 문법

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>

        </div>
    );
}

export default VideoDetail;