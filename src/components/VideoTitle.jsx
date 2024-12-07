import PropTypes from 'prop-types'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] absolute px-36 text-white '>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 min-w-40 text-lg  rounded-md hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-500 text-white p-4 min-w-40 m-2 text-lg  rounded-md hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;

VideoTitle.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
}