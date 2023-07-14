import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import About from './components/About'
import Data from './components/Data'
// import GetData from './components/GetData'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Data />
        {/* <GetData /> */}
      </div>
    </Router>
  );
}

export default App;
