import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EDUCATION,
} from "./constants/pageData";

const configs = {
  title: "Saif Ali Khan",
  subTitle: "Web portfolio.",
  stars: {
    maxSize: 3,
    emissionIntencity: 15,
    dencity: 2000,
  },
  navTitle: "<Saif/>",
  relevantStops: STOPS,
  pages: [
    {
      scale: 14,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt("About"),
      title: "Who Am I?",
      infos: [
        "* Hi, I'm Saif Ali Khan, and I skilled myself in developing responsive web apps, pages, including static, and 3D applications.",
        "* In 2022, I began my web development journey by enrolling in a professional course through Internshala Trainings.",
        "* In addition to my techinal skills, I enjoy playing cricket, which have taught me the importance of 'concentration'.",
        "* I invite you to explore more about me and my journey. Thank you :) for visiting my portfolio.",
      ],
    },
    {
      scale: 15,
      displayAt: displayAt("Experience"),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: "Education",
      imageList: EDUCATION,
      footer: "Click the icons to find out more.",
    },
    {
      scale: 15,
      displayAt: displayAt("Skills"),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: "Skills",
      footer: "And more...",
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt("Download CV"),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: "Here is my CV!",
      footer: "Click the icon above to view!",
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: "icons/resume (1).png",
            websiteURL: "https://github.com/saifcore7/cv-saif/",
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt("Personal Projects"),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: "Personal Projects",
      footer: "(And also this 3D web-app)",
      imageList: {
        rows: 2,
        separation: 2,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: "websites-preview/IMG-1573.jpg",
            websiteURL: "https://github.com/saifcore7/Unclickable-button",
          },
          {
            url: "websites-preview/pg-life.png",
            websiteURL: "https://github.com/saifcore7/saif-pg-life",
          },
          {
            url: "websites-preview/c++.png",
            websiteURL: "https://github.com/saifcore7/Report_Card_Generator",
          },
          {
            url: "websites-preview/cricket1_large.jpg",
            websiteURL: "https://github.com/saifcore7/virtual-cricket-game",
          },
        ],
      },
    },
    {
      scale: 13,
      displayAt: displayAt("Get In Touch"),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: "You can find me on:",
      footer: "Almost done but keep scrolling :)",
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: "icons/instagram.png",
            websiteURL: "https://www.instagram.com/saif_r14/",
          },
          {
            url: "icons/linkedin.png",
            websiteURL: "https://www.linkedin.com/in/saif-ali-khan-5679bb233/",
          },
          {
            url: "icons/github-mark-white.png",
            websiteURL: "https://github.com/saifcore7",
          },
          {
            url: "icons/gmail.png",
            websiteURL: "mailto:saif7862254j@gmail.com",
          },
        ],
      },
    },
  ],
};

export default configs;
