const userInfo = [
  {
    title: "general information",
    info: [
      { title: "full Name", value: "Nizar El Fekih" },
      { title: "gender", value: "Male" },
      { title: "Country", value: "Tunisia" },
    ],
  },
  {
    title: "personal information",
    info: [
      { title: "email", value: "elfekihnizar7@gmail.com" },
      { title: "phone", value: "+216 53 535 535" },
      { title: "date of birth", value: "17/11/1997" },
    ],
  },
  {
    title: "job information",
    info: [
      { title: "job", value: "Full Stack Developer" },
      { title: "Programming Language", value: "java-script" },
      { title: "years of experience", value: "1" },
    ],
  },
  {
    title: "billing information",
    info: [
      { title: "payment method", value: "paypal" },
      { title: "email", value: "elfekihnizar7@gmail.com" },
      { title: "subscription", value: "Monthly" },
    ],
  },
];
const userSkills = [
  ["HTML5", "PugJs", "HAML"],
  ["CSS", "SASS", "Bootstrap"],
  ["JavaScript", "TypeScript"],
  ["ReactJs"],
  ["NodeJs", "PHP"],
  ["ExpressJs", "Laravel"]
];
const userHistory = [
  {
    title: "Store",
    task: " Bought The Mastering Python Course ",
    dateOfDone: "15/12/2023",
  },
  {
    title: "Academy",
    task: "  Got The PHP Certificate  ",
    dateOfDone: "15/12/2023",
  },
  {
    title: "Badges",
    task: "  Unlocked The 10 Skills Badge  ",
    dateOfDone: "15/12/2023",
  },
  {
    title: "Store",
    task: " Bought The Typescript Course",
    dateOfDone: "15/12/2023",
  },
];
export const getUserInfo = () => {
  return userInfo;
};
export const getUserSkills = () => {
  return userSkills;
};
export const getUserHistory = () => {
  return userHistory;
};
