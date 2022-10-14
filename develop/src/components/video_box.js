import React, { useEffect, useState, useCallback } from 'react';

// import VideoDetail from './components/video_detail';
import VideoList from './video_list';

import VideoDetail from './video_detail';



function VideoBox({ youtube}) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    useEffect(() => {
        youtube
            .mostPopular()
            .then((videos) => {
                const promises = [];
                Promise.all(youtube.channel(videos, promises)).then(() => {
                    setVideos(videos.items);
                    // console.log(videos.items);
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
            });
    }, [youtube]);

    return (
        <article>
            <section className={selectedVideo ? 'flex_detail' : 'flex_home'}>
            <div className='category_box'>
                    <ul>
                        <li className='b_button'><button>전체</button></li>
                        <li className='s_button'><button>게임</button></li>
                        <li className='s_button'><button>음악</button></li>
                        <li className='s_button'><button>실시간</button></li>
                        <li className='s_button'><button>믹스</button></li>
                        <li className='s_button'><button>스포츠</button></li>
                        <li className='s_button'><button>요리</button></li>
                        <li className='s_button'><button>최근에 업로드된 영상</button></li>
                        <li className='s_button'><button>감상한 동영상</button></li>
                        <li className='s_button'><button>새로운 맞춤 동영상</button></li>
                    </ul>
                </div>

                {selectedVideo && (
                    <div className='flex_2'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className='flex_1'>
                    {isLoading && (<div className='spinner_box'><span><img src='../image/spinner.gif' alt='스피너' /></span></div>)}
                    {!isLoading && ( <VideoList videos={videos} onVideoClick={selectVideo} />)}
                </div>
            </section>
        </article>
    );
}



export default VideoBox;