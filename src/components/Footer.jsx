import React from 'react';
import footerLogo from "../assets/logo-ski.png"
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
  <aside>
    <img src={footerLogo} alt="" />
    <p className="text-white">
   Contrary to popular belief, Lorem Ipsum is not simply
      <br />
     random text It has piece
    </p>
  </aside>
  <nav className="text-white">
    <h6 className="footer-title ">Services</h6>
    <a className="link link-hover">Store Directory</a>
    <a className="link link-hover">Knowledge Center</a>
    <a className="link link-hover">Insights</a>
    <a className="link link-hover">Advertisement</a>
  </nav>


    <nav className="text-white">
    <h6 className="footer-title ">Location</h6>
  <p> Nexa Haven, Dhaka</p>
    
  </nav>
  
</footer>
    );
};

export default Footer;