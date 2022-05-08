import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import "./Styles/NavbarAfterLogin.css";
import DropdownNav from "./DropdownNav";

let API_KEY = "21f03053e26ab7eff71356d94e8eaca7";
var listresult = document.querySelector(".resultsList");
let IMG_URL = "https://image.tmdb.org/t/p/w500/";
const NavbarAfterLogin = () => {
  const [text, setText] = React.useState("");
  let token = 0;
  const debounce = (e) => {
    setText(e.target.value);
    clearTimeout(token);
    if (e.target.value.trim().length === 0) {
      return;
    }
    token = setTimeout(() => {
      searchShow(text);
    }, 250);
  };

  async function searchShow(query) {
    var res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    var data = await res.json();
    console.log(data.results);
    Render_results(data.results);
  }

  function Render_results(result) {
    listresult.innerHTML = "";
    result.forEach((movie) => {
      const { title, poster_path } = movie;
      const searchEl = document.createElement("div");
      searchEl.classList.add("resultsList_items");
      searchEl.innerHTML = `<img
      src="${errorImg(poster_path)}"
      alt=""
    />
    <div class="Searchinfo">
      <h3>${title}</h3>
    </div>`;
      listresult.appendChild(searchEl);
    });
  }

  function errorImg(banner) {
    if (banner === null) {
      return "https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg";
    } else return IMG_URL + banner;
  }

  return (
    <>
      <div className="header">
        <div className="iconDiv">
          <img
            src="https://cdn2.downdetector.com/static/uploads/logo/Amazon_Prime_Video_logo.png"
            alt=""
            className="primeIcon"
          />
        </div>
        <div>
          <div className="navBarDiv">
            <div className="navLinks">
              <a
                href="/movies"
                style={{
                  color: "rgba(242, 244, 246, 0.9)",
                  textDecoration: "none",
                }}
              >
                <div className="textLink">Home</div>
              </a>
            </div>
            <div className="navLinks">
              <Link
                to={`/tvShows`}
                style={{
                  color: "rgba(242, 244, 246, 0.9)",
                  textDecoration: "none",
                }}
              >
                <div className="textLink">TV Shows</div>
              </Link>
            </div>
            <div className="navLinks">
              <a
                href="/movies"
                style={{
                  color: "rgba(242, 244, 246, 0.9)",
                  textDecoration: "none",
                }}
              >
                <div className="textLink">Movies</div>
              </a>
            </div>
          </div>
        </div>

        <div className="headerAlignEnd">
          <div className="inputOuterDiv">
            <div className="inputDiv">
              <div>
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="Search Movies"
                  onChange={debounce}
                  value={text}
                  spellCheck="false"
                />
                <main className="resultsList"></main>
              </div>
            </div>
          </div>
          <div>
            <AccountCircleOutlinedIcon fontSize="large" className="account" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarAfterLogin;
