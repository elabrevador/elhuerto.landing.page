import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import bgImg from "../../resources/main.png";

const cx = classNames.bind(styles);

export const Home = () => {
    return (
        <div className={cx('home')}>
      <div
        className={cx('bg')}
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className={cx('intro')}>        
        <h1>
          "Hoy podrás cultivar auténticos alimentos de Km 0"
        </h1>        
      </div>
    </div>
    )
}