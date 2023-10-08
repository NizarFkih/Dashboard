import classes from "./styles/friend.module.css";
import PictureTag from "./common/PictureTag.comoponent";
const Friend = ({ data }) => {
  const customStyle = {
    width: "100px",
    marginTop: "20px",
    display: "inline-block",
    border: "none",
  };
  return (
    <div id={classes.friendContainer}>
      <div id={classes.friendHeader}>
        <div id={classes.contactActions}>
          <a href="/friends">
            <img
              src="/assets/phone.png"
              alt="phone-icon"
              className={classes.iconContact}
            />
          </a>
          <a href="/friends">
            <img
              src="/assets/message.png
          "
              alt="message-icon"
              className={classes.iconContact}
            />
          </a>
        </div>
        <PictureTag
          data={{ path: `/assets/${data.profilePicture}`, customStyle }}
        />
        {data.vip ? (
          <div id={classes.vip}>
            <img src="/assets/crown.png" alt="" />
          </div>
        ) : (
          ""
        )}
        <h4>{data.name}</h4>
        <p id={classes.friendJob}>{data.job}</p>
      </div>
      <div id={classes.friendInfo}>
        <span className={classes.icon}>
          <img
            src="/assets/smile.png"
            alt="smile-icon"
            className={classes.infoIcons}
          />
          <p>{data.connections} Friend</p>
        </span>
        <span className={classes.icon}>
          <img
            src="/assets/git-commit.png"
            alt="commit-icon"
            className={classes.infoIcons}
          />
          <p>{data.projects} Projects</p>
        </span>
        <span className={classes.icon}>
          <img
            src="/assets/article.png"
            alt="article-icon"
            className={classes.infoIcons}
          />
          <p>{data.articles} Articles</p>
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
