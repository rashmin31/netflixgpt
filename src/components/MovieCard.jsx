import { IMG_CDN } from "../utils/constants"
import PropTypes from 'prop-types'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 sm:w-48 pr-4">
        <img 
            alt="Movie Card" 
            src={IMG_CDN + posterPath}
        />
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
    posterPath: PropTypes.string.isRequired
}