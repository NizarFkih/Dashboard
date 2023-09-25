import classes from "./styles/SideBar.module.css";
import { useState } from "react";
const SideBar = () => {
  const links = [
    "dashboard",
    "settings",
    "profile",
    "projects",
    "courses",
    "friends",
    "files",
    "plans",
  ];

  return (
    <div id={classes.sideBar}>
      <p id={classes.logo}>Dashboard</p>

      <ul id="listOfLinks">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={`/${link}`}
              className={`${classes.link} ${
                window.location.pathname === `/${links[index]}`
                  ? classes.active
                  : ""
              }`}
            >
              <img alt={`${link} Icon`} src={`/assets/${link}.png`} />
              <span>{link}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
