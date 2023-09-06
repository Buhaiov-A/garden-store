import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.contacts}>
          <div className={s.contacts_item}>
            <h2>Contact</h2>
            <a className={s.phone} href="tel:+499999999999">
              +49 999 999 99 99
            </a>
            <div className={s.soc_networks}>
              <Link
                className={s.icon}
                to={'https://www.instagram.com'}
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 50, color: 'black' }} />
              </Link>
              <Link
                className={s.icon}
                to={'https://www.whatsapp.com/'}
                target="_blank"
              >
                <WhatsAppIcon sx={{ fontSize: 50, color: 'black' }} />
              </Link>
            </div>
          </div>

          <div className={s.contacts_addres}>
            <h2>Addres</h2>
            <Link
              className={s.link}
              target="_blank"
              to="https://www.google.com/search?q=telranDE"
            >
              Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
            </Link>
            <div className={s.schedule}>
              <p>
                {' '}
                Working Hours: <span>24 hours a day</span>
              </p>
            </div>
          </div>
        </div>
        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427798687!2d13.372469777052384!3d52.50793613712219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1693897713060!5m2!1sru!2sde"
            title="tel_ran"
            width="100%"
            height="525px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
