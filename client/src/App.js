import { Navbar } from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import WritingState from './context/writing/WritingState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import './App.css';

function App() {
  return (
    <AuthState>
      <WritingState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="containerOuter">
              <div className="containerInner">
                <Alerts />
                <Routes>
                  <Route path="/" element={<PrivateRoute component={Home} />} />
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </AlertState>
      </WritingState>
    </AuthState>
  );
}

export default App;
