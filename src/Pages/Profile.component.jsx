import InfoSnippet from "../components/common/InfoSnippet.component";
import { getUserInfo, getUserSkills } from "../data/profile";
import styles from "./styles/profileSection.module.css";
import Tag from "./../components/common/Tag.component";
const Profile = () => {
  const userInfo = getUserInfo();
  const userSkills = getUserSkills();
  return (
    <div id={styles.profileContainer}>
      <div id={styles.profile}>
        <div id={styles.profileCard}>
          <img src="/assets/avatar.png" alt="user-profile" />
          <h2>User Name</h2>
          <p>user level 10</p>
          <div id={styles.level}>
            <span id={styles.levelProgress}></span>
          </div>
          <div>avg Stars Rating</div>
          <p>505 Rating</p>
        </div>
        <div id={styles.profileInfo}>
          {userInfo.map((info,index) => (
            <InfoSnippet key={index} data={info} />
          ))}
        </div>
      </div>
      <div id={styles.additionalInfo}>
        <div id={styles.profileSkills}>
          <h2>My Skills</h2>
          <p>Complete Skills List</p>
          <div>
            {userSkills.map((skill) => (
              <div id={styles.tagLine}>
                {skill.map((item) => {
                  return <Tag data={{ content: item }} />;
                })}
              </div>
            ))}
          </div>
        </div>
        <div id={styles.profileHistory}>
          <h2>Latest Activities</h2>
          <p>Latest Activities Done By The User</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
