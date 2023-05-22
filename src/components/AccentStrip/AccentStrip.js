import React from 'react';

import styles from './AccentStrip.module.css';

const AccentStrip = ({
                           children,
                           className = '',
                           ...delegated
                         }) => {
  return (
    <div
      className={`${styles.coloredAccentStrip} ${className}`}
      {...delegated}
    >
      {children}
    </div>
  );
};

export default AccentStrip;
