import Friend from "../components/Friend.component";
import classes from "./styles/friendsSection.module.css";
const FriendsSection = () => {
  return (
    <div id={classes.friendsContainer}>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

export default FriendsSection;
