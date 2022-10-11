import React, { useEffect, useState, useCallback } from 'react';


// import VideoDetail from './components/video_detail';
import VideoList from './video_list';

import VideoDetail from './video_detail';



function VideoBox({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => {
                const promises = [];
                Promise.all(youtube.channel(videos, promises)).then(() => {
                    setVideos(videos.items);
                    console.log(videos.items);
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
            });
    }, [youtube]);

    return (
        <article>
            <section
                className={
                    selectedVideo
                        ? 'flex_detail'
                        : 'flex_home'
                }
            >
                {selectedVideo && (
                    <div className='flex_2'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className='flex_1'>
                    {isLoading && (<div><span><img src='../image/spinner.gif' alt='스피너' /></span></div>)}
                    {!isLoading && ( <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>)}
                </div>
            </section>
        </article>
    );
}



export default VideoBox;