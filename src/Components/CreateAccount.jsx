import React from 'react';
import logo from './Images/signinLogo.jpg'
import { useRef } from 'react'
import {Link,useNavigate} from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';

export const CreateAccount = () => {
  const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="Popover bottom" style={{
      padding: '10px', textAlign: 'justify', width: 'fit-content', height: 'fit-content', borderRadius: '10px',
    }}>
      <strong style={{padding: '10px',}}>"Keep me Signed in"</strong>
      <hr/>
      Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
      To keep your account secure, use this option only on your personal devices.
    </Popover>
  );
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef1 = useRef(null)
    const passwordRef2 = useRef(null)
    const navigate= useNavigate()
    const submitData = (e) => {
        e.preventDefault();
        if (nameRef.current.value == "" || emailRef.current.value == "" || passwordRef1.current.value == "" || passwordRef2.current.value == "") {
          alert("Please enter data to all feilds!!")
        }
        else if (passwordRef1.current.value.length < 6 || passwordRef2.current.value.length < 6) {
            alert('Password must contain at least 6 characters')
        }
        else if (passwordRef1.current.value != passwordRef2.current.value) {
            alert('Password is not matching')
        }
        
        const details = {
            name: nameRef.current.value, 
            email: emailRef.current.value, 
            password: passwordRef2.current.value
        }
      localStorage.setItem('user-details', JSON.stringify(details))
      if (details.name != "" && details.email != "" && details.password != "") {
        navigate({ pathname: "/login" })
      }

    }
    return (
          <>
            <img style={{width:'200px',height:'fit-content',objectFit:'contain',position:'relative',left:'43.5%'}} src={logo} alt="logo"></img>
            <div class="container" style={{maxWidth: "380px",height:'fit-content',border: "1px solid lightgray",borderRadius:"5px",padding: "20px"}}>
<div class="row">
    <div class="panel panel-primary">
        <div class="panel-body">
            <form class="form">
                <div class="form-group">
                                    <h2 class="h2" style={{paddingBottom:"20px",fontWeight:"400",color: "black"}}>Create account</h2>
                </div>
                <div class="form-group">
                    <label class="control-label" for="signupName" style={{paddingBottom:'10px',fontWeight:'500'}}>Your name</label>
                                    <input id="signupName" type="text" maxlength="50" class="form-control" ref={nameRef }/>
                </div>
                <div class="form-group">
                    <label class="control-label" for="signupEmail" style={{paddingBottom:'10px',fontWeight:'500'}}>Email</label>
                                    <input id="signupEmail" type="email" maxlength="50" class="form-control" style={{ paddingBottom: '10px' }} ref={emailRef }/>
                    
                </div>
                <div class="form-group">
                    <label class="control-label" for="signupPassword" style={{paddingBottom:'10px',fontWeight:'500'}}>Password</label>
                                    <input id="signupPassword" type="password" maxlength="25" class="form-control" placeholder="at least 6 characters" length="20" ref={ passwordRef1}/>
                    <p style={{marginTop:'5px',fontSize:'13.7px',fontWeight:"400",marginLeft:'0'}}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="blue" class="bi bi-info" viewBox="0 0 16 16">
<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>Passwords must be at least 6 characters.</p>
                </div>
                <div class="form-group">
                    <label class="control-label" for="signupPasswordagain" style={{paddingBottom:'10px',fontWeight:'500'}}>Re-enter Password</label>
                                    <input id="signupPasswordagain" type="password" maxlength="25" class="form-control" ref={ passwordRef2}/>
                </div>
                <p class="form-group" style={{fontWeight: "400",
	fontSize: "13px",
                                    lineHeight: "22px"}}>
                                By creating an account, you agree to our <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" style={{color: 'blue'}}>Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496" style={{color: 'blue'}}>Privacy Notice</a>.</p>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" unchecked/>
                    <label class="form-check-label">Keep me signed in.</label>
                    <ButtonToolbar>
                    <OverlayTrigger
                            trigger="click"
                            rootClose
      placement="top"
      overlay={popoverClickRootClose}
    >
      <Button style={{ background:'none', color:'#0f79af',border: 'none', position:'relative',bottom:'26px',left:'140px',fontSize:'12px' }}>Learn</Button>
    </OverlayTrigger>
                    </ButtonToolbar>
</div>
                                <div class="form-group">
                                   <Link to="/login"><button onClick={submitData} id="signupSubmit" type="submit" class="btn btn-info btn-block" style={{
                                        margin: "20px 0 20px 0", width: '338px',fontWeight:'400',fontSize:'14px',background:'#f77d0099',border:'1px solid #f77d0099'
                                    }}>Create your Amazon account</button></Link>
          </div>
        </form>
      </div>
    </div>         
  </div>
</div>
                <div className="footerBox" style={{marginTop: "10px",
	background: "linear-gradient(180.47deg,rgba(196, 196, 196, 0.2) 0.41%,rgba(233, 228, 228, 0.2) 0.42%,rgba(250, 243, 243, 0) 99.59%"}}>
                <div className="conditions" style={{
                    width: "350px",
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "39%",fontSize: "13px",
                    lineHeight: "12px",
                    color: "#6366c4"}}>
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div>
                <p className="copyRight" style={{fontWeight: "300",
	fontSize: "13px",
	lineHeight: "12px",
	color: "#222222",
	marginLeft: "45%",position: "relative",right: "40px"}}>
                        &#169;1996-2021, Amazon.com, Inc. or its affilates
                    </p>
          </div>
          </div>
            
    </>
    )
}

