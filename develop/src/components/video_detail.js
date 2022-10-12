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


  // 좋아요 관련 정의
  function countConverter3(video) {
    let result;
    if (video.likeCount < 1000) {
      result = video.likeCount;
    } else if (video.likeCount < 10000) {
      const num = video.likeCount / 1000;
      result = `${num.toFixed(1)}천`;
    } else if (video.likeCount < 100000) {
      const num = video.likeCount / 10000;
      result = `${num.toFixed(1)}만`;
    } else if (video.likeCount < 100000000) {
      result = `${Math.floor(video.likeCount / 10000)}만`;
    } else {
      result = `${Math.floor(video.likeCount / 100000000)}억`;
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


  // 제목 위 태그
  function tagMaker(video) {
    let result = '';
    let i = 0;
    while (i < 3) {
        result += `#${video.tags[i]} `;
        i++;
    }
    return result;
}


  return (
    <section>
      <div className='iframe_video'>
        <iframe type='text/html' title='youtube video player' width='100%' height='100%' src={`https://www.youtube.com/embed/${video.id}`} frameBorder='0' allowFullScreen></iframe>
      </div>
      <div className='video_boxer'>

        <div className='tit_box'>
          <h1 className='video_tit'>
          <p className='tag_tit'>{tagMaker(video)}</p>
            {title.body.innerHTML}
            <div className='video_infomation'>
              <p className='video_mini mini_l'>조회수 {countConverter1(video)} <span className='circle_txt'>•</span> {result2}</p>

              <div className='right_info'>
                <div className='infos_box'>
                  <div className='r_i1'>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                      <g>
                        <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                      </g>
                    </svg>
                  </div>

                  <div className='r_i2'>
                    {countConverter3(video)}
                  </div>
                </div>

                <div className='infos_box'>
                  <div className='r_i1'>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                      <g>
                        <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                      </g>
                    </svg>
                  </div>

                  <div className='r_i2'>
                    {video.dislikeCount}<span className='r_txt'>싫어요</span>
                  </div>
                </div>

                <div className='infos_box'>
                  <div className='r_i1'>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                      <g mirror-in-rtl="" >
                        <path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path>
                      </g>
                    </svg>
                  </div>

                  <div className='r_i2'>
                    <span className='r_txt'>공유</span>
                  </div>

                  <div className='infos_box'>
                    <div className='r_i1'>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                        <g>
                          <path d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"></path>
                        </g>
                      </svg>
                    </div>

                    <div className='r_i2'>
                      <span className='r_txt'>오프라인 저장</span>
                    </div>
                  </div>

                  <div className='infos_box'>
                    <div className='r_i1'>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                        <g>
                          <path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"></path>
                        </g>
                      </svg>
                    </div>

                    <div className='r_i2'>
                      <span className='r_txt'>클립</span>
                    </div>
                  </div>

                  <div className='infos_box'>
                    <div className='r_i1'>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                        <g>
                          <path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path>
                        </g>
                      </svg>
                    </div>

                    <div className='r_i2'>
                      <span className='r_txt'>저장</span>
                    </div>
                  </div>

                  <div className='infos_box'>
                    <div className='r_i1'>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className='info_icon'>
                        <g>
                          <path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"></path>
                        </g>
                      </svg>
                    </div>

                  </div>
                </div>
              </div>
            </div>
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
