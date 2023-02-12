import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {

  return( 

    <Box>
    <h1 style={{ color: "green", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      www.onlinedmart.com
    </h1>
    <Container>
      <Row>
       
        <Column>
          <Heading>Contact Us</Heading>
          <NavLink to="/contact" className={activeLink}>
                 Contact Us
                 </NavLink>
      
        </Column>
        <Column>
          <Heading> Cancellation & refund</Heading>
          <FooterLink href="/cancellationrefund"> Cancellation & refund</FooterLink>
   
        </Column>
        <Column>
          <Heading> Terms of service</Heading>
          <FooterLink href="/termsofservice"> Terms of service</FooterLink>
   
        </Column>

        <Column>
          <Heading>Privacy Policy</Heading>
          <FooterLink href="/privacypolicy"> Privacy Policy</FooterLink>
   
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Twitter
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
                Youtube
              </span>
            </i>
          </FooterLink>

          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved |
          
          </p>
        </Column>
      </Row>
    </Container>
  </Box>
);
};


   

              //   <NavLink to="/contact" className={activeLink}>
              //     Contact Us
              //    </NavLink>
           
              //  <NavLink to="/cancellationrefund" className={activeLink}>
              //    Cancellation & refund
              //    </NavLink>
             
              //   <NavLink to="/termsofservice" className={activeLink}>
              //    Terms of service
              //    </NavLink>
             
              //    <NavLink to="/privacypolicy" className={activeLink}>
              //    Privacy Policy
              //    </NavLink>
           
{/*             

              
               &copy;  {year} All Rights Reserved */}
    
               


  

export default Footer;