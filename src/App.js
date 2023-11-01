import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navigation from './components/Navigation';
import MovieTrailer from './components/MovieTrailer';
import TvTrailer from './components/TvTrailer';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieTrailer/>} />
        <Route path="/tvseries/:id" element={<TvTrailer/>} />
      </Routes>
    </div>
  );
}

export default App;
