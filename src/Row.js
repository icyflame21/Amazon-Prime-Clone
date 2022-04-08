import React from "react";
import axios from "./localaxios.js";
import "./css/row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  const [movies, setmovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState(""); 
  
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts= {
    height:"390px",
    width:"100%",
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
    <>
      <div className="rows">
      {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
        <h2 style={{ color: "white;" }}>{title}</h2>

        <div className="container">
          {/* several posters */}

          {movies.map((movie) => {
            return (
              <div className="card">
                <div classname="image">
                  <img
                    className="timeWaster"
                    onDoubleClick={()=>handleClick(movie)}
                    key={movie.id}
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}
                  />
                </div>

                <div className="content">
                  <i class="fa-solid fa-play">&nbsp;&nbsp;&nbsp; Play</i>

                  {movie.original_name ? (
                    <p> {movie.original_name} </p>
                  ) : (
                    <p>Lorem ipsum.</p>
                  )}
                  {movie.first_air_date ? (
                    <p> {movie.first_air_date} </p>
                  ) : (
                    <p>Lorem ipsum.</p>
                  )}
                </div>
              </div>
            );
            // <p className="row__poster">{movie.title}</p>
          })}
        </div>
      </div>

      {/* conatiner -> posters */}
    </>
  );
}

export default Row;
