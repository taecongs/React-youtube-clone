import React from 'react';

const VideoItem = ({ video, onVideoClick}) => {
  // console.log(video);
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');

  return (
    <li className='video_li' onClick={() => onVideoClick(video)}>
      <img className='video_thumbnail' src={video.thumbnailURL} alt='동영상 썸네일' />

      <div className='video_detail'>
        <img className='detail_img' src={video.channelThumbnails} alt='채널 썸네일' />
        <div className='detail_content'>
          <p className='detail_title'>{title.body.innerHTML}</p>
          <p className='detail_channel'>{video.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
