import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 p-4 flex justify-between">
        <NavLink to={'/'} className="text-white text-3xl">
          Movie App
        </NavLink>
        <NavLink to={'/about'} className="text-white text-3xl">
          About
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
