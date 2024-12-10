import styles from './styles.module.css';

const PreventHeartAttack = () => {
  return (
    <div>
      <h1 className={styles.title}>Four ways to prevent heart disease</h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ocw_Zey-7cA?si=nsN4-50ejj11daSP"
          title="Four ways to prevent heart disease"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className={styles.description}>
        Healthy lifestyle habits are of almost importance in the prevention of
        CAD and heart attack.
        <br />
        <br />
        <b>Four (4) important points are:</b>
        <ol>
          <li>Don&rsquo;t smoke.</li>
          <li>Diet to keep the Body Mass Index &lt;25kg/m2.</li>
          <li>Healthy diet to include more fruits and vegetables.</li>
          <li>Exercise &gt;150 mins/day.</li>
        </ol>
        <br />
        Though there are various treatments for CAD, such as angioplasty,
        stents, coronary artery bypass surgery and medications like statins,
        these are costly and not as effective as prevention. Prevention is
        better than cure.
        <br />
        <br />
      </p>
    </div>
  );
};

export default PreventHeartAttack;
