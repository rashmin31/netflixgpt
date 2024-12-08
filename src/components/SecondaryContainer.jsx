import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store?.movies)
  return (
    <div className='bg-black'>
      <div className='mt-0 sm:-mt-40 relative z-20'>
        <MovieList genre={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList genre={"Popular"} movies={movies?.popularMovies}/>
        <MovieList genre={"Trending"} movies={movies?.nowPlayingMovies}/>
        <MovieList genre={"Horror"} movies={movies?.nowPlayingMovies}/>
        <MovieList genre={"Sci-Fi"} movies={movies?.nowPlayingMovies}/>
        {
          /**
           * MovieList - Popular
           *  - MovieCards * n
           * MovieList - Trending
           * MovieList - Now Playing
           * MovieList - Horror
           */
        }
      </div>
    </div>
  )
}

export default SecondaryContainer