import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Youtube from './service/youtube';
import axios from 'axios';


/*====================================================================================================================================
  ★★★ axios ★★★
  -비동기 HTTP 통신이 가능하며, HTTP 요청과 응답을 JSON 형태로 자동 변경한다.
  -서버에서 처리를 하고 다시 데이터를 클라이언트에 응답 한다.
  -.then으로 함수인자(response)를 받아 객체에 담긴다. (담긴 데이터는? : 응답 데이터)
====================================================================================================================================*/


// .create를 통해 axios 만의 instance를 생성한다.
const httpClient = axios.create({
  // 통신하고자 하는 주소
  baseURL: 'https://youtube.googleapis.com/youtube/v3',

  // 인자로 보낼 데이터 (키 : 값)으로 정의 => ? 파라미터를 전달
  params: { key: process.env.REACT_APP_API_KEY },
});


/*====================================================================================================================================
  ★★★ new 연산자 ★★★
  -빈 객체를 생성하고 this가 빈 객체를 가리킨다.
  -함수를 실행한다.
  -this를 반환한다.
====================================================================================================================================*/


// new 연산자를 사용햐여 인스턴스를 생성한다.
const youtube = new Youtube(httpClient);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);