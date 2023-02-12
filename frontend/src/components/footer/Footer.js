import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {

  return( 
 <div className={styles.footer}>
  
          <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright
                   
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()}  All Rights
                        Reserved.
                    </span>
             
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact Us
                        </NavLink>
                    </div>

                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                 </NavLink>
           
               <NavLink to="/cancellationrefund" className={activeLink}>
                 Cancellation & refund
                 </NavLink>
             
                <NavLink to="/termsofservice" className={activeLink}>
                 Terms of service
                 </NavLink>
             
                 <NavLink to="/privacypolicy" className={activeLink}>
                 Privacy Policy
                 </NavLink>
           
{/*             

              
               &copy;  {year} All Rights Reserved */}
               </span>
               </div> 

               </div>
  );
   
  }

export default Footer;