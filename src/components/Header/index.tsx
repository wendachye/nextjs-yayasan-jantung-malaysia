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
      {
        title: 'Our Future',
        link: '',
      },
      {
        title: 'Our Activities',
        link: '',
      },
      {
        title: 'Promoting Health',
        link: '',
      },
      {
        title: 'Research - The Heart of a Revolution',
        link: '',
      },
      {
        title: 'CPR (Cardio Pulmonary Resuscitation)',
        link: '',
      },
      {
        title: 'Friends of the Foundation',
        link: '',
      },
      {
        title: 'How You Can Help',
        link: '',
      },
      {
        title: 'You Can Make A Difference!',
        link: '',
      },
    ],
  },
  {
    title: 'Facilities',
    link: '',
    items: [
      {
        title: 'Hall Rental',
        link: '',
      },
      {
        title: 'Halfway House',
        link: '',
      },
    ],
  },
  {
    title: 'Health Articles',
    link: '',
    items: [
      {
        title: 'Video: How Does the Human Heart Work?',
        link: '',
      },
      {
        title: 'Video: Four Ways to Prevent Heart Attack',
        link: '',
      },
      {
        title: 'Video: Health Matters - Heart Disease Warning',
        link: '',
      },
      {
        title: 'Video: How Does Exercise Impact Weight Loss',
        link: '',
      },
      {
        title: 'Heart Basics',
        link: '',
      },
      {
        title: 'Steps to Better Health',
        link: '',
      },
      {
        title: 'How Aerobic Exercise Can Speed Up Your Fatloss!',
        link: '',
      },
      {
        title: 'Break Your Bad Habits',
        link: '',
      },
      {
        title: 'Tobacco and Your Health',
        link: '',
      },
      {
        title: 'Heart Attack',
        link: '',
      },
      {
        title: "Heart Disease - Not somebody else's business",
        link: '',
      },
      {
        title: 'Arrhythmias and Sudden Cardiac Death',
        link: '',
      },
      {
        title: 'Inherited Cholesterol Disorder',
        link: '',
      },
    ],
  },
  {
    title: 'Activities',
    link: '',
    items: [
      {
        title: 'Photo Gallery & Albums',
        link: '',
      },
      {
        title: 'CPR (Cardio Pulmonary Resuscitation)',
        link: '',
      },
      {
        title: 'AXA Hearts in Action Run 2020',
        link: '',
      },
      {
        title: 'Walk A Million Miles 2020',
        link: '',
      },
      {
        title: 'World Heart Day',
        link: '',
      },
      {
        title: 'Go Red for Women',
        link: '',
      },
    ],
  },
  {
    title: 'Bulletin',
    link: '',
  },
  {
    title: 'Contact Us',
    link: '',
    items: [
      {
        title: 'Contact Us',
        link: '',
      },
      {
        title: 'Membership',
        link: '',
      },
      {
        title: 'Donation',
        link: '',
      },
      {
        title: 'Vacancy',
        link: '',
      },
    ],
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
