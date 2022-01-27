import React from 'react';
import footer_style from './Footer.module.css';

function Footer() {
  return(
      <div className={footer_style.footer}>
        <p> © 2021-2022 Created by Mehedi Hasan. Content is available under these licenses.</p>
        <p>Copyright by : <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHWPGmXGBPFXHRPvvrzbfcDlgRfvdKrcKjhLmnTPpnPqbRKZRtNFtTzsbXzJdcvphCJfk" alt='mehedihasan'>Mehedihasansumit@gmail.com</a></p>
      </div>
  )
}

export default Footer;
