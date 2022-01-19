import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Page() {
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

    return !accessPage() ? (
        <></>
    ) : (
        <div>
            The page you are looking for no longer exists.{' '}
            <Link to='/'>Go Back</Link>
        </div>
    );
}
