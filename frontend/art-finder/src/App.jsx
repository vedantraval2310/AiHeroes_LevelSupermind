// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeForm from './components/WelcomeForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeForm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


