import React, { memo } from 'react';

import '../css/sidebar.scss';
import '../css/content.scss';

import VideoBox from './video_box';



// youtube 컴포넌트 불러오기
import Youtube from '../service/youtube';

import axios from 'axios';


const httpClient = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: { key: process.env.REACT_APP_API_KEY },
});

const youtube = new Youtube(httpClient);

// 함수 하나를 만든다.
// active 클래스를 없애는 함수를 만든다.
// 타고타고 가서 VideoList 에  props 준다.

const NavBar = memo((props) => {
    return (
        <div className='multi'>
            <aside>
                <div className='container_main'>
                    <div className={props.isOpen ? 'sidebar' : 'hideMenu'}>
                        <div className="middle-sidebar">
                            <ul className="sidebar-list">
                                <li className="sidebar-list-item active">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path>
                                                <path className='fill_h' d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">홈</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
                                                <path className='fill_h' d="M11.23,13.08c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99c0.21-0.29,0.51-0.48,0.86-0.54 c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86c0.06,0.35-0.02,0.71-0.23,0.99c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02C11.72,13.33,11.45,13.25,11.23,13.08z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.03,5.97L9.8,9.8l-3.83,8.23l8.23-3.83L18.03,5.97z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">탐색</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                                                <path className='fill_h' d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">Shorts</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
                                                <path className='fill_h' d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">구독</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
                                                <path className='fill_h' d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">보관함</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path className='fill_n' d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">시청기록</div>
                                    </span>
                                </li>

                                {/* 사이드바 로그인  */}
                                <li className="sidebar-list-item li_line no-active">
                                    <span className="sidebar-link two-link">
                                        <div className="hidden-sidebar hidden-text">
                                            <span className='hidden-span'>로그인하면 동영상에 좋아요를 표시하고<br />댓글을 달거나 구독할 수 있습니다.</span>
                                            <div className='end_login2'>
                                                <svg viewBox="0 0 24 24" focusable="false" className="style-scope2">
                                                    <g>
                                                        <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"></path>
                                                    </g>
                                                </svg>
                                                <span className='end_login_txt2'>로그인</span>
                                            </div>
                                        </div>
                                    </span>
                                </li>

                                {/* 사이드바 검은 아이콘 */}
                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-1.jpg' alt='1' />
                                        <div className="hidden-sidebar">음악</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-2.jpg' alt='2' />
                                        <div className="hidden-sidebar">스포츠</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-3.jpg' alt='3' />
                                        <div className="hidden-sidebar">게임</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-4.jpg' alt='4' />
                                        <div className="hidden-sidebar">영화</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-5.jpg' alt='5' />
                                        <div className="hidden-sidebar">학습</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/ytb-6.jpg' alt='6' />
                                        <div className="hidden-sidebar">360° 동영상</div>
                                    </span>
                                </li>

                                {/* 탐색 */}
                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon ytb-img" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path d="M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9c4.96,0,9-4.04,9-9S16.96,3,12,3 M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2L12,2z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">채널 탐색</div>
                                    </span>
                                </li>

                                {/* 유튜브 더보기 */}
                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/redimg-1.png' alt='1' />
                                        <div className="hidden-sidebar">YouTube Premium</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/redimg-2.png' alt='2' />
                                        <div className="hidden-sidebar">YouTube Music</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/redimg-3.png' alt='3' />
                                        <div className="hidden-sidebar">YouTube Kids</div>
                                    </span>
                                </li>

                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <img className='ytb-img' src='./image/redimg-4.png' alt='4' />
                                        <div className="hidden-sidebar">YouTube TV</div>
                                    </span>
                                </li>

                                {/* 설정 */}
                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon ytb-img" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">설정</div>
                                    </span>
                                </li>

                                {/* 신고기록  */}
                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon ytb-img" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">신고기록</div>
                                    </span>
                                </li>

                                {/* 고객센터 */}
                                <li className="sidebar-list-item">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon ytb-img" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">고객센터</div>
                                    </span>
                                </li>

                                {/* 의견보내기 */}
                                <li className="sidebar-list-item li_line">
                                    <span className="sidebar-link">
                                        <svg viewBox="0 0 24 24" className="sidebar-icon ytb-img" preserveAspectRatio="xMidYMid meet" focusable="false">
                                            <g>
                                                <path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"></path>
                                            </g>
                                        </svg>
                                        <div className="hidden-sidebar">의견보내기</div>
                                    </span>
                                </li>


                                {/* 사이드바 로그인  */}
                                <li className="sidebar-list-item no-active">
                                    <span className="sidebar-link two-link">
                                        <div className="hidden-sidebar hidden-text">
                                            <span className='hidden-span s-right'>정보</span>
                                            <span className='hidden-span s-right'>보도자료</span>
                                            <span className='hidden-span s-right'>저작권</span>
                                            <span className='hidden-span'>크리에이터 광고</span>
                                            <br />
                                            <span className='hidden-span s-right'>약관</span>
                                            <span className='hidden-span s-right'>개인정보처리방침</span>
                                            <span className='hidden-span s-right'>정책 및 안전</span>
                                            <br />
                                            <span className='hidden-span s-right'>YouTube 작동의 원리</span>
                                            <span className='hidden-span'>새로운 기능 테스트하기</span>
                                        </div>
                                    </span>
                                </li>

                                {/* 사이드바 로그인  */}
                                <li className="sidebar-list-item no-active">
                                    <span className="sidebar-link two-link">
                                        <div className="hidden-sidebar hidden-text">
                                            <span className='hidden-span'>
                                                © 2022 Google LLC, Sundar Pichai, 1600<br />
                                                Amphitheatre Parkway, Mountain View<br />
                                                CA 94043, USA, 080-822-1450 (무료),<br />
                                                yt-support-solutions-kr@google.com,<br />
                                                호스팅: Google LLC, <br />
                                            </span>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

            <VideoBox youtube={youtube} />
        </div>
    );
});

export default NavBar;
