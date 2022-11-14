import { Navbar } from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import './App.css';
import WritingState from './context/writing/WritingState';
import AuthState from './context/auth/AuthState';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <AuthState>
      <WritingState>
        <Router>
          <Navbar />
          <div className="containerOuter">
            <div className="containerInner">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </Router>
      </WritingState>
    </AuthState>
  );
}

export default App;
