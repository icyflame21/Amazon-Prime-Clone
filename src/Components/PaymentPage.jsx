import React from "react";
import "./Styles/PaymentPage.css";
import logo from "./Images/amazonLogo.png";
import visa from "./Images/visa.png";
import rupay from "./Images/rupay.png";
import mastercard from "./Images/mastercard.png";
import discover from "./Images/discover.png";
import raamRaavan from "./Images/raamRaavan.png";
import actionAndAdventure from "./Images/actionAndAdventure.png";
import Ellipse6 from "./Images/Ellipse6.png";
import { Footer1 } from "./Footer1";
import { Button_continueAtPayment } from "./Styles/ButtonTillCheckout";
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";

export const PaymentPage = () => {
    const popoverClickRootClose = (
        <Popover id="popover-trigger-click-root-close" title="Popover bottom">
          <strong>&nbsp;&nbsp;Enter Your Credit Card Details correctly &nbsp;&nbsp;to enjoy the experience&nbsp;&nbsp;</strong> 
        </Popover>
      );
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div className="Navbar">
                <div className="containerNavbar">
                    <div className="leftNavbar">
                        <span className="prime">prime </span>
                        <span className="video">video</span>
                        <br />
                        <img className="amazonLogo" src={logo} alt="" />
                        <p className="watchNow">Watch now,cancel anytime</p>
                        <p className="memberShip">
                            Start your membership today
                        </p>
                    </div>
                    <div className="rightNavbar">
                        <div className="img1Div">
                            <img src={raamRaavan} alt="" />
                        </div>
                        <div className="img2Div">
                            <img src={actionAndAdventure} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: "white" }}>
                <br />
                <div className="info">
                    <span className="i">i</span>
                    <span>
                        Rs129 will be automatically charged every month for your
                        Prime membership.Cancel anytime.
                    </span>
                </div>
                <div className="selectPay">Select a payment method</div>

                <div className="paymentOption">
                    <p>More payment options</p>
                    <hr />
                    <br />
                    <img src={Ellipse6} alt="" />
                    <span>Add Debit/Credit/ATM card</span>
                    <br />
                    <span>! </span>
                    <span>
                        All credit and select debit cards (HDFC, ICICI, Axis and
                        4 others) supported.
                    </span>
                    <ButtonToolbar>
                    <OverlayTrigger
                            trigger="click"
                            rootClose
      placement="top"
      overlay={popoverClickRootClose}
    >
      <Button style={{ background:'none', color:'#0f79af',border: 'none', position:'relative',bottom:'24px',left:'380px',fontSize:'12px' }}>Learn</Button>
    </OverlayTrigger>
                    </ButtonToolbar>
                    <div className="atmCards">
                        <div>
                            <img src={visa} alt="" />
                        </div>
                        <div>
                            <img src={rupay} alt="" />
                        </div>
                        <div>
                            <img src={mastercard} alt="" />
                        </div>
                        <div>
                            <img src={discover} alt="" />
                        </div>
                    </div>
                </div>
                <div className="continue">
                <Link to="/movies">
                    <Button_continueAtPayment>
                        Continue
                        </Button_continueAtPayment>
                </Link>
                </div>
                <div className="PrimeMembership">
                    <p>or</p>
                    <p>Join a 1-year Prime membership.</p>
                    <p>(All electronic payment methods supported </p>
                    <p>including Net banking and Amazon Gift Card.)</p>
                </div>
                <br />
                <br />
            </div>
             <Footer1/>               
        </div>
    );
};
