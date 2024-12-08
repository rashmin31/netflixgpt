import { BG_IMAGE, BG_IMAGE_SET } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
        <div className="absolute -z-10">
            <img
            src={BG_IMAGE}
            alt="Bg Image"
            srcSet={BG_IMAGE_SET}
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </>
  )
}

export default GptSearch