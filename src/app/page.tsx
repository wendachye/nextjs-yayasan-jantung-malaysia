import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const URL_ADS = 'https://biogrow.com.my';

const Home = () => {
  return (
    <div>
      <div className={styles.banner}>
        <Image fill alt="home-banner" src="/images/home/home_banner.jpg" />
      </div>

      <Link href={URL_ADS} target="_blank">
        <div className={styles.banner_ads}>
          <Image
            fill
            alt="home-banner"
            src="/images/home/home_banner_ads.jpg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Home;
