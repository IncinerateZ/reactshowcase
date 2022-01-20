import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import 'css/landing.css';
import axios from 'axios';
import ReduxOne from 'components/ReduxOne';
import ReduxTwo from 'components/ReduxTwo';

export default function Page() {
    const dispatch = useDispatch();
    const [text1, setText1] = useState('');
    const [saveText, setSaveText] = useState('');
    const [saveId, setSaveId] = useState('');
    const [fetchId, setFetchId] = useState('');
    const [fetchedText, setFetchedText] = useState('');
    const [btcPrice, setBtcPrice] = useState(0);

    const BACKEND = 'http://localhost:3030';

    function accessPage() {
        return true;
    }

    function storeData(value) {
        axios
            .post(BACKEND + '/store', {
                value: saveText,
            })
            .then((res) => {
                setSaveId(res.data.id);
            });
    }

    function fetchData(id) {
        axios.get(BACKEND + `/store?id=${id}`).then((res) => {
            setFetchedText(res.data.value);
        });
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
        <div style={{ backgroundColor: 'rgb(37,37,38)' }}>
            <h1
                style={{
                    marginLeft: '10px',
                    cursor: 'pointer',
                    width: 'fit-content',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                React Skills
            </h1>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>Custom Routing</h3>
                    <div>
                        <Link
                            to='page1'
                            style={{
                                marginRight: '15px',
                                borderBottom: '1px solid #fff',
                            }}
                        >
                            Page One
                        </Link>
                        <Link
                            to='page2'
                            style={{
                                marginRight: '15px',
                                borderBottom: '1px solid #fff',
                            }}
                        >
                            Page Two
                        </Link>
                        <Link
                            to='page3'
                            style={{
                                marginRight: '15px',
                                borderBottom: '1px solid #fff',
                            }}
                        >
                            Page Three
                        </Link>
                    </div>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>React Hooks: useState</h3>
                    <p>Text Box Input: {text1}</p>
                    <input
                        onChange={(e) => setText1(e.target.value)}
                        style={{ height: '1.5rem', color: '#000' }}
                    ></input>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>React Redux</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <ReduxOne />
                        <ReduxTwo />
                    </div>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>React Hooks: useEffect</h3>
                    <p>
                        Third party API usage with{' '}
                        <a
                            href='https://axios-http.com/'
                            style={{
                                marginRight: '15px',
                                borderBottom: '1px solid #fff',
                            }}
                        >
                            Axios
                        </a>
                        .
                    </p>
                    <p>
                        Data fetched from{' '}
                        <a
                            href='https://docs.coincap.io/'
                            style={{
                                marginRight: '15px',
                                borderBottom: '1px solid #fff',
                            }}
                        >
                            Coincap
                        </a>
                    </p>
                    <p>Current BTC price is USD${btcPrice}</p>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>FullStack Development: Backend</h3>
                    <p>Data is wiped after some time.</p>
                    <div>
                        <p>Enter data to save:</p>
                        <input
                            onChange={(e) => {
                                setSaveText(e.target.value);
                            }}
                            placeholder='data'
                            style={{ height: '1.5rem', color: '#000' }}
                        ></input>
                        <button
                            onClick={storeData}
                            style={{ height: '1.85rem', color: '#000' }}
                        >
                            Save
                        </button>
                        {saveId.length > 0 ? (
                            <p>Your retrieval id is : {saveId}</p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <p>
                            Enter data to retrieve (from another
                            tab/browser/device):
                        </p>
                        <input
                            placeholder='id'
                            onChange={(e) => {
                                setFetchId(e.target.value);
                            }}
                            style={{ height: '1.5rem', color: '#000' }}
                        ></input>
                        <button
                            onClick={(e) => {
                                fetchData(fetchId);
                            }}
                            style={{ height: '1.85rem', color: '#000' }}
                        >
                            Retrieve
                        </button>
                        {fetchedText.length > 0 ? (
                            <p style={{ overflow: 'hidden', width: '95%' }}>
                                Your data is: {fetchedText}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>Responsive UI</h3>
                    <p>Change the page size if you are on desktop</p>
                </div>
            </div>
            <div className='landing__skills'>
                <div className='skills__content'>
                    <h3>Contact Me</h3>
                    <div>
                        Email:{' '}
                        <span>
                            justinhalim501@gmail.com / inferious77@gmail.com
                        </span>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}
