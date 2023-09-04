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
                to={'https://www.instagram.com/telran.de/'}
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 50, color: 'black' }} />
              </Link>
              <Link className={s.icon} to={'/'} target="_blank">
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
            title="tel_ran"
            width="100%"
            height="525px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785%20Berlin+(tel_ran)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
