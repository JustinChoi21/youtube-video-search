import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videos = props.videos;

    const video_list = videos.map(video => {
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} video={video} />
        );
    });

    return (
      <div>
          {video_list}
      </div>
    );
};

export default VideoList;