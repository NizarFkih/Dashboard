import classes from "./styles/content.module.css"
const Content = () => {
  let Section = window.location.pathname.split("");
  Section.shift();
  Section=Section.join("")
  return (
    <div id={classes.container}>
      <h1 id={classes.title}>{Section}</h1>
    </div>
  );
};

export default Content;
