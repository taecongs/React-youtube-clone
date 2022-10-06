import React from 'react';

// 공통 CSS 정의
import './css/common.scss';

// 헤더 CSS 정의
import './css/header.scss';


const Header = () => {
    const sideMenu = () => {

    }

    return(
        <div>
            <div className='header'>
                <div className='header_start'>
                    <div className='h_box'>
                        <button className='hambuger_btn' onClick={sideMenu}>
                            <svg viewBox="0 0 24 24"  focusable="false" className="style-scope">
                                <g>
                                    <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" fill="#000"></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className='l_box'>
                        <img src='./image/logo.png' alt='logo' width='110px' />
                    </div>
                </div>

                <div className='header_center'>
                    <input type="text" placeholder="검색" className="input_box" />

                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="search-button" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                        <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
                    </svg>
                </div>

                <div className='header_end'>
                    <button type='button' className='end_btn'>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="end_add" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>

                    <div className='end_login'>
                        <svg viewBox="0 0 24 24" focusable="false" className="style-scope">
                            <g>
                                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z" class="style-scope yt-icon"></path>
                            </g>
                        </svg>

                        <span className='end_login_txt'>로그인</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

