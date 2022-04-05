import React from "react";
import axios from "./localaxios.js";
import "./css/row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  console.log(fetchURL);
  const [movies, setmovies] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several posters */}
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
            <p className="row__poster">{movie.title}</p>
          </>
        ))}
      </div>

      {/* conatiner -> posters */}
    </div>
  );
}

export default Row;
