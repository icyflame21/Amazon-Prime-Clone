import axios from "./localaxios";
import React, { useEffect, useState } from "react";
import "./css/Banner.css";
import userrequests from "./Request";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState(""); 
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(userrequests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);
  const opts= {
    height:"390px",
    width: "100%",
    playerVars: {
    autoplay:1,
    },
  };
  const handleClick=(movie)=>{
    if(trailerUrl){
         setTrailerUrl('');
    }else{
         movieTrailer(movie?.name || "")
         .then((url)=>{
             const urlParams = new URLSearchParams(new URL(url).search);
             setTrailerUrl(urlParams.get('v'));
         })
           .catch((error) => {
             console.log(error)
             alert(error.message)
           });
    }
}
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.origital_name || movie?.name}
        </h1>

        <div className="banner__buttons">
          <button onClick={()=>handleClick(movie)}>Watch Now</button>
          <button> Watchlist</button>
          <button>Details</button>
        </div>

        <div className="banner__description">
          <p>{movie?.overview}</p>
        </div>
      </div>

      <div className="banner__fade"></div>
    </div>
  );
}

export default Banner;
