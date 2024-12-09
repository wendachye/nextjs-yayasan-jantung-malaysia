import Image from 'next/image';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <picture className={styles.logo}>
        <Image fill alt="logo" src="/images/logo.png" sizes="602px" />
      </picture>

      <nav className={styles.nav}>
        <a>About YJM</a>
        <a>Facilities</a>
        <a>Health Articles</a>
        <a>Activities</a>
        <a>Bulletin</a>
        <a>Contact Us</a>
      </nav>

      <div></div>
    </header>
  );
};

export default Header;
