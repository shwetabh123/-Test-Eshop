import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {

  return( 

    <div className={styles.footer} >
   
   <div style={{ margin: '10px' }}>
    <NavLink to="/aboutus"  style={{color:"green"}} >
        About Us
    </NavLink>
    </div>


    <div style={{ margin: '10px' }}>
    <NavLink to="/contact"  style={{color:"green"}} >
        Contact Us
    </NavLink>
    </div>


    
<div style={{ margin: '10px' }}>
    <NavLink to="/privacypolicy"  style={{color:"green"}} >
      Privacy Policy
    </NavLink>
</div>


<div style={{ margin: '10px' }}>
    <NavLink to="/termsofservice" style={{color:"green"}}>
       Terms & Conditions
    </NavLink>
</div>

     
    <div style={{ margin: '10px' }}>
    <NavLink to="/cancellationrefund"  style={{color:"green"}} >
       Returns & Refunds
    </NavLink>
    </div>
   


&copy;  {year} All Rights Reserved 
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