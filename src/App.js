import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
