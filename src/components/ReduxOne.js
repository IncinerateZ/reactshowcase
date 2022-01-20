import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ReduxOne() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    return (
        <div style={{ border: '1px solid black', margin: '5px' }}>
            Redux: Component One
            <div style={{ margin: '10px' }}>
                <input
                    placeholder='Enter a value to store'
                    onChange={(e) => setValue(e.target.value)}
                    style={{
                        height: '1.5rem',
                        color: '#000',
                        width: '11rem',
                    }}
                ></input>
                <button
                    onClick={(e) => {
                        dispatch({ type: 'SET_RXO', value: value });
                    }}
                    style={{ height: '1.85rem', color: '#000' }}
                >
                    Store
                </button>
            </div>
        </div>
    );
}
