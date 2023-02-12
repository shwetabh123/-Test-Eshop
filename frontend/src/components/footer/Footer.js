import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {

  return( 

  
  <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
           
          </div>
          {/* Column2 */}
          <div className="col">
           
          
          </div>
          {/* Column3 */}
          <div className="col">
           
            <ul className="list-unstyled">
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                 </NavLink>
                 </li>
             
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved |
          
          </p>
        </div>
      </div>
    </div>
  );
   

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
    
               


  }

export default Footer;