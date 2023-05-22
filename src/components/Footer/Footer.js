import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  console.log('footerLink', styles.footerLink);
  return (
    <footer className={styles.footer}>
      All character assets taken from{' '}
      <a
        className={styles.footerLink}
        href="https://www.openpeeps.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Peeps
      </a>
      , by Pablo Stanley
    </footer>
  );
};

export default Footer;
