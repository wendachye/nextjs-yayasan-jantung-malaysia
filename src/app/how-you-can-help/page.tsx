import styles from './styles.module.css';

const HowYouCanHelp = () => {
  return (
    <div>
      <h1 className={styles.title}> How You Can Help</h1>
      <p className={styles.description}>
        <ul>
          <li>
            By donations to support cardiovascular research. Specific areas of
            research may be designated, but a more general and flexible type of
            donation is preferred.
          </li>
          <li>
            By sponsoring a Research or Training Fellowship. The name of an
            individual, company or trust can be applied to the Fellowship and
            specific requests of an individual, company or trust can be
            negotiated and incorporated into the conditions for the award.
          </li>
          <li>
            By sponsoring Research Projects. An individual, company or trust may
            sponsor research within a particular field. Sponsorship is then
            applied to an award in the field made by the Foundation's Scientific
            Committee.
          </li>
          <li>
            By sponsoring printing of brochures Student Heart Health programmes,
            Symposium or Conferences. The Heart Foundation of Malaysia has a
            broad range of research and education activities, which offer
            opportunities for corporate funding through sponsorship.
          </li>
          <li>
            Individuals, companies and trusts which support the Foundation
            through sponsorship are eligible for taxation benefits. In addition,
            they will obtain goodwill, through association with non-profit
            organisations and acknowledgement in publicity material and the
            annual report.
          </li>
        </ul>
        <br />
        <br />
        Monetary Contribution made to the Foundation are{' '}
        <b>tax exempted: JHDN/01/35/42/51/179-6.3452</b>
        <br />
        <br />
        Please click here for Donation Form &#40;pdf&#41;
        <br />
        <br />
      </p>
    </div>
  );
};

export default HowYouCanHelp;
