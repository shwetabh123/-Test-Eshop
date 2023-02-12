import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
const date = new Date();
const year = date.getFullYear();


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Footer = () => {
  return( 
 <div className={styles.footer}>
  
  <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>


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
{/*             

              
               &copy;  {year} All Rights Reserved */}
              
               </nav>
               </div> 
  );
   
  }

export default Footer;