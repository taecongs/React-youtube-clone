import React, { useState } from 'react';


const VideoDetail = ({ video }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');
  const [open, setOpen] = useState(true);

  return (
    <section>
      <div className='iframe_video'>
        <iframe type='text/html' title='youtube video player' width='100%' height='100%' src={`https://www.youtube.com/embed/${video.id}`} frameBorder='0' allowFullScreen></iframe>
      </div>
      <div className='video_boxer'>

        <div className='tit_box'>
          <h1 className='video_tit'>{title.body.innerHTML}</h1>
        </div>

        <div className='channel_box'>
          <div className='channel_tit'>
            <img src={video.channelThumbnails} alt='채널 썸네일' />
            <div className='channel_inner'>
              <h2 className='ml-3'>{video.channelTitle}</h2>
              <p className='video_mini'>구독자 </p>
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
