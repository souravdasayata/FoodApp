import React from "react";
import {AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Feed Yourself</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Feed Yourself</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <div>
            <a href="https://www.facebook.com/profile.php?id=100003813163046">
                <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com/banti_1991/?hl=en">
                <AiOutlineInstagram />
            </a>
            <a href="https://twitter.com/SouravK54662045">
                <AiFillTwitterCircle />
            </a>
        </div>
      </aside>
      
        







    </footer>
  );
};

export default Footer;