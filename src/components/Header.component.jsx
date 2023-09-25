import classes from "./styles/header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src="/assets/search.png" alt="" id={classes.searchIcon} />
        <input type="search" placeholder="Type A Keyword" name="searchInput" id={classes.Search} />
      </div>
      <div>
        <img src="/assets/avatar.png" alt="" id={classes.avatar}/>
      </div>
    </div>
  );
};

export default Header;
