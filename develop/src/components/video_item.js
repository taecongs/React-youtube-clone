import React from 'react';

const VideoItem = ({ video, onVideoClick}) => {
  // console.log(video);
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');

  // 구독자 관련 정의
  function countConverter2(video) {
    let result;
    if (video.subscriberCount < 1000) {
      result = video.subscriberCount;
    } else if (video.subscriberCount < 10000) {
      const num = video.subscriberCount / 1000;
      result = `${num.toFixed(1)}천`;
    } else if (video.subscriberCount < 100000) {
      const num = video.subscriberCount / 10000;
      result = `${num.toFixed(1)}만`;
    } else if (video.subscriberCount < 100000000) {
      result = `${Math.floor(video.subscriberCount / 10000)}만`;
    } else {
      result = `${Math.floor(video.subscriberCount / 100000000)}억`;
    }
    return result;
  }  

  // 동영상 올라온 시간 정의
  let publishedDate = new Date(video.date);
  const currentDate = new Date();
  const seconds = (currentDate.getTime() - publishedDate.getTime()) / 1000;

  let result2;

  if (seconds < 60) {
    result2 = `${seconds}초 전`;
  } else if (seconds < 3600) {
    result2 = `${Math.floor(seconds / 60)}분 전`;
  } else if (seconds < 86400) {
    result2 = `${Math.floor(seconds / 3600)}시간 전`;
  } else if (seconds < 604800) {
    result2 = `${Math.floor(seconds / 86400)}일 전`;
  } else if (seconds < 2592000) {
    result2 = `${Math.floor(seconds / 604800)}주 전`;
  } else if (seconds < 31536000) {
    result2 = `${Math.floor(seconds / 2592000)}달 전`;
  } else {
    result2 = `${Math.floor(seconds / 31536000)}년 전`;
  };  

  return (
    <li className='video_li' onClick={() => onVideoClick(video)}>
      <img className='video_thumbnail' src={video.thumbnailURL} alt='동영상 썸네일' />

      <div className='video_detail'>
        <img className='detail_img' src={video.channelThumbnails} alt='채널 썸네일' />
        <div className='detail_content'>
          <p className='detail_title'>{title.body.innerHTML}</p>
          <p className='detail_channel'>{video.channelTitle}</p>
          <p className='video_mini mini_2'>조회수 {countConverter2(video)} <span className='circle_txt'>•</span> {result2}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
