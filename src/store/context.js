import React,{ createContext } from 'react';

const MovieContext = createContext({
  movieList: [],
  addMovie: (moviename)=>{}
});
export default MovieContext;

