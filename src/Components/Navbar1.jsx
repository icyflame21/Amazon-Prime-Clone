import React from "react";
import styles from "./Styles/Navbar1.module.css";
import Primelogo from "./Images/Primelogo.svg";
import LanguageEnLogo from "./Images/Nav1_Language.svg";
import {Link} from "react-router-dom";
import {Homepage} from './HomepageBeforeLogin'
export const Navbar1 = () => {
  return (
    <div className={styles.nav1_mainDiv}>
      <div className={styles.nav1_leftDiv_primelogo}>
        <Link to={ Homepage}>
          <img className={styles.nav1_img} src={Primelogo} alt="" /></Link>
          
        </div>
      <div className={styles.nav1_rightDiv}>
        <div className={styles.nav1_rightDiv_language}>
          <img className={styles.nav1_img} src={LanguageEnLogo} alt="" />
        </div>
        
        <div className={styles.nav1_rightDiv_signIn}>
          <Link className={styles.nav1_rightDiv_signIn_link} to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
