import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Page2 from './components/Page2.jsx';
import Page1 from './components/Page1.jsx';
import TruthPage from './components/Truth.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/choose" element={<Page2 />} />
        <Route path="/truth" element={<TruthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
