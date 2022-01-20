import React from 'react';
import { useSelector } from 'react-redux';

export default function ReduxTwo() {
    var rxo = useSelector((state) => state.reduxone);
    return (
        <div style={{ border: '1px solid black', margin: '5px' }}>
            Redux: Component Two
            <div
                style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    width: 'fit-content',
                    maxWidth: '300px',
                    overflow: 'hidden',
                }}
            >
                Stored value: {rxo.value}
            </div>
        </div>
    );
}
