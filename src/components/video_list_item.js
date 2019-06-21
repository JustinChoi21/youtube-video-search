import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // props 대신 {video}를 하면 props에서 바로 video를 가져온다

    // const video = props.video;

    let imgUrl = "";

    if(video.hasOwnProperty('snippet')){
        imgUrl = video.snippet.thumbnails.default.url;
    } else {
        imgUrl = "";
    }

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imgUrl} />
              </div>
              <div className="media-right">
                  <div className="media-heading">{video.snippet.title}</div>
              </div>
          </div>
      </li>
    );
}

export default VideoListItem;