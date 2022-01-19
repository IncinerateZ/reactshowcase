import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function PageTemplate() {
    const dispatch = useDispatch();

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
        return () => {};
    }, []);

    return !accessPage() ? <></> : <div></div>;
}
