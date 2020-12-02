import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Igor Dias | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Igor Dias',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I`m a Web Developer, passionate about technology and solving problems always aiming to learn new things.',
  paragraphTwo: 'Motivated and committed professional, with strong attention to detail, and good communication skills. I believe in collaborative working between designers and other parts of the company. Expect from me to always learn more about React and UX / UI design while creating and to always push boundaries to deliver better products.',
  paragraphThree: 'Able to drive web application roadmap forward, with focus on efficiently delivering software that users will rave about, as well as able to collaborate on all aspects of software development.',
  resume: 'https://drive.google.com/file/d/1ClgHG8TijP7GOGKwkf6LSwQpFqah3UbD/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Be The Hero',
    info: 'First big project using the Node.js, React and React Native stack. The front end was built using React.',
    info2: 'The purpose of the application is to be able to register incidents with animals and the user can check where it occurred and if it can help in any way.',
    url: 'https://github.com/Igorth/front-end-be-the-hero',
    repo: 'https://github.com/Igorth/front-end-be-the-hero', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'GitHub API',
    info: 'One of the first projects using react, typescript and styled components.',
    info2: 'The goal is to search for any repository on github using your api.',
    url: 'https://github.com/Igorth/github-explorer',
    repo: 'https://github.com/Igorth/github-explorer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Sass',
    info: 'Learning to use Sass to create a responsive website using the concept of Sass and Scss.',
    info2: '',
    url: 'https://codepen.io/igordiasth/pen/YzGzrav',
    repo: 'https://codepen.io/igordiasth/pen/YzGzrav', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Flexbox',
    info: 'Using Flexbox properties to create a website that looks almost like Twitter. The main objective was to use the knowledge of flexbox.',
    info2: '',
    url: 'https://codepen.io/igordiasth/pen/QWKbmaj',
    repo: 'https://codepen.io/igordiasth/pen/QWKbmaj', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'igordiasth@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/igordiasth',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/igordiasth/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Igorth',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
