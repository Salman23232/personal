// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import upwork from './assets/company_logo/upwork.png';

// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import stscLogo from './assets/education_logo/stsc.png'


// Project Section Logo's
import thunderbolt from './assets/work_logo/thunderbolt.png';
import musify from './assets/work_logo/musify.png';
import instavivid from './assets/work_logo/instavivid.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: upwork,
      role: "Freelance Software engineer",
      company: "Upwork",
      date: "March 2024 - Present",
      desc: "Worked as a Freelance Software Developer at Upwork. Worked with global clients on Upwork to deliver custom web solutions using the MERN stack and modern web technologies.",
      skills: ["JavaScript", "React JS", "API","Node Js", "Express Js", "MongoDB", "Rest API", "JWT Auth", "Socket.io", "Render", "Shadcn Ui", "Tailwind css"],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "Sylhet Polytechnic Institute, Sylhet",
      date: "February 2023 - Present",
      grade: "_CGPA",
      desc: "Currently pursuing a diploma in Computer Science, focusing on software development, data structures, algorithms, web technologies, and programming fundamentals.",
      degree: "Diploma in Computer Science And Technology",
    },

    {
      id: 1,
      img: stscLogo,
      school: "Sylhet Technical School and college, Sylhet",
      date: "Apr 2015 - March 2016",
      grade: "5.00 GPA",
      desc: "I completed my secondary school certificate (class 10) from Sylhet Technical School and college, under the Vocational board, where I studied Science with Computer.",
      degree: "SSC vocational(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Full Stack Social Media & Chat Application using MERN Stack",
      description:
        "Social media platform featuring real-time chat, reels, stories, post creation, likes, comments, user profiles, and universal search.",
      image: instavivid,
      tags: ["JavaScript", "React JS", "API","Node Js", "Express Js", "MongoDB", "Rest API", "JWT Auth", "Socket.io", "Render", "Shadcn Ui", "Tailwind css"],
      github: "https://github.com/Salman23232/InstaVivid",
      webapp: "https://instavivid.onrender.com/",
    },
    {
      id: 1,
      title: "Full Stack AI-Powered Coding Assistant",
      description:
        " This application helps developers generate, edit, and optimize code in real-time.",
      image: thunderbolt,
      tags: ["JavaScript", "Next JS", "API","Convex", "PostgresSql", "Prisma", "Google OAuth", "Vercel", "Open Ai", "Shadcn Ui", "Tailwind css"],
      github: "https://github.com/Salman23232/thunderbolts",
      webapp: "https://thunderbolts-3uc4.vercel.app/",
    },
    {
      id: 2,
      title: "Full Stack Music streaming platform with admin panel",
      description:
        "Music streaming web app using the MERN stack. Features include user authentication, music uploads, playback, playlists, and an admin panel for managing tracks.",
      image: musify,
      tags: ["JavaScript", "React JS", "API","Node Js", "Express Js", "MongoDB", "Rest API", "JWT Auth", "Socket.io", "Render", "Shadcn Ui", "Tailwind css"],
      github: "https://github.com/Salman23232/Full-Stack-Spotify-Clone",
      webapp: "https://musiclovers2.onrender.com/",
    },
  ];  