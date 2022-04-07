import axios from "./localaxios";
import React, { useEffect, useState } from "react";
import "./css/Banner.css";
import userrequests from "./Request";
function Banner() {
  const [movie, setMovie] = useState([]);

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
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.origital_name || movie?.name}
        </h1>

        <div className="banner__buttons">
          <button>Watch Now</button>
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
