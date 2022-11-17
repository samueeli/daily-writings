import { Navbar } from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import WritingState from './context/writing/WritingState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
                  <Route
                    exact
                    path="/"
                    element={<PrivateRoute component={Home} />}
                  />
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
