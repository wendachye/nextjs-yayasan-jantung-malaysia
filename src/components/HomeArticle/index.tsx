import Image from 'next/image';
import styles from './styles.module.css';

const HomeArticle = () => {
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.description}>
          <b>Encouraging people to change their lifestyles</b> and to help
          develop environments which make healthy choices easier, are a
          fundamental part of The Heart Foundation of Malaysia'.s drive to
          reduce premature death and disability from heart and circulatory
          disease.
        </p>
        <br />
        <br />
        <br />
        <br />
        <p className={styles.description}>
          <b>CPR (Cardio Pulmonary Resuscitation)</b> The Heart Foundation of
          Malaysia (Yayasan Jantung Malaysia) is a leading agency in the
          education, training and on the control of heart and blood vessel
          disease.
          <br />
          <br />
          In this respect, the time has come for the foundation, to seriously
          work towards creating interest not only disseminating the knowledge
          and skills in Basic Life Support, but, also from time to time conduct
          and demonstrate saving technique's of Cardiopulmonary Resuscitation
          (CPR).
        </p>
      </div>

      <picture className={styles.image_cover}>
        <Image fill alt="article-cpr" src="/images/home/home_article_cpr.jpg" />
      </picture>
    </section>
  );
};

export default HomeArticle;
