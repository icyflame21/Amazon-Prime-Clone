import { Button_LoginToPrime } from "./Styles/ButtonTillCheckout";
import React from "react";
import styles from "./Styles/Homepage.module.css";
import liongateimg from "./Images/LionsgatePlay-426X2946_V1.jpg";
import discoveryimg from "./Images/426x294_Discovery.jpg";
import erosnow from "./Images/Erosnow-426X2948_V1.jpg";
import hoicimg from "./Images/hoichoi-426X2946_V1.jpg";
import docubay from "./Images/Docubay-426X2947_V1.jpg";
import shortstv from "./Images/ShortsTV-426X2944_V1.jpg";
import mubi from "./Images/Mubi-426X2946_V1.jpg";
import manorama from "./Images/426x294_MANORAMAMAX.jpg";
import hayu from "./Images/Hayu_logo_for_MLP_Grid.jpg";
import rectangle12 from "./Images/Rectangle12.png";
import rectangle13 from "./Images/Rectangle13.png";
import rectangle15 from "./Images/Rectangle15.png";
import rectangle16 from "./Images/Rectangle16.png";
import { Footer1 } from "./Footer1";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin";

function HomepageAfter() {
  return (
    <>
      <NavbarAfterLogin />
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
            <Link to="/payment_page">
              <Button_LoginToPrime>
                Start your 30-day free trial
              </Button_LoginToPrime>
            </Link>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p1}>
              With select credit or debit cards
            </p>
          </div>
        </div>
        <div className={styles.Home_mainDiv_flexDiv_ninegrid}>
         
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
            Your favorite channels all in one place
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
            With Prime Video Channels, find shows and movies from your
              favorite channels all in one place. Enjoy with an add-on
              subscription to Channels of your choice
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>Get started</Button_LoginToPrime>
            </Link>
          </div>
          <div className="ninegrid">
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={liongateimg} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={discoveryimg} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={erosnow} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={hoicimg} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={docubay} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={shortstv} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={mubi} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={manorama} alt=""></img>
            <img style={{width: '210px', height: '150px',objectFit:'contain',marginRight:'10px',marginBottom:'10px'}} src={hayu} alt=""></img>
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
      <Footer1 />
    </>
  );
}

export { HomepageAfter };
