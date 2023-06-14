import { useState } from 'react';
import { UpCircleFilled } from '@ant-design/icons';

import classes from './scroll-button.module.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return <UpCircleFilled className={visible ? classes.visible : classes.hidden} onClick={scrollToTop} />;
};

export default ScrollButton;
