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

    <div style={{
      display: "flex",
      background: 'black',
      padding: '5px 0 5px 5px',
      fontSize: '20px'
  }}>
    <div style={{ margin: '10px' }}>
    <NavLink to="/cancellationrefund" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
       Cancellation & refund
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/contact" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
        Contact
    </NavLink>
</div>
</div>

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