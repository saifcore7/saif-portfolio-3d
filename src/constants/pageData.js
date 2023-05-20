/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const EDUCATION = {
  rows: 1,
  separation: 3,
  leftPadding: -0.32,
  topPadding: 0.01,
  scale: 0.2,
  //optionally show the websiteURL inside of the cube in an Iframe
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: "websites-preview/about-school.jpg",
      websiteURL: "https://education-school-1.vercel.app/",
    },
    {
      url: "websites-preview/college.jpg",
      websiteURL: "https://education-college.000webhostapp.com/",
    },
    {
      url: "websites-preview/trainings.jpg",
      websiteURL: "https://trainings-saif.netlify.app/",
    },
  ],
};

export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.32,
  scale: 0.12,
  items: [
    { url: "icons/html-5 (2).png", websiteURL: null },
    { url: "icons/java.png", websiteURL: null },
    { url: "icons/science.png", websiteURL: null },
    { url: "icons/c.png", websiteURL: null },
    { url: "icons/css (1).png", websiteURL: null },
    { url: "icons/vscode.png", websiteURL: null },
    { url: "icons/Git-Icon-White.png", websiteURL: null },
    { url: "icons/c-.png", websiteURL: null },
    { url: "icons/js.png", websiteURL: null },
    { url: "icons/icons8-kali-linux-400.png", websiteURL: null },
    { url: "icons/photoshop.png", websiteURL: null },
    { url: "icons/threejs.png", websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: "Title" },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: "About",
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: "Experience",
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: "Skills",
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: "Download CV",
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: "Personal Projects",
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: "Get In Touch",
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: "Profile Picture",
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
