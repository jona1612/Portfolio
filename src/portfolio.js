// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Jonathan P",
  logo_name: "~Jon@th@n^^",
  full_name: "Jonathan",
  subTitle:
    "Full Stack Developer, Frontend Backend and React Developer, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1DdupZk22QqQJ4fiI0AWOdGo5vgRTv6sb/view?usp=sharing",
  mail: "mailto:jonathan16official@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/jona1612",
  linkedin: "https://www.linkedin.com/in/jonathan-p-0b3a651b2/",
  gmail: "jonathan16official@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User-Interface and Backend for web applications",
        "⚡ Building responsive website frontend using ReactJS",
        "⚡ Creating application backend in Node, Express, MongoDB and AWS",
        "⚡ Integration of third party services such as Firebase / AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dhanraj Baid Jain Collage",
      subtitle: "Bachelors of Computer Application",
      logo_path: "DBJC_Logo.jpg",
      alt_name: "SSEC",
      duration: "2014 - 2018",
      descriptions: [
        // "⚡  I'm currently pursuing my Bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like C, C++, Data Structures, OOPS, etc.",
        "⚡ I have also completed online course for Frontend, Backend , Full Stack Web Development.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.dbjaincollege.org/",
    },
  ],
};

const certifications = {
  // certifications: [
  //   {
  //     title: "Google Cloud",
  //     subtitle: "Google Cloud Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
  //     alt_name: "MongoDB University",
  //     // color_code: "#2AAFED",
  //     color_code: "#2AAFED",
  //   },
  //   {
  //     title: "Hackathon",
  //     subtitle: "Backyard Hacks 2.0",
  //     logo_path: "hackathon1.png",
  //     // certificate_link:
  //     //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
  //     alt_name: "hackathon",
  //     color_code: "#f47e2c",
  //   },
  //   // color_code: "#8C151599",
  //   // color_code: "#7A7A7A",
  //   // color_code: "#0C9D5899",
  //   // color_code: "#C5E2EE",
  //   // color_code: "#ffc475",
  //   // color_code: "#g",
  //   // color_code: "#ffbfae",
  //   // color_code: "#fffbf3",
  //   // color_code: "#b190b0",
  // ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, JavaScripts, and React Project. Below are some of my projects. Note that all of the mentioned projects are on GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "StackOverFlow Clone",
      url: "https://jonathan-stackoverflow.netlify.app",
      description:
        "A completely working and responsive project using reactjs, HTML, CSS and material UI as a frontend and nodejs, mongoose as backend and mongodb as a database.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "MongoDB",
          iconifyClass: "bxl:mongodb",
          style: {
            color: "#439743",
          }
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Clone",
      url: "https://jonathan-hackathon1.netlify.app",
      description:
        "A completely working clone project using html, CSS, bootstrap and javascript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Asset Management Software",
      // url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
      ],
    },
    {
      id: "3",
      name: "Portfolio Website",
      url: "https://jonathan-myportfolio.netlify.app/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};