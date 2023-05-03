import './App.css';
import {
  Route, Link, Routes,
}
  from 'react-router-dom';
import Quote from './components/Quote';
import HomePage from './views/HomePage';
import CalculatorPage from './views/CalculatorPage';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo"><Link to="/">Math Magicians</Link></div>
        <ul className="navbarItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
