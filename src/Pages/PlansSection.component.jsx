import Plan from "../components/Plan.component";
import classes from "./styles/plansSection.module.css";
const PlansSection = () => {
    const plans = [
        {
          name: "Free",
          price: 0.00,
          color:"#22c55e",
          offers: {
            AccessAllTextLessons: true,
            AccessAllVideosLessons: true,
            AppearOnLeaderBoard: true,
            BrowseContentWithoutAds: false,
            AccessAllAssignments: false,
            GetDailyPrizes: false,
            EarnCertificate: false,
            SpaceForHostingFiles: false,
            AccessBadgeSystem: false,
          },
        },
        {
          name: "Basic",
          price: 7.99,
          color:"#0075ff",
          offers: {
            AccessAllTextLessons: true,
            AccessAllVideosLessons: true,
            AppearOnLeaderBoard: true,
            BrowseContentWithoutAds: true,
            AccessAllAssignments: true,
            GetDailyPrizes: true,
            EarnCertificate: true,
            SpaceForHostingFiles: false,
            AccessBadgeSystem: false,
          },
        },
        {
          name: "Premium",
          price: 19.99,
          color:"#f59e0b",
          offers: {
            AccessAllTextLessons: true,
            AccessAllVideosLessons: true,
            AppearOnLeaderBoard: true,
            BrowseContentWithoutAds: true,
            AccessAllAssignments: true,
            GetDailyPrizes: true,
            EarnCertificate: true,
            SpaceForHostingFiles: true,
            AccessBadgeSystem: true,
          },
        },
      ];
  return (
    <div id={classes.plansContainer}>
      {plans.map(plan=><Plan plan={plan} />)}
      
    </div>
  );
};

export default PlansSection;
