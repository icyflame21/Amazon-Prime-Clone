import {
    Button_LoginToPrime,
    Button_getStarted,
    Button_getPrimePerMonth,
    Button_continueAtPayment,
} from './Styles/ButtonTillCheckout'
import styles from './Styles/Homepage.module.css'
import rectangle12 from "./Images/Rectangle12.png";
import rectangle13 from "./Images/Rectangle13.png";
import rectangle15 from "./Images/Rectangle15.png";
import rectangle16 from "./Images/Rectangle16.png";

import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
        <div className={styles.Home_mainDiv}>
            <div className={styles.Home_mainDiv_flexDiv}>
                <div>
                    <img className={styles.img1} src={rectangle12}></img>
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
                    <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p1}>With select credit or debit cards</p>
                </div>
            </div>
            <div className={styles.Home_mainDiv_flexDiv1}>
                <div>
                    <img src={rectangle13}></img>
                </div>
                <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                    <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                    One membership, many benefits
                    </h1>
                    <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                    Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.
                    </p>
                    <Link to="/signin">
                        <Button_LoginToPrime>Get started</Button_LoginToPrime>
                    </Link>
                </div>
            </div>
            <div className={styles.Home_mainDiv_flexDiv}>
                <div>
                    <img src={rectangle15}></img>
                </div>
                <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                    <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                        Even better with Fire TV Stick
                    </h1>
                    <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                    Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.
                    </p>
                    <Link to="/signin">
                        <Button_LoginToPrime>Get started</Button_LoginToPrime>
                    </Link>
                </div>
            </div>
            <div className={styles.Home_mainDiv_flexDiv1}>
                <div>
                    <img src={rectangle16}></img>
                </div>
                <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                    <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                    Family Friendly
                    </h1>
                    <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                    With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
                    </p>
                    <Link to="/signin">
                        <Button_LoginToPrime>Get started</Button_LoginToPrime>
                    </Link>
                </div>
            </div>
            </div>
        </>
    );
  }
  
  export { Homepage };
  