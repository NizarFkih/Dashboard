import Friend from "../components/Friend.component";
import { getFriends } from "../data/friends";
import classes from "./styles/friendsSection.module.css";
const FriendsSection = () => {
  const friends = getFriends();
  return (
    <div id={classes.friendsContainer}>
      {friends.map((friend) => (
        <Friend data={friend} />
      ))}
    </div>
  );
};

export default FriendsSection;
