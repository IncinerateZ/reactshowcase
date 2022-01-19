import { BrowserRouter as Router } from 'react-router-dom';
import RouterManager from './.RouterManager';
import './App.css';

function App() {
    return (
        <Router>
            <RouterManager></RouterManager>
        </Router>
    );
}

export default App;
