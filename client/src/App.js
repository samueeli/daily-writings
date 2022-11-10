import { Navbar } from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import './App.css';

import WritingState from './context/writing/WritingState';
import Home from './components/pages/Home';

function App() {
  return (
    <WritingState>
      <Router>
        <Navbar />
        <div className="containerOuter">
          <div className="containerInner">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WritingState>
  );
}

export default App;
