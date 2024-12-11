import styles from './styles.module.css';

const HowDoesHumanHeartWork = () => {
  return (
    <div>
      <h1 className={styles.title}>How Does the Human Heart Work?</h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H04d3rJCLCE"
          title="How Does the Human Heart Work?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className={styles.description}>
        This describes the anatomy or structure of the human heart and
        circulation of blood to the body. The heart is a powerful muscular
        organ. It consists of 4 chambers &ndash; the right side of the heart
        separated from the left by a muscular wall &ndash; the septum, and the
        upper and lower chambers (atria and ventricles) are separated by valves.
        With each heart contraction, the blood is pumped out from the left
        ventricle to the whole body to supply oxygen and nutrients to all the
        tissues of the body.
        <br />
        <br />
        This &lsquo;used&rsquo; or &lsquo;deoxygenated&rsquo; blood then returns
        to the right side of the heart to the right Atrium and ventricle. From
        the right ventricle, the deoxygenated blood goes to the lungs where it
        receives fresh oxygen (re-oxygenated). This then returns to the left
        side of the heart and the circulation continues.
        <br />
        <br />
        <b>How Do Heart Valves Work?</b>
        <br />
        <br />
        The heart has 4 valves:
        <ol>
          <li>
            The Tricuspid Valve which separates the right Atrium from the right
            Ventricle.
          </li>
          <li>
            The Pulmonary Valve which separates the right Ventricle from the
            Pulmonary Artery.
          </li>
          <li>
            The Mitral Valve which separates the left Atrium from the left
            Ventricle.
          </li>
          <li>
            The Aortic Valve which separates the left Ventricle from the Aorta.
          </li>
        </ol>
        <br />
        Each valve is like a one way door which keeps the blood flow in one
        direction. The valves are made up of leaflets. These leaflets open to
        allow blood to flow through the door to prevent blood flowing backwards.
        The opening and closing of the valves is controlled by pressures in the
        chambers.
        <br />
        <br />
        <b>What is Coronary Artery Disease (CAD)?</b>
        <br />
        <br />
        The Coronary Arteries supply blood to the heart muscle to provide the
        necessary oxygen and nutrients to the heart muscle.
        <br />
        <br />
        CAD occurs when there is obstruction to the flow of blood in the
        Coronary arteries when there is a build-up of cholesterol plaque in the
        artery wall. This result is a &lsquo;heart attack&rsquo;.
        <br />
        <br />
        <b>What controls the heart rate?</b>
        <br />
        <br />
        There is an electrical system or &lsquo;battery&rsquo; in the heart
        which controls the heart beat and rhythm of the heart.
        <br />
        <br />
        This &lsquo;battery&rsquo; starts at the sinoatrial (SA) node and causes
        the heart to contract.
        <br />
        <br />
        The electrical impulses travel to the AV node and down the bundles.
        <br />
        <br />
        Sometimes, the heart rate can change based on external factors like
        diet, exercise, stress and hormonal factors.
        <br />
        <br />
      </p>
    </div>
  );
};

export default HowDoesHumanHeartWork;
