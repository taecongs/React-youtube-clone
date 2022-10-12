import React, { useState, useCallback } from 'react';

import VideoHeader from './components/video_header';


/*====================================================================================================================================
  ★★★ useState() ★★★
  -앱의 유동적인 데이터를 다루기 위한 객체이다.

  ★★★ useCallback() ★★★
  -특정 함수를 새로 만들지 않고 재사용하기 위해 사용한다.  
  -첫 번째 인자로 넘어온 함수를, 두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 변경 될 때까지 저장해놓고 재사용할 수 있게 해준다.
====================================================================================================================================*/

function App({ youtube }) {
    // const [초기값, 초기값을 변경하기 위해 사용하는 함수] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    const logoClick = useCallback(() => {
        setSelectedVideo(null);
        youtube
            // youtube.js 에서 정의한 .mostPopular 함수를 실행한다.
            .mostPopular()
            
            // 비동기 작업이 완료된 후 함수의 성공 또는 오류가 한 번만 호출되고 then() 함수도 여러 프로미스를 연결하기 위해 호출 및 반환한다.
            .then((videos) => {
                const promises = [];
                // Promise.all()은? 여러 비동기 동작을 하나로 묶어 하나의 프로미스처럼 관리할 수 있게 해준다.
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