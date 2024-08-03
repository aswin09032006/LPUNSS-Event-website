import { IonIcon } from '@ionic/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { callOutline, logoInstagram, logoLinkedin, mailOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import './footer.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <motion.ul
        className="social-icon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/company/lpunss/">
            <IonIcon icon={logoLinkedin} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com/unit_prabhat">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="mailto:prabhat24lpunss@gmail.com">
            <IonIcon icon={mailOutline} className="contact-icon" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="tel:+918610590584">
            <IonIcon icon={callOutline} className="contact-icon" />
          </a>
        </li>
      </motion.ul>
      <motion.ul
        className="menu"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
      >
        <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="/about">About</a></li>
        <li className="menu__item"><a className="menu__link" href="/sponsors">Sponsors</a></li>
        <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>
      </motion.ul>
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &copy;2024 Run for Equality | LPUNSS
      </motion.p>
    </footer>
  );
}

export default Footer;
