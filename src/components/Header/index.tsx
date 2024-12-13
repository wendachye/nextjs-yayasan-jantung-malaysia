'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const menu = [
  {
    title: 'About YJM',
    link: '',
    items: [
      {
        title: 'About YJM',
        link: '',
      },
      {
        title: 'Patron & Board of Directors',
        link: '',
      },
      {
        title: 'Supporting Staff',
        link: '',
      },
      {
        title: 'Our Aspirations',
        link: '',
      },
    ],
  },
  {
    title: 'Facilities',
    link: '',
  },
  {
    title: 'Health Articles',
    link: '',
  },
  {
    title: 'Activities',
    link: '',
  },
  {
    title: 'Bulletin',
    link: '',
  },
  {
    title: 'Contact Us',
    link: '',
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <picture className={styles.logo}>
          <Image fill alt="logo" src="/images/logo.png" sizes="602px" />
        </picture>
      </Link>

      <nav className={styles.nav}>
        {menu.map((item) => (
          <div key={item.title} className={styles.dropdown}>
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>

            <div className={styles.dropdown_content}>
              {item.items?.map((subItem) => (
                <Link key={subItem.title} href={subItem.link}>
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* <HamburgerIcon /> */}
    </header>
  );
};

export default Header;
