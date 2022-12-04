import React, { useRef, useEffect, useState } from 'react';
import classes from './Header.module.css';

const Header = () => {
  const headerRef = useRef();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = headerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(entry.intersectionRatio < 1);
    }, { threshold: [1] });

    observer.observe(header);
  });

  return (
    <section ref={headerRef} className={`${classes.headerContainer} ${isSticky ? classes.sticky : ''}`}>
      <header className={classes.headerBackground}>
        Header
      </header>
    </section>
  );
};

export default Header;
