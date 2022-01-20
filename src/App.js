import PersistentFloatingComponent from 'components/PersistentFloatingComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterManager from './.RouterManager';
import './App.css';

function App() {
    return (
        <Router>
            <PersistentFloatingComponent />
            <RouterManager></RouterManager>
        </Router>
    );
}

export default App;
