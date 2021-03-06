import React from 'react';
import { useSelector } from 'react-redux';
import 'App.css';
import githubLogo from 'imgs/GitHub-Mark-Light-120px-plus.png';

export default function PersistenFloatingComponent() {
    var rxo = useSelector((state) => state.reduxone);
    return (
        <div
            className='floater'
            style={{
                position: 'fixed',
                backgroundColor: '#282c34',
                borderRadius: '20px',
                border: '1px solid #111',
            }}
        >
            <div className='floater__icon' style={{ fontSize: '2rem' }}>
                !
            </div>
            <div className='floater__content'>
                Persistent Floating Component{' '}
                <p>Redux Stored Value: {rxo.value}</p>
                <div>
                    <a href='https://github.com/IncinerateZ/reactshowcase'>
                        <img
                            src={githubLogo}
                            alt='github'
                            style={{ width: '35px', cursor: 'pointer' }}
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
}
