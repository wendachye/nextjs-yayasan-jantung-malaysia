import styles from './styles.module.css';

const CPR = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {' '}
        CPR &#40;Cardio Pulmonary Resuscitation&#41;
      </h1>
      <p className={styles.description}>
        30% of the total number of medically certified deaths in government
        hospitals in Malaysia are attributed to cardio vascular diseases. Of
        these deaths some will occur outside hospital, usually within the first
        two hours after the onset of symptoms. The Heart Foundation of Malaysia
        aims to reduce this figure through education and training in Basic Life
        Support within the community.
        <br />
        <br />
        The Foundation has played a major role in creating a greater awareness
        among the public on the importance of Basic Life Support. For this we
        provided a range of educational resources including demonstration and
        training videos and during our weekly Heart Week programmes at shopping
        complexes held four times annually.
        <br />
        <br />
        We to provide training in Basic Life Support to members of the public,
        schools and workplaces
        <br />
        <br />
        Click <u>here</u> for more details.
        <br />
        <br />
      </p>
    </div>
  );
};

export default CPR;
