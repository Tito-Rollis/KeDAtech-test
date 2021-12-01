import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DateField from './pages/dateField/dateField';
import LabelDisplay from './pages/labelDisplay/labelDisplay';
import TextField from './pages/textField/textField';
import Range from './pages/range/range';
import Home from './pages/home/home';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/label" element={<LabelDisplay />} />
                <Route path="/date" element={<DateField />} />
                <Route path="/text" element={<TextField />} />
                <Route path="/range" element={<Range />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
