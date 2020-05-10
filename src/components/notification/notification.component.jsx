import React from 'react';

import "./notification.styles.scss"

import {ReactComponent as Logo} from "../../assets/warning.svg";

const Notification = ({message}) => (
 <div className="notification-container" >
   <Logo className="notification-logo"/>
   <div>
     <span className="info-message">{message}</span>
   </div>
 </div>
);

export default Notification;