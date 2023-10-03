import Plan from "../components/Plan.component";
import { getPlans } from "../data/plans";
import classes from "./styles/plansSection.module.css";
const PlansSection = () => {
  const plans = getPlans();
  return (
    <div id={classes.plansContainer}>
      {plans.map((plan) => (
        <Plan plan={plan} />
      ))}
    </div>
  );
};

export default PlansSection;
