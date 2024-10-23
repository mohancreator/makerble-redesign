import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/my-home" />} />
        <Route path="/my-home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
