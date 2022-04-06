import { Button_LoginToPrime } from "./Styles/ButtonTillCheckout";
import styles from "./Styles/Homepage.module.css";
import rectangle12 from "./Images/Rectangle12.png";
import rectangle13 from "./Images/Rectangle13.png";
import rectangle15 from "./Images/Rectangle15.png";
import rectangle16 from "./Images/Rectangle16.png";
import { Navbar1 } from "./Navbar1";
import { Footer1 } from "./Footer1";
import { Link } from "react-router-dom";

import Row from "../Row";
import userrequests from "../Request";
import { BootStrapCarousal } from "./slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
import Banner from "../Banner";

function Homepage() {
  return (
    <>
      <Navbar1 />
      <div className={styles.Home_mainDiv}>
        <div className={styles.Home_mainDiv_flexDiv}>
          <div>
            <img className={styles.Home_img1} src={rectangle12} alt=""></img>
          </div>
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
              Welcome to Prime Video
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
              Join Prime to watch the latest movies and TV Shows and
              award-winning Amazon originals
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>
                Start your 30-day free trial
              </Button_LoginToPrime>
            </Link>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p1}>
              With select credit or debit cards
            </p>
          </div>
        </div>
        <div className={styles.Home_mainDiv_flexDiv1}>
          <div>
            <img className={styles.Home_img2} src={rectangle13} alt=""></img>
          </div>
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
              One membership, many benefits
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
              Your Prime membership now also includes ad-free music along with
              unlimited free, fast delivery on eligible items, exclusive access
              to deals & more.
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>Get started</Button_LoginToPrime>
            </Link>
          </div>
        </div>
        <div className={styles.Home_mainDiv_flexDiv}>
          <div>
            <img src={rectangle15} alt=""></img>
          </div>
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
              Even better with Fire TV Stick
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
              Your Prime membership now also includes ad-free music along with
              unlimited free, fast delivery on eligible items, exclusive access
              to deals & more.
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>Get started</Button_LoginToPrime>
            </Link>
          </div>
        </div>
        <div className={styles.Home_mainDiv_flexDiv1}>
          <div>
            <img src={rectangle16} alt=""></img>
          </div>
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
              Family Friendly
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
              With easy to use Parental Controls and a dedicated kids page,
              enjoy secure, ad-free kids entertainment. Kids can enjoy popular
              TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>Get started</Button_LoginToPrime>
            </Link>
          </div>
        </div>
      </div>

      <BootStrapCarousal />
      <NavbarAfterLogin />

      <Footer1 />
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
  );
}

export { Homepage };
