
// Website related settings
const settings = {
    isSplash: true, 
    useCustomCursor: true, 
    googleTrackingID: "UA-174238252-2",
  };
  
  //Home Page
  const greeting = {
    title: "Hello 👋.",
    title2: "Tushar Arora",
    logo_name: "[T.A.]",
    nickname: "tushar",
    full_name: "Tushar Arora",
    subTitle: "An aspiring Software Developer with a passion for web development and a knack for creating dynamic, user-friendly web applications. 🔥",
    resumeLink:
      "https://docs.google.com/document/d/1lokFHz2FSosR0Ty3hyN5lJEk1B0Mq8Bj/edit?usp=sharing&ouid=114971517951676772727&rtpof=true&sd=true",
    mail: "mailto:tushararora342@gmail.com",
  };
  
  const socialMediaLinks = {
    /* Your Social Media Link */
    github: "https://github.com/tushar1451",
    linkedin: "https://www.linkedin.com/in/tushararora342//",
    gmail: "tushararora342@gmail.com",
  };
  
  const skills = {
    data: [
      {
        title: "Frontend Development",
        fileName: "FrontendDevImg",
        skills: [
          "⚡ Developed responsive web applications using HTML, CSS, and JavaScript.",
          "⚡ Implemented component-based architecture in React for scalable and maintainable code.",
          "⚡ Used CSS pre-processors like SASS/SCSS for more efficient styling.",
          "⚡ Leveraged React hooks to manage state and side effects in functional components.",
          "⚡ Created reusable components for faster development and consistent UI.",
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
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "logos:nodejs",
            style: {
              color: "#339933",
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
            skillName: "Android",
            fontAwesomeClassname: "simple-icons:android",
            style: {
              color: "#3DDC84",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#f89820",
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
        title: "Backend Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Developed RESTful APIs with Express.js and Node.js, handling CRUD operations efficiently.",
          "⚡ Implemented user authentication and authorization using JWT and OAuth2.",
          "⚡ Designed database schemas and managed data using MongoDB and Mongoose.",
          "⚡ Created a secure and scalable server using Node.js, Express, and MongoDB.",
          
        ],
        softwareSkills: [
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "logos:nodejs",
            style: {
              color: "#339933",
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
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
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
    ],
  };

 
  
  const degrees = {
    degrees: [
      {
        title: "Seneca College",
        subtitle: "Computer Programming || Two-year Diploma || 3.7/4.0 GPA",
        logo_path: "seneca1.png",
        alt_name: "SSEC",
        duration: "Jan. 2022 - Aug. 2023",
        descriptions: [
          "Completed a rigorous two-year diploma program at Seneca College, where I gained hands-on experience in mobile and web development, distributed programming, and database administration. This program equipped me with a strong foundation in key programming languages, security protocols, and various operating systems, including Windows, UNIX, Linux, and IBM Business Computing.",
          "Graduated from one of the province's largest and most respected computer studies programs, designed to align with industry demands. The curriculum emphasized both practical and theoretical knowledge, ensuring I possess the technical skills and communication abilities required to excel as a programmer in today's competitive job market."
        ],
        website_link: "https://www.senecapolytechnic.ca/home.html",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      {
        title: "M0001: MongoDB Basics",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#2AAFED",
        color_code: "#47A048",
      },
      {
        title: "Hackathon",
        subtitle: "Hack The Mountains",
        logo_path: "hackathon1.svg",
        certificate_link:
          "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
        alt_name: "hackathon",
        color_code: "#E2405F",
      },
      {
        title: "A300: Atlas Security",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#F6B808",
        color_code: "#47A048",
      },
      {
        title: "Cyber Security & Cyber Forensics",
        subtitle: "Workshop at IIT Bombay",
        logo_path: "iit.png",
        certificate_link:
          "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
        alt_name: "Workshop",
        color_code: "#2AAFED",
      },
      {
        title: "MLH Local Hack Day: Build",
        subtitle: "Major League Hacking",
        logo_path: "mlh-logo.svg",
        certificate_link:
          "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
        alt_name: "Google",
        color_code: "#fe0037",
      },
      {
        title: "Hack20",
        subtitle: "Flutter International Hackathon",
        logo_path: "flutter.png",
        certificate_link:
          "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
        alt_name: "Flutter International Hackathon",
        color_code: "#2AAFED",
      },
      {
        title: "Postman Student Expert",
        subtitle: "Postman",
        logo_path: "postman.png",
        certificate_link:
          "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
        alt_name: "Postman",
        // color_code: "#f36c3d",
        color_code: "#fffbf3",
      },
      // color_code: "#8C151599",
      // color_code: "#7A7A7A",
      // color_code: "#0C9D5899",
      // color_code: "#C5E2EE",
      // color_code: "#ffc475",
      // color_code: "#g",
      // color_code: "#ffbfae",
      // color_code: "#fffbf3",
      // color_code: "#b190b0",
    ],
  };
  
  // Experience Page
  const experience = {
    title: "",
    subtitleList: [
    ],
    subtitle: ``,
    description:
      "I am a dedicated and passionate Computer Programming graduate with a strong foundation in web development, mobile development, and distributed programming. Through a variety of hands-on projects, I have developed proficiency in key programming languages and technologies such as JavaScript, React, Node.js, and Redux. My focus has been on building responsive, user-friendly applications and continuously enhancing my skills in modern development practices. Eager to contribute to innovative projects and grow as a developer, I am always looking for opportunities to apply my knowledge and learn new technologies.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Projects",
        experiences: [
          {
            title: "BlogApp",
            company: "👉 Github",
            company_url: "https://github.com/tushar1451/BlogApp",
            logo_path: "caratlane.png",
            duration: "",
            location: "",
            description: `This project taught me how to build a complete industry grade web application with a focus on user authentication and content management. `,
            skillsList: [
              "• Developed a full-featured blogging platform using React and Appwrite to handle the backend, enabling users to create, edit, and delete posts with a rich text editor (TinyMCE).",
              "• Implemented secure user authentication and data management through Appwrite, ensuring a seamless user experience.",
              "• Designed a responsive UI that works across various devices, enhancing user engagement.",
              "• Used react-redux to manage user state"
            ],
            color: "#0071C5",
          },
          {
            title: "Recipe Finder App",
            company: "Course Work @ Seneca College",
            company_url: "https://www.senecapolytechnic.ca/home.html",
            logo_path: "jugnoo.png",
            duration: "",
            location: "",
            description: `This project improved my API integration skills and taught me how to create a search functionality based on external data sources.`,
            skillsList: [
            "• Created a recipe finder app that fetches and displays recipes based on user input from a third-party API (e.g., Spoonacular API).",
            "• Implemented advanced search features, including filtering by ingredients, cuisine, and dietary preferences.",
            "• Designed an intuitive UI with recipe cards, ingredient lists, and cooking instructions, enhancing the user experience."
            ],
            color: "#0071C5",
          },
          {
            title: "To-Do List App",
            company: "👉 Github",
            company_url: "https://github.com/tushar1451/todoApp/",
            logo_path: "clicklabs.png",
            duration: "",
            location: "",
            description: `This project deepened my understanding of front-end development, particularly in managing state and data persistence in web applications.`,
            skillsList: [
              "Built a dynamic and interactive to-do list application using JavaScript, enabling users to add, edit, delete, and search tasks with real-time updates to the UI.",
              "Utilized local storage to persist user data across sessions, ensuring that tasks remain saved even after the browser is closed.",
              "Implemented modular JavaScript code with functions and event listeners to handle CRUD operations, improving maintainability and scalability.",
              "Designed a responsive and user-friendly interface with CSS, providing an optimal user experience on both mobile and desktop devices."
            ],
            color: "#ee3c26",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
    avatar_image_path: "projects_image.svg",
  };
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      profile_image_path: "animoji.png",
      description:
        "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
      link: "https://medium.com/@tushararora342",
      avatar_image_path: "blogs_image.svg",
    },
  };
  
  const projects = {
    data: [
      {
        id: "0",
        name: "Keep Calm and Carry On",
        url: "https://github.com/robinmalhotra/Keep-Calm-and-Carry-On.github.io",
        description:
          "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Augmented Reality",
            iconifyClass: "bi:badge-ar",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Keep-Calm-and-Carry-On.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/keep-calm-and-carry-on",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
          {
            name: "Live Demo",
            url:
              "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "1",
        name: "YOG4LIFE SOCIAL APP",
        url: "https://github.com/kevalvavaliya/Yog4Life",
        description:
          "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
        languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/kevalvavaliya/Yog4Life",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devfolio",
            url: "https://devfolio.co/projects/yoglife-b20d",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "2",
        name: "Adoptisity",
        url: "https://github.com/kevalvavaliya/Adoptisity",
        description:
          "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Wix",
            iconifyClass: "bxl:wix",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Adoptisity",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/adoptisity",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
          {
            name: "Live Demo",
            url: "https://rajmahadevwala1.wixsite.com/adoptisity",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "3",
        name: "FinSplit",
        url: "https://github.com/rajmahadev8/Fin-Split",
        description:
          "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
        languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/rajmahadev8/Fin-Split",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/finsplit",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "4",
        name: "Emosic",
        url: "https://github.com/kevalvavaliya/Emosic",
        description:
          "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/kevalvavaliya/Emosic",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/emosic",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "5",
        name: "Fileblok",
        url: "https://github.com/robinmalhotra/Fileblok",
        description:
          "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
        languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Storyblok",
            iconifyClass: "logos-storyblok-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Fileblok",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/fileblok",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "6",
        name: "BAUDDIK-GEEKS PORTFOLIO",
        url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
        description:
          "Awesome Community Portfolio website for Bauddhik-Geeks community",
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
        links: [
          {
            name: "Github",
            url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Live Demo",
            url: "https://bauddhikgeeks.co/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "7",
        name: "Votechain",
        url: "https://github.com/abhigoyani/votechain",
        description:
          "Awesome Community Portfolio website for Bauddhik-Geeks community",
        languages: [
          {
            name: "Flask",
            iconifyClass: "logos-flask",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/abhigoyani/votechain",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "8",
        name: "Swag Store",
        url: "https://github.com/robinmalhotra/e-commerce-frontend",
        description:
          "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
        languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "MedusaJS",
            iconifyClass: "logos-medusa-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/e-commerce-frontend",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "9",
        name: "node-blockchain",
        url: "https://github.com/robinmalhotra/node-blockchain",
        description:
          "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/node-blockchain",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "10",
        name: "Know Me Well",
        url: "https://github.com/robinmalhotra/personal-portfolio",
        description:
          "A simple command line interface based quiz app to know more about me :).",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Repl.it",
            iconifyClass: "logos-replit-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/personal-portfolio",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "11",
        name: "Bloggify",
        url: "https://github.com/robinmalhotra/Bloggify",
        description: "A Simple REST API for Blog Application.",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Bloggify",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "12",
        name: "Stargazzers",
        url: "https://github.com/robinmalhotra/stargazers",
        description: "An Unofficial API for GitHub Repo Stars Count",
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/stargazers",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "13",
        name: "GitHub Theme Portfolio",
        url: "https://github.com/robinmalhotra/robinmalhotra.github.io",
        description:
          "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
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
            name: "SCSS",
            iconifyClass: "vscode-icons:file-type-scss2",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/robinmalhotra.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Live Demo",
            url: "https://robinmalhotra.github.io/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      // {
      //   id: "6",
      //   name: "Automate Attendace",
      //   url: "https://github.com/robinmalhotra/Node_Python",
      //   description: "Automation of Online Attendance using node js and python",
      //   languages: [
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "7",
      //   name: "Automate Discord Bot",
      //   url: "https://github.com/robinmalhotra/AutomateDiscordBot",
      //   description:
      //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      //   languages: [
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //     {
      //       name: "Python Selenium",
      //       iconifyClass: "logos-selenium",
      //     },
      //     {
      //       name: "Chromium Browser",
      //       iconifyClass: "openmoji-chromium",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "8",
      //   name: "Flask Blog",
      //   url: "https://github.com/robinmalhotra/flask_blog",
      //   description: "A Simple Blog Web Application made using Flask Framework",
      //   languages: [
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //     {
      //       name: "Flask",
      //       iconifyClass: "cib-flask",
      //     },
      //     {
      //       name: "HTML5",
      //       iconifyClass: "vscode-icons:file-type-html",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "vscode-icons:file-type-css",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "9",
      //   name: "Netflix top series",
      //   url: "https://github.com/robinmalhotra/netflix-top-series",
      //   description: "List of Top Netflix Series which is deployed to vercel.",
      //   languages: [
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "ReactJS",
      //       iconifyClass: "logos-react",
      //     },
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      {
        id: "10",
        name: "COVID-19 Tracker",
        url: "https://github.com/robinmalhotra/Covid19TrackerReact",
        description:
          "Simple Covid-19 Tracker made using React and deployed to Vercel.",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Covid19TrackerReact",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      // {
      //   id: "11",
      //   name: "Food Order Static Website",
      //   url: "https://github.com/robinmalhotra/food-order-website",
      //   description:
      //     "A simple static website related to food restaurants service. this is reasponsive as well.",
      //   languages: [
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "PHP",
      //       iconifyClass: "logos-php",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "12",
      //   name: "NFT Launchpad",
      //   url: "https://deliquescent-cents.000webhostapp.com/",
      //   description: "NFT Launchpad crypto site portfolio",
      //   languages: [
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "ReactJS",
      //       iconifyClass: "logos-react",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "https://github.com/robinmalhotra/nft-launchpad",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
    ],
  };
  
  export {
    settings,
    greeting,
    socialMediaLinks,
    skills,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
    projects,
  };
  