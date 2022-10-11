import React, { memo } from 'react';
import VideoItem from './video_item';

const VideoList = memo(({ videos, onVideoClick, display }) => {
  return (
    <ul className='video_ul'>
      {videos.map((video) => (
        <VideoItem //
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
