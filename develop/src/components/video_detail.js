import React, { useState } from 'react';


const VideoDetail = ({ video }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');
  const [open, setOpen] = useState(true);



  // 조회수 관련 정의
  function countConverter1(video) {
    let result;
    if (video.viewCount < 1000) {
        result = video.viewCount;
    } else if (video.viewCount < 10000) {
        const num = video.viewCount / 1000;
        result = `${num.toFixed(1)}천`;
    } else if (video.viewCount < 100000) {
        const num = video.viewCount / 10000;
        result = `${num.toFixed(1)}만`;
    } else if (video.viewCount < 100000000) {
        result = `${Math.floor(video.viewCount / 10000)}만`;
    } else {
        result = `${Math.floor(video.viewCount / 100000000)}억`;
    }
    return result;
}


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
    <section>
      <div className='iframe_video'>
        <iframe type='text/html' title='youtube video player' width='100%' height='100%' src={`https://www.youtube.com/embed/${video.id}`} frameBorder='0' allowFullScreen></iframe>
      </div>
      <div className='video_boxer'>

        <div className='tit_box'>
          <h1 className='video_tit'>
            {title.body.innerHTML}
            <p className='video_mini mini_l'>조회수 {countConverter1(video)} <span className='circle_txt'>•</span> {result2}</p>
          </h1>

        </div>

        <div className='channel_box'>
          <div className='channel_tit'>
            <img src={video.channelThumbnails} alt='채널 썸네일' />
            <div className='channel_inner'>
              <h2 className='ml-3'>{video.channelTitle}</h2>
              <p className='video_mini'>구독자 {countConverter2(video)} 명</p>

            </div>
          </div>

          <div className='button_box'>
            <button className='first_bt'> <span className='blue_t'>가입</span></button>
            <button className='second_bt'><span className='black_t'>구독</span></button>

          </div>
        </div>

        <div className='descriptionBox'>
          <pre className={open && 'pre_close'}>
            {video.description}
          </pre>
          <button className='moreBtn' onClick={() => setOpen(!open)}>{open ? '더보기' : '간략히'}</button>
        </div>
      </div>
    </section>
  );
};

export default VideoDetail;
