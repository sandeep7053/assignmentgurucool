
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Sign from './component/Sign';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exect path='/' element={<Home />} />
            <Route exect path='/login' element={<Sign />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
