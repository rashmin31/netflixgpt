import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularPlayingMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies();  
  usePopularPlayingMovies();

  return (
    <div className="">
      <Header />
      {
        /**
         * MainContainer
         *  - VideoBackground
         *  - VideoTitle
         * SecondaryContainer
         *  - MovieList * n
         *    - cards * n
         */
      }
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
