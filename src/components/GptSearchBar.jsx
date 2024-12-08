import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstansts";
import { useRef } from "react";
import openaiClient from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef();

  const dispatch = useDispatch();

  //Search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + 
      movieName + 
      "&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json()

    return json.results;
  }

  const handleGptSearchClick = async () => {
    //Make an api call to open API and get movie results

      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + 
        searchText.current.value + 
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example 'Chello Divas', 'Passport'";
      const gptResults = await openaiClient.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      
      if(gptResults.choices[0]) {
        //TODO: need to handle Error here
      }

      console.log("gptResults: ", gptResults?.choices[0]?.message?.content)

      const gptMovies = gptResults?.choices[0]?.message?.content?.split(",")

      //For ecah movie search in TMDB API
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))

      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames: tmdbResults, movieResults: tmdbResults}))
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-lg"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9 rounded-lg"
          ref={searchText}
        />
        <button 
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
