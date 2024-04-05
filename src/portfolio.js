/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vrudit Patel",
  title: "Hi all, I'm Vrudit",
  subTitle: emoji(
    "As a master's graduate in data analytics and a developer of data science-based web apps, I craft insights from complex datasets. 🚀 Let's explore the power of data together and unlock the potential for strategic decision-making."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1poWiRtHWjp6BGFAIaL_S8iwfkqRGmAv9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vruditdp",
  linkedin: "https://www.linkedin.com/in/vruditpatel/",
  gmail: "vruditdpatel1809@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/vrudit.patel.75",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I derive actionable master plans through comprehensive data analysis and business intelligence. I love transforming data into strategic solutions for effective decision-making in ever-evolving settings.",
  skills: [
    emoji(
      "⚡ Develop highly efficient and accurate ML and DL Models"
    ),
    emoji("⚡ Data Science based Web Applications with React"),
    emoji(
      "⚡ Data Engineering: ETLs, Data Mining, Data WareHousing, Data Modeling"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  // {
  //   skillName: "sass",
  //   fontAwesomeClassname: "fab fa-sass"
  // },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  // {
  //   skillName: "BI",
  //   fontAwesomeClassname: "fas fa-chart-mixed-up-circle-dollar"
  // },
  // {
  //   skillName: "swift",
  //   fontAwesomeClassname: "fab fa-swift"
  // },
  // {
  //   skillName: "npm",
  //   fontAwesomeClassname: "fab fa-npm"
  // },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "snowflake",
    fontAwesomeClassname: "far fa-snowflake"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  // {
  //   skillName: "R",
  //   fontAwesomeClassname: "fa-regular fa-r"
  // }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University - Vancouver Campus",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Masters in Data Analytics     (GPA: 3.97/4.00)",
      duration: "September 2022 - March 2024",
      desc: "During my Masters in Analytics with a concentration in Artificial Intelligence, I developed a deep understanding of cutting-edge techniques and methodologies in data analysis and AI.",
      descBullets: [
        "Key Courses: Data Mining, Data Modeling, Data Warehousing, AI, Business Intelligence, Statistical Modeling, ETL Pipelines, Data Visualizations",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Gujarat Technological University (Ahmedabad, India)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering (GPA: 3.72/4.00)",
      duration: "May 2018 - April 2022",
      desc: "During my B.E., I learned the basics of computer science. With lots of practical projects, I gained a good understanding of the fundamental ideas and skills needed in this field.",
      descBullets: [
        "Key Courses: Data Structure, Software Engineering, Machine Learning, Java, Algorithm Designing, Compiler Designing, Cloud Computing, Database Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Developer",
      company: "Shinestar Web Solution",
      companylogo: require("./assets/images/shine.png"),
      date: "January 2022 – July 2022",
      // desc: "Worked on collecting large datasets effectively through collaborative efforts in data scraping. Used Python libraries like BeautifulSoup and Selenium to automate tasks, saving over 10 hours weekly and enhancing data quality by 20%. Conducted in-depth data analysis and created intuitive visualizations in Power BI to support clients' dynamic business needs, helping in informed decision-making.",
      descBullets: [
        "Worked on collecting large datasets effectively through collaborative efforts in data scraping.",
        "Used Python libraries like BeautifulSoup and Selenium to automate tasks, saving over 10 hours weekly and enhancing data quality by 20%.",
        "Conducted in-depth data analysis and created intuitive visualizations in Power BI to support clients' dynamic business needs, helping in informed decision-making."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
      role: "Python Developer Intern",
      company: "Akash Technolabs",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "May 2021 – July 2021",
      // desc: "Formulated Flask APIs to construct an Interactive Web App within the React framework integrating SQL Database connectivity for efficient data management.",
      descBullets: [
        "Formulated Flask APIs to construct an Interactive Web App within the React framework integrating SQL Database connectivity for efficient data management.",
        // "Used Python libraries like BeautifulSoup and Selenium to automate tasks, saving over 10 hours weekly and enhancing data quality by 20%.",
        // "Conducted in-depth data analysis and created intuitive visualizations in Power BI to support clients' dynamic business needs, helping in informed decision-making."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "These are some of my flagship projects !",
  projects: [
    {
      image: require("./assets/images/mtv.png"),
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "My True Value (MTV)",
      projectDesc: "A data science project to predict job salaries using factors like skills, location, industry etc. Developed using scraped data from Glassdoor, This web app is built in React JS with a backend in Flask to host the machine learning model, achieving 87% accuracy.",
      footerLink: [
        {
          name: "Visit MTV",
          url: "https://m-t-v.netlify.app/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/formula-one-2017-logo-BCDDC2C9ED-seeklogo.com.png"),
      projectName: "FastLane Insights",
      projectDesc: "This is a responsive Power BI dashboard for Formula 1 data, utilizing MySQL with a 'Star Schema' model. Transformed data with 'Power Query' and created content pages for Circuits, Drivers, and Constructors. Enhanced user experience with intuitive navigation and detailed tooltips.",
      // projectDesc: " This is an intuitive Power BI dashboard to explore historical data of Formula 1. It has a MySQL connectivity with a 'Star Schema' data model, facilitating rational relations between dimension tables and a fact table. Used Power Query for data transformation, including column creation and table merging. Developed dashboard content pages for Circuits, Drivers, and Constructors, using DAX measures for insights. Enhanced user experience with a user-friendly navigation system and detailed tooltips.",
      footerLink: [
        {
          name: "Power BI Dashboard",
          url: "https://app.powerbi.com/view?r=eyJrIjoiMDljYjdjNjEtM2MxZi00NzhmLWI1MzktODIzZmE4YTg5NWJjIiwidCI6ImE4ZWVjMjgxLWFhYTMtNGRhZS1hYzliLTlhMzk4YjkyMTVlNyIsImMiOjN9"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me  "),
  // title: emoji("Contact Me ☎️"),
  subtitle:
    "Vrudit Patel",
  number: "+1 (236) 865-5916",
  email_address: "vruditdpatel1809@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
