import MovieCard from "./MovieCard"
import PropTypes from "prop-types";

const MovieList = ({genre, movies}) => {
  return (
    <div className="px-6">
        <h1 className="text-lg sm:text-3xl py-4 text-white">
            {genre}
        </h1>
        <div className="flex  overflow-x-scroll scrollbar-none">
            <div className="flex">
                {movies?.map(({id, poster_path}) => <MovieCard key={id} posterPath={poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;

MovieList.propTypes = {
    genre: PropTypes.string.isRequired,
    movies: PropTypes.array
}
