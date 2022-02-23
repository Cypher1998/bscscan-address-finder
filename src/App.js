import Navbar from './components/Navbar';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BscState from './context/bscContext';

function App() {
  return (
    <>
      <BscState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="address/:text" element={<User />} />
              <Route path="notfound" element={<NotFound />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </BscState>
    </>
  );
}

export default App;
