import styles from './styles.module.css';

const HamburgerIcon = () => {
  return (
    <svg
      className={styles.hamburger_icon}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 19V16.6667H22V19H2ZM2 13.1667V10.8333H22V13.1667H2ZM2 7.33333V5H22V7.33333H2Z"
        fill="#990000"
      />
    </svg>
  );
};

export default HamburgerIcon;
