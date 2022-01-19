import { useLocation } from 'react-router';
import EzRedirect from 'utils/EzRedirect';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function toObject(arr) {
    let result = {};
    arr.forEach((e) => {
        let s = e.split('=');
        result[s[0]] = s[1];
    });
    return result;
}

function pageExists(path) {
    var paths = path.split('/');
    if (paths.length > 1) paths.shift();
    try {
        let component = require(`./pages/${paths[0]}`).default;
        var page = paths.shift();
        return {
            component: component,
            page: page,
            extra: paths,
            query: toObject(useLocation().search.slice(1).split('&')),
        };
    } catch {
        return null;
    }
}

function RouterManager() {
    const dispatch = useDispatch();

    var path = useLocation().pathname;
    path = path === '/' || path === '' ? 'landing' : path;
    var page = pageExists(path);
    var Component = page ? page.component : pageExists('notfound').component;
    var redir = useSelector((state) => state.redirect);
    dispatch({ type: 'SET_LOCATION', location: page });

    //useEffect(() => {}, []);

    return (
        <div>
            <Component pageDetails={page} />
            <EzRedirect to={redir.location} doRedir={redir.doRedirect} />
        </div>
    );
}

export default RouterManager;
