// import fernirav1 from "./src/video/fernir.av1.mp4";   такой подход лучше
import { resolve } from "path";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

const projectsLinks = [
  {
    name: "Fernir",
    href: "https://fernir.vercel.app/",
    videoName: "fernir",
  },
  {
    name: "Ecommerce",
    href: "https://khhhrp.github.io/ecommerce/",
    videoName: "ecommerce",
  },
  {
    name: "Hlegal",
    href: "https://hlegal-three.vercel.app/",
    videoName: "hlegal",
  },
  {
    name: "Greenshop",
    href: "https://khhhrp.github.io/hillel/",
    videoName: "greenshop",
  },
  {
    name: "Portfolio",
    href: "https://khhhrp.github.io/personal/",
    videoName: "ss",
  },
  {
    name: "McKinley",
    href: "https://khhhrp.github.io/MC/",
    videoName: "mckinley",
  },
  {
    name: "Interno",
    href: "https://khhhrp.github.io/interno/",
    videoName: "interno",
  },
  {
    name: "Agency",
    href: "https://portfolio-laaqiq.vercel.app/",
    videoName: "agency",
  },
  {
    name: "Coffee",
    href: "https://khhhrp.github.io/coffee/",
    videoName: "coffee",
  },
  {
    name: "UpDate",
    href: "https://khhhrp.github.io/sprint/",
    videoName: "update",
  },
  {
    name: "Porto",
    href: "https://khhhrp.github.io/porto/",
    videoName: "porto",
  },
];

const runningLinks = [
  {
    title: "khhhrp@icloud.com",
    href: "mailto:khhhrp@icloud.com",
    index: 0,
  },
  {
    title: "khhhrp@icloud.com",
    href: "mailto:khhhrp@icloud.com",
    index: 1,
  },
  {
    title: "khhhrp@icloud.com",
    href: "mailto:khhhrp@icloud.com",
    index: 2,
  },
];

const frontloopsLinks = [
  {
    name: "Pricing table",
    href: "https://khhhrp-frontloops-task-01.netlify.app/",
    videoName: "task01",
  },
  {
    name: "Payment method",
    href: "https://khhhrp-frontloops-task-02.netlify.app/",
    videoName: "task02",
  },
  {
    name: "Simple Wheels",
    href: "https://khhhrp-frontloops-task-03.netlify.app/",
    videoName: "task03",
  },
  {
    name: "Chat",
    href: "https://khhhrp-frontloops-task-04.netlify.app/",
    videoName: "task04",
  },
  {
    name: "Air ticket",
    href: "https://khhhrp-frontloops-task-05.netlify.app/",
    imageName: "task05",
    isImage: "true",
  },
  {
    name: "Signup",
    href: "https://khhhrp-frontloops-task-06.netlify.app/",
    videoName: "task06",
  },
  {
    name: "Blog",
    href: "https://khhhrp-frontloops-task-07.netlify.app/",
    imageName: "task07",
    isImage: "true",
  },
  {
    name: "Photo tour",
    href: "https://khhhrp-frontloops-task-08.netlify.app/",
    videoName: "task08",
  },
  {
    name: "My wallets",
    href: "https://khhhrp-frontloops-task-09.netlify.app/",
    videoName: "task09",
  },
  {
    name: "Apple watch",
    href: "https://khhhrp-frontloops-task-10.netlify.app/",
    videoName: "task10",
  },
  {
    name: "Wash slider",
    href: "https://khhhrp-frontloops-task-11.netlify.app/",
    videoName: "task11",
  },
  {
    name: "Account settings",
    href: "https://khhhrp-frontloops-task-12.netlify.app/",
    videoName: "task12",
  },
  {
    name: "Details",
    href: "https://khhhrp-frontloops-task-13.netlify.app/",
    videoName: "task13",
  },
  {
    name: "Application menu",
    href: "https://khhhrp-frontloops-task-14.netlify.app/",
    videoName: "task14",
  },
  {
    name: "City ​​attractions",
    href: "https://khhhrp-frontloops-task-15.netlify.app/",
    imageName: "task15",
    isImage: "true",
  },
  {
    name: "Calendar",
    href: "https://khhhrp-frontloops-task-16.netlify.app/",
    imageName: "task16",
    isImage: "true",
  },
  {
    name: "Press page",
    href: "https://khhhrp-frontloops-task-17.netlify.app/",
    videoName: "task17",
  },
  {
    name: "Card settings",
    href: "https://khhhrp-frontloops-task-18.netlify.app/",
    videoName: "task18",
  },
  {
    name: "Navigator app",
    href: "https://khhhrp-frontloops-task-19.netlify.app/",
    videoName: "task19",
  },
  {
    name: "Linkedin",
    href: "https://khhhrp-frontloops-task-20.netlify.app/",
    videoName: "task20",
  },
  {
    name: "Nike product card",
    href: "https://khhhrp-frontloops-task-21.netlify.app/",
    videoName: "task21",
  },
  {
    name: "City gallery",
    href: "https://khhhrp-frontloops-task-22.netlify.app/",
    videoName: "task22",
  },
  {
    name: "Music album cover",
    href: "https://khhhrp-frontloops-task-24.netlify.app/",
    videoName: "task24",
  },
];

const emailLinks = [
  {
    name: "Dunder Mifflin",
    href: "https://khhhrp.github.io/email/",
    videoName: "dunder",
  },
  {
    name: "Lottery gifts",
    href: "https://khhhrp.github.io/email-table/",
    videoName: "lottery",
  },
];

export default {
  partialDirectory: resolve(__dirname, "src/partials"),
  context: {
    projects: {
      links: projectsLinks,
      colStart: 2,
      colEnd: 5,
      addClass: "scroll-6",
    },
    runningBlock: {
      links: runningLinks,
    },
    frontloops: {
      links: frontloopsLinks,
      colStart: 1,
      colEnd: 4,
      addClass: "scroll-9",
    },
    email: {
      links: emailLinks,
      colStart: 2,
      colEnd: 5,
      addClass: "scroll-13",
    },
  },
};
