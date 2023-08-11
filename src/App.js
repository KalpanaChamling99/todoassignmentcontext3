
import React,{ useState,useEffect,useContext } from 'react';
import  MovieContext  from './store/context';
import './App.css';
import MovieList from './components/MovieList';

const  App = () => {
  const [moviename,setMovieName] = useState('');
  const  { addMovie } = useContext(MovieContext);

  const handleAddMovie = () => {
    addMovie(moviename);
    setMovieName('');
  }
 
  return (
    <div className="App">
      <div>
        <input 
          type="text" 
          placeholder="enter movie name" 
          value={moviename}
          onChange={(e)=>setMovieName(e.target.value)}
        />
      </div>
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList />
    </div>
  );
}

export default App;
