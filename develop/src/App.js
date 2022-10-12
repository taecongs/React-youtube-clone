import React, { useState, useCallback } from 'react';

import VideoHeader from './components/video_header';


function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    const logoClick = useCallback(() => {
        setSelectedVideo(null);
        youtube
            .mostPopular()
            .then((videos) => {
                const promises = [];
                Promise.all(youtube.channel(videos, promises)).then(() =>
                    setVideos(videos.items)
                );
            });
    }, [youtube]);


    return (
        <div>
            <VideoHeader logoClick={logoClick} />
        </div>
    );
}

export default App;