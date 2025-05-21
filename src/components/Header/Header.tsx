import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
  const [detached, setDetached] = useState<boolean>(false);
  const [folded, setFolded] = useState<boolean>(true);

  useEffect(() => {
    const detectScrolling = () => {
      setDetached(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', detectScrolling);

    return () => window.removeEventListener('scroll', detectScrolling);
  }, []);

  return (
    <div className={cx('nav-cover', { detached })}>
      <nav className={cx('nav')}>
        <div className={cx('brand-name')}>
          <a href="/">El Huerto</a>
        </div>
        <div className={cx('fold-cover')}>
          <FontAwesomeIcon
            className={cx('fold-btn')}
            icon={folded ? faBars : faTimes}
            size={'2x'}
            onClick={() => setFolded(!folded)}
          />
        </div>
        <div className={cx('nav-items', { folded })}>
          <ul>
            <li className={cx('active')}><a href='#home'>Inicio</a></li>
            <li><a href='#about'>Info</a></li>
            <li><a href='#contact'>Contacto</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};