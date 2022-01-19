import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function EzRedirect({ to, delay = 0, doRedir }) {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    let t;
    if (doRedir)
        dispatch({
            type: 'DO_REDIRECT',
            location: '/',
            doRedirect: false,
        });

    function run(delay) {
        t = setTimeout(() => {
            setRedirect(true);
        }, delay);
    }

    useEffect(() => {
        run(delay);
        return () => clearTimeout(t);
    }, []);

    return redirect && doRedir ? <Redirect to={to} /> : <></>;
}

export default EzRedirect;
