import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { YOUTUBE_EMBED } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  console.log("trailer: ", trailer)
  useMovieTrailer(movieId);

  console.log("url: ", YOUTUBE_EMBED + trailer?.key + "&autoplay=1&mute=1")
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_EMBED + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};