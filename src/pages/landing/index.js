import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import 'css/landing.css';
import axios from 'axios';

export default function Page() {
    const dispatch = useDispatch();
    const [text1, setText1] = useState('');
    const [btcPrice, setBtcPrice] = useState(0);

    function accessPage() {
        return true;
    }

    useEffect(() => {
        if (!accessPage())
            dispatch({
                type: 'DO_REDIRECT',
                location: '/login',
                doRedirect: true,
            });
        axios
            .get('https://api.coincap.io/v2/rates/bitcoin')
            .then((res) => setBtcPrice(res.data.data.rateUsd));
        return () => {};
    }, []);

    return !accessPage() ? (
        <></>
    ) : (
        <div>
            React Skills
            <div className='landing__skills'>
                Custom Routing
                <Link to='page1'>Page One</Link>
                <Link to='page2'>Page Two</Link>
                <Link to='page3'>Page Three</Link>
            </div>
            <div className='landing__skills'>
                React Hooks: useState<p>Text Box Input: {text1}</p>
                <input onChange={(e) => setText1(e.target.value)}></input>
            </div>
            <div className='landing__skills'>
                React redux<div>One Component</div>
                <div>Another Component</div>
            </div>
            <div className='landing__skills'>
                React Hooks: useEffect
                <p>
                    Third party API usage with{' '}
                    <a href='https://axios-http.com/'>Axios</a>.
                </p>
                <p>
                    Data fetched from{' '}
                    <a href='https://docs.coincap.io/'>Coincap</a>
                </p>
                <p>Current BTC price is USD${btcPrice}</p>
            </div>
            <div className='landing__skills'>
                FullStack Development: Backend
                <p>Data is wiped after some time.</p>
                <div>
                    <p>Enter data to save:</p>
                    <input></input>
                    <button>Save</button>
                </div>
                <div>
                    <p>
                        Enter data to retrieve (from another
                        tab/browser/device):
                    </p>
                    <input></input>
                    <button>Retrieve</button>
                </div>
            </div>
            <div className='landing__skills'>
                Responsive UI
                <p>Minimize me if you are on desktop</p>
            </div>
        </div>
    );
}
