import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
    <NavLink to="/cancellationrefund">
       Cancellation & refund
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/contact" >
        Contact
    </NavLink>
</div>


<div style={{ margin: '10px' }}>
    <NavLink to="/termsofservice" 
      >
       Terms of service
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/privacypolicy" >
      Privacy Policy
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