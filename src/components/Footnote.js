import React from "react";
import { FaInstagram, FaSpotify, FaMedium, FaGithub, FaRegEnvelope } from 'react-icons/fa';

// https://react-icons.github.io/react-icons - used Font Awesome icons from this library for the footnote links

function Footnote() {
  return (
    <div id="icons">
      <a href="https://www.instagram.com/derek_araujo/" className="icon"> <FaInstagram /> </a>
      <a href="https://open.spotify.com/artist/0RW4vRpFksiQDl8gXO7NPI?si=QccPTEkFTl6JPrMEPPJm8Q" className="icon"> <FaSpotify /> </a>
      <a href="https://medium.com/@derekaraujo19" className="icon"> <FaMedium /> </a>
      <a href="https://github.com/derekaraujo19" className="icon"> <FaGithub /> </a>
      <a href="mailto:derekaraujo19@gmail.com" className="icon"> <FaRegEnvelope /> </a>

    </div>
  );
}

export default Footnote;