import classes from "./styles/friend.module.css";
const Friend = () => {
  return (
    <div id={classes.friendContainer}>
      <div id={classes.friendHeader}>
        <div id={classes.contactActions}>
          <a href="/">
            <img
              src="/assets/phone.png"
              alt="phone-icon"
              className={classes.iconContact}
            />
          </a>
          <a href="/">
            <img
              src="/assets/message.png
          "
              alt="message-icon"
              className={classes.iconContact}
            />
          </a>
        </div>
        <img
          src="/assets/friend-01.jpg"
          alt="friend-profile-picture"
          id={classes.friendPicture}
        />
        <h4>Friend Name</h4>
        <p id={classes.friendJob}>Job</p>
      </div>
      <div id={classes.friendInfo}>
        <span className={classes.icon}>
          <img
            src="/assets/smile.png"
            alt="smile-icon"
            className={classes.infoIcons}
          />
          <p>14 Friend</p>
        </span>
        <span className={classes.icon}>
          <img
            src="/assets/git-commit.png"
            alt="commit-icon"
            className={classes.infoIcons}
          />
          <p>12 Projects</p>
        </span>
        <span className={classes.icon}>
          <img
            src="/assets/article.png"
            alt="article-icon"
            className={classes.infoIcons}
          />
          <p>08 Articles</p>
        </span>
      </div>
      <div id={classes.friendFooter}>
        <span>
          Joined:
          <date> 30/09/2023</date>
        </span>
        <span id={classes.footerActions}>
          <a href="" className={`${classes.btn} ${classes.btnShow}`}>
            Profile
          </a>
          <button className={`${classes.btn} ${classes.btnRemove}`}>
            Remove
          </button>
        </span>
      </div>
    </div>
  );
};
export default Friend;
