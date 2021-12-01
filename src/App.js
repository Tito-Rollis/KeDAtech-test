import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataField from './pages/dataField/dataField';
import LabelDisplay from './pages/labelDisplay/labelDisplay';
import TextField from './pages/textField/textField';
import Home from './pages/home/home';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/label" element={<LabelDisplay />} />
                <Route path="/data" element={<DataField />} />
                <Route path="/text" element={<TextField />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
