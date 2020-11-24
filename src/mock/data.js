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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
