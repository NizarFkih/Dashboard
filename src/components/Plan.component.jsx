import classes from "./styles/plan.module.css";
const Plan = ({ plan }) => {
  return (
    <div id={classes.planContainer}>
      <div
        id={classes.planHeader}
        style={{ backgroundColor: plan.color, outlineColor: plan.color }}
      >
        <h2>{plan.name}</h2>
        <p>{plan.price>0?plan.price:"0.00"}</p>
      </div>
      <div>
        <ul>
          <li className={classes.offer}>
            {plan.offers.AccessAllTextLessons ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Access All Text Lessons{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.AccessAllVideosLessons ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Access All Videos Lessons{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.AppearOnLeaderBoard ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Appear On Leader Board{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.BrowseContentWithoutAds ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Browse Content Without Ads{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.AccessAllAssignments ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Access All Assignments{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.GetDailyPrizes ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Get Daily Prizes{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.EarnCertificate ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Earn Certificate{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.SpaceForHostingFiles ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            1 GB Space For Hosting Files{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
          <li className={classes.offer}>
            {plan.offers.AccessBadgeSystem ? (
              <img src="/assets/check.png" alt=" check-icon" />
            ) : (
              <img src="/assets/cross.png" alt="cross-icon" />
            )}
            Access Badge System{" "}
            <img
              src="/assets/info.png"
              alt="info-icon"
              className={classes.info}
            />
          </li>
        </ul>
      </div>
      <button id={classes.btn} style={{ backgroundColor: plan.color }}>
        Join
      </button>
    </div>
  );
};

export default Plan;
