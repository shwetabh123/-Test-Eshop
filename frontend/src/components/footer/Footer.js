import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

    <MDBFooter className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>


      <section className=''>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
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
          </MDBCol>

        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    &copy;  {year} All Rights Reserved   
      <a className='text-white' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
    </MDBFooter>
);
}
   {/* <div className={styles.footer}>
  
  
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
            

              
               &copy;  {year} All Rights Reserved
              
               </nav>
               </div> */}
   


export default Footer;