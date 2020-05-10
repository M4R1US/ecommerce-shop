import React from 'react';
import {ReactComponent as Logo} from "../../assets/github.svg";

import "./footer.styles.scss"

const Footer = () => (
 <div className="footer-container">
   <span className="information">www.fictive.store</span>
   <div className="information">
     <a href="https://www.github.com/M4R1US">
       <Logo/>
        <span>M4R1US</span>
     </a>
   </div>
 </div>
);

export default Footer;