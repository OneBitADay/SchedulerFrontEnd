import React from "react";
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";


const socialMediaLinkTwitter = 'google.com';
const socialMediaLinkInstagram = 'google.com';
const socialMediaLinkTiktok = 'google.com';
const linkToRatings = 'google.com';

function Footer() {
    return (
      <div className="footer">
          <section className="footer-left-section">
              <h5>Contact Us</h5>
              <p>Email : temp@gmail.com</p>
              <p>Phone Number : 347 - 333 - 9987</p>
              <p>Location : 6 Gramatan Ave, Mt Vernon, NY 10550</p>
          </section>
          <section className="footer-center-section">
              <h5>Interact With Us</h5>
              <ul>
                  <li>
                      <a href={socialMediaLinkTwitter}>
                      <FaInstagram/>
                      </a>
                  </li>
                  <li>
                      <a href={socialMediaLinkInstagram}>
                          <FaTiktok/>
                      </a>
                  </li>
                  <li>
                      <a href={socialMediaLinkTiktok}>
                          <FaXTwitter/>
                      </a>
                  </li>
              </ul>


          </section>
          <section className="footer-right-section">
              <h5>Review Us</h5>
              <p> If you've enjoyed our services, let's spread the word! We'd appreciate it!</p>
              <a href={linkToRatings}>
                  <MdOutlineRateReview />
              </a>
          </section>
      </div>
    );
}

export default Footer;