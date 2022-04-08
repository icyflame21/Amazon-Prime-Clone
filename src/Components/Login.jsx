import React from 'react';
import logo from './Images/signinLogo.jpg'
import { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../Redux/action";
import { useDispatch } from "react-redux";

export const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const details = JSON.parse(localStorage.getItem('user-details'));
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const handlelogin = (e) => {
        e.preventDefault();
        dispatch(isAuth(true));
        const{email,password} = details
        if (emailRef.current.value === email && passwordRef.current.value === password) {
            alert('Login successful')
            navigate('/')
        }
        else {
            alert("Login failed")
            navigate('/signin')
        }
    }



    // const checkData = (e) => {
    //     e.preventDefault();
    //     const{email,password} = details
    //     if (emailRef.current.value === email && passwordRef.current.value === password) {
    //         alert('Login successful')
    //         navigate({pathname:"/"})
    //     }
    //     else {
    //         alert("Login failed")
    //   navigate({pathname:"/signin"})
    //     }
    // }
  


    return (
        <>  
            <img style={{width:'200px',height:'fit-content',objectFit:'contain',position:'relative',left:'43.5%',paddingTop:'60px'}} src={logo} alt="logo"></img>
            <div class="container" style={{maxWidth: "350px",height:'fit-content',border: "1px solid lightgray",borderRadius:"5px",padding: "20px"}}>
<div class="row">
    <div class="panel panel-primary">
        <div class="panel-body">
            <form class="form" onSubmit={handlelogin}>
                <div class="form-group">
                                    <h2 class="h2" style={{paddingBottom:"20px",fontWeight:"400",color: "black"}}>Log In</h2>
                </div>
                <div class="form-group">
                    <label class="control-label" for="signupEmail" style={{paddingBottom:'10px',fontWeight:'500'}}>Email</label>
                                    <input id="signupEmail" type="email" maxlength="50" class="form-control"  />
                    
                </div>
                <div class="form-group">
                <label class="control-label" for="signupPassword" style={{paddingBottom:'10px',fontWeight:'500'}}>Password</label>
                <input id="signupPassword" type="password" maxlength="25" class="form-control" length="20" />
                </div>

                <div class="form-group">
                                   <Link to="/homepage"><button id="signupSubmit" type="submit" class="btn btn-info btn-block" style={{margin: "20px 0 20px 0", width: '306px',fontWeight:'400',fontSize:'14px',background:'#f77d0099',border:'1px solid #f77d0099'}}>LOG IN</button></Link> 
                </div>
                <p class="form-group" style={{fontWeight: "400",
	fontSize: "13px",
	lineHeight: "22px"}}>By creating an account, you agree to our <a href="" style={{color: "blue"}}>Terms of Use</a> and our <a href="#" style={{color: "blue"}}>Privacy Policy</a>.</p>
                <hr/>
            </form>
        </div>
    </div>         
                </div>
            </div>
                <div className="footerBox" style={{marginTop: "70px",
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

