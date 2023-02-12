import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {
  return( 
  <div className={styles.footer}>&copy;
  
  
  <nav>
            <ul >
            <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/cancellationrefund" className={activeLink}>
                Cancellation & refund
                </NavLink>
              </li>
              <li>
                <NavLink to="/termsofservice" className={activeLink}>
                Terms of service
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacypolicy" className={activeLink}>
                Privacy Policy
                </NavLink>
              </li>
           
              </ul>
              </nav>

              
   {year} All Rights Reserved</div>
  );
};

export default Footer;