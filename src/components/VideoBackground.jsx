import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {

    const getMovieVideos = async() => {
       const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
       const json = await data.json()
       console.log(json.results);

       const filterTrailer = json.results.filter((video) => video.type === "Trailer")
       const trailer = filterTrailer.length ?  filterTrailer[0] : json.results[0]
       console.log(trailer)

    }

    useEffect(()=> {
        getMovieVideos();
    }, [])
  return (
    <div> {} </div>
  )
}

export default VideoBackground