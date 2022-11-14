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
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

function App() {
  return (
    <AuthState>
      <WritingState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="containerOuter">
              <div className="containerInner">
                <Alerts />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </WritingState>
    </AuthState>
  );
}

export default App;
