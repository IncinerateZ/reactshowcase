import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Page({ pageDetails }) {
    const dispatch = useDispatch();
    console.log(pageDetails);
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
            This is Page One.{' '}
            <Link
                to='/'
                style={{
                    borderBottom: '1px solid #fff',
                }}
            >
                Go Back
            </Link>
            <div>
                Extra Paths:{' '}
                {pageDetails.extra.map((k) => {
                    return <span>{k + ', '}</span>;
                })}
            </div>
            <div>
                Queries:{' '}
                {Object.keys(pageDetails.query).map((k, i) => {
                    return <div>{k + ': ' + pageDetails.query[k]}</div>;
                })}
            </div>
        </div>
    );
}
