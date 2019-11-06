import React, { Component} from "react";
import styled from 'styled-components';
import { ScrollPage, Section } from 'react-scrollpage';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';


import  {
        Container,
        SignInformation,
        FirstContainer,
        FirstStatue,
        NavBarContainer,
        NavEmail,
        NavPassword,
        NavSubmitButton,
        NameInput,
        LastInput,
        EmailInput,
        IntroMain, 
        IntroSec,
        SubmitButton
        } from "../LandingCss/FirstSection";


  import {

          SecondContainer,
          SecondPageHead,
          SecondPageDescrip,
          SeperationDiv,
          SecondLogin, 
          SecondPassword, 
          SecondPageLogin,
          SecondNavBarContainer, 
          SecondBottomNav, 
          SecondPageStatue

        } from "../LandingCss/SecondSection";


class LLanding extends Component {

  constructor(props){

    super(props);

    this.state = {

      firstname:"",
      lastname:"",
      email:"",
      password:"",
      username:""
    };

  }


   handleSignupClick = () =>{

  
    var firstN= document.getElementById("Name").value;
    var lastN= document.getElementById("LastName").value;
    var emailFirst= document.getElementById("Email").value;



    if(firstN==null || lastN==null || emailFirst==null){
      console.log("Value(s) are null");
    }
    else{

    this.setState({

      firstname: firstN,
      lastname: lastN,
      email: emailFirst

      });
    }

  }


  handleLoginClick = () =>{

    var loginusername= document.getElementById("LoginId").value;
    var loginpassword= document.getElementById("LoginPassword").value;



    if(loginusername==null || loginpassword==null){

      console.log("Value(s) are null")
    }
    else{

      this.setState({

        username: loginusername,
        password: loginpassword

      });

    }

  }

render(){

 const options = {
      curPage: 1,           // inital page number, most 1
      totalPage: 2,         // totoal page number
      delay: 1200           // delay between two scoll animation
    }

  return (
   
    <ScrollPage {...options}>
     <Container>

         <Section>
              <FirstContainer>

                  <NavBarContainer>

                    <NavEmail id="LoginId" placeholder="Email"></NavEmail>
                    <NavPassword id="LoginPassword" placeholder="Password"></NavPassword>
                    <NavSubmitButton onClick = {() =>  this.handleLoginClick()} to="/profile">Login </NavSubmitButton>
                  </NavBarContainer>

                  <FirstStatue></FirstStatue>

                  <IntroMain>

                    Built For Students
                  </IntroMain>

                  <IntroSec>
                    The first platform that allows students who have employees to connect with one another
                  </IntroSec>

                  <SignInformation>

                          <NameInput id="Name" placeholder="Firstname"></NameInput>


                          <LastInput id ="LastName" placeholder="Lastname"></LastInput>

                          <EmailInput id ="Email" placeholder="Email" ></EmailInput>

                          <SubmitButton information = { this.state.firstname } onClick ={() => this.handleSignupClick()} to="/signup"> Sign Up  </SubmitButton>

                    </SignInformation>
              </FirstContainer>
              </Section>

              <Section>
              <SecondContainer>

                    <SeperationDiv></SeperationDiv>

                    <SecondPageStatue></SecondPageStatue>
                    

                    <SecondPageHead>

                      Why connect?

                    </SecondPageHead>

                    <SecondPageDescrip>

                          The purpose of this website is to allow students to connect with other students who are in small companies 


                    </SecondPageDescrip>
                    <SecondBottomNav>

                      <SecondLogin name="SecondPageLogin" placeholder="Username"></SecondLogin>

                      <SecondPassword name="SecondPagePassword" placeholder="Password"></SecondPassword>

                      <SecondPageLogin name="SecondPageLogin" to="/profile">Login</SecondPageLogin>

                    </SecondBottomNav>

                    
                </SecondContainer>
          </Section>


            </Container>
        </ScrollPage> 

    );
  }
}

export default LLanding;