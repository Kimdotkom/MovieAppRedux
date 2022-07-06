import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import {useSelector} from 'react-redux'


function MovieList({inputSearch}) {

  const movies = useSelector((state) => state.moviesData);
 

  return (
    <div>
      <div  className="movielist">
        
      {movies
        .filter(
          (movie) =>
            movie.title
              .toUpperCase()
              .includes(inputSearch.toUpperCase().trim()) 
        )
        .map((el) => (
          <MovieCard movie={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
