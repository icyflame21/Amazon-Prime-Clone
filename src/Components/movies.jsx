import React from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import userrequests from "../Request";
import { BootStrapCarousal } from "./Slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
import Banner from "../Banner";
import '../css/movies.css'

export function Movies() {
    return (
        <>
            <NavbarAfterLogin />
            <BootStrapCarousal />
            <Banner />
            <Row
        title="Continue Watching"
        fetchURL={userrequests.fetchNetflixOriginals}
      />
      <Row title="Recommended movies" fetchURL={userrequests.fetchTrending} />
      <Row title="Top Rated" fetchURL={userrequests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies} />
      <Row title="Comedy Moview" fetchURL={userrequests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies} />
      <Row title="Romatic Moview" fetchURL={userrequests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries} />
        </>
    )
}