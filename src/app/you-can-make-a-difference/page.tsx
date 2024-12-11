import styles from './styles.module.css';

const YouCanMakeADifference = () => {
  return (
    <div>
      <h1 className={styles.title}> You Can Make A Difference!</h1>
      <p className={styles.description}>
        <b>
          Here's how you can help improve the odds against heart and blood
          vessel disease.
        </b>
        <br />
        <ul>
          <li>
            Reduce your own risk by enjoying healthy eating, exercising, being
            smoke free and having your blood pressure checked regularly.
          </li>
          <li>
            Donate to the Foundation for our research, health promotion, CPR and
            rehabilitation programmes.
          </li>
          <li>Become a Friend of the Foundation.</li>
          <li>Leave a bequest to the Foundation in your will</li>
          <li>Make an "In Memoriam" gift.</li>
        </ul>
        <br />
        <br />
        To join the fight against Malaysia's major killer, please{' '}
        <u>contact us</u> here or complete a copy of our{' '}
        <u>Membership/Donation Form</u> here.
        <br />
        <br />
      </p>
    </div>
  );
};

export default YouCanMakeADifference;
