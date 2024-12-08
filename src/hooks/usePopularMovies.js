import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store?.movies?.popularMovies);

  const getPopularPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularPlayingMovies();
  }, []);
};

export default usePopularPlayingMovies;
