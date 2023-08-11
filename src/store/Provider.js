import { useReducer } from "react";
import MovieContext from './context';

const initialState = {
  movieList: []
}
const movieReducer = (state,action) =>{
  switch(action.type){
    case 'ADD':
      return {
        ...state,
        movieList:[...state.movieList,action.payload]
      }

    default:
      return state;
  }
}

const MovieProvider = (props) =>{
  const [state,dispatchMovieAction] = useReducer(movieReducer,initialState);

  const addMoviehandler = (moviename) => {
    dispatchMovieAction({type:"ADD",payload: moviename});
  }
  const movieCxt = {
    addMovie: addMoviehandler,
    movieList: state.movieList
  }
 
  return(
    <MovieContext.Provider value= {movieCxt}>
      {props.children}
    </MovieContext.Provider>
  )
}
export default MovieProvider;
