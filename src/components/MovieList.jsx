import React,{useContext,useEffect} from "react";
import MovieContext from "../store/context";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);
  if( movieList.length === 0 ){
    return <p>No movies</p>
  }
  return(
    <>
     <h2>Movie List</h2>
      <ul>
        {movieList.map((moviename,index)=>(
          <li key={index}>{moviename}</li>
        ))}
      </ul>
    </>
  )
}
export default MovieList;

