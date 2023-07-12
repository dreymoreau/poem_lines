import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import About from './components/About'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
