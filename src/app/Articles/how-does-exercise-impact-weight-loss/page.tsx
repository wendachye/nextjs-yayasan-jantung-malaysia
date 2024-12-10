import styles from './styles.module.css';

const HowDoesExercise = () => {
  return (
    <div>
      <h1 className={styles.title}>How Does Exercise Impact Weight Loss</h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ep9j7YaTfMg?si=aKldeufFq_FfdkIc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className={styles.description}>
        Our body weight depends on our balance of Energy intake and energy
        expenditure i.e. on how much food we take and how much energy we use up
        in our daily activities. Energy intake depends on the amount and form of
        food, while Energy expenditure depends on the Basal Metabolic Rate (BMR)
        and Physical activities.
        <br />
        <br />
        If our energy intake is more than expenditure, then there is a positive
        energy balance and weight gain results.
        <br />
        <br />
        The energy expenditure depends on a number of factors:
        <ul>
          <li>Starting body weight.</li>
          <li>Basal metabolic rate.</li>
          <li>
            Physical activity - which can vary in frequency, intensity, duration
            and type of activity.
          </li>
        </ul>
        <br />
        For example, one honey glazed doughnut provides energy equivalent to
        that needed to walk 30 mins at 30 mph.
        <br />
        <br />
        If the person walks longer (if 60 mins instead) then there will be a
        negative balance and weight loss results. However, after an initial
        weight loss, the weight loss plateaus and there is no further weight
        loss because when the body weight drops, the basal metabolic rate also
        decreases, so there is less energy expenditure.
        <br />
        <br />
        If exercise is stopped, weight gain will result at a slightly greater
        pace.
        <br />
        <br />
        Therefore, to end the plateau, one needs to continue to decrease energy
        intake OR increase energy expenditure by restricting calories further or
        increasing the intensity or duration of exercise.
        <br />
        <br />
      </p>
    </div>
  );
};

export default HowDoesExercise;
