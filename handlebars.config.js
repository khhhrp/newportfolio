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
    href: "https://vdmkhrp.github.io/ecommerce/",
    videoName: "ecommerce",
  },
  {
    name: "Hlegal",
    href: "https://hlegal-three.vercel.app/",
    videoName: "hlegal",
  },
  {
    name: "Greenshop",
    href: "https://vdmkhrp.github.io/hillel/",
    videoName: "greenshop",
  },
  {
    name: "Portfolio",
    href: "https://vdmkhrp.github.io/personal/",
    videoName: "ss",
  },
  {
    name: "McKinley",
    href: "https://vdmkhrp.github.io/MC/",
    videoName: "mckinley",
  },
  {
    name: "Interno",
    href: "https://vdmkhrp.github.io/interno/",
    videoName: "interno",
  },
  {
    name: "Agency",
    href: "https://portfolio-laaqiq.vercel.app/",
    videoName: "agency",
  },
  {
    name: "Coffee",
    href: "https://vdmkhrp.github.io/coffee/",
    videoName: "coffee",
  },
  {
    name: "UpDate",
    href: "https://vdmkhrp.github.io/sprint/",
    videoName: "update",
  },
  {
    name: "Porto",
    href: "https://vdmkhrp.github.io/porto/",
    videoName: "porto",
  },
];

const runningLinks = [
  {
    title: "vdmkhrp@gmail.com",
    href: "mailto:vdmkhrp@gmail.com",
    index: 0,
  },
  {
    title: "vdmkhrp@gmail.com",
    href: "mailto:vdmkhrp@gmail.com",
    index: 1,
  },
  {
    title: "vdmkhrp@gmail.com",
    href: "mailto:vdmkhrp@gmail.com",
    index: 2,
  },
];

const frontloopsLinks = [
  {
    name: "Pricing table",
    href: "https://vdmkhrp-frontloops-task-01.netlify.app/",
    videoName: "task01",
  },
  {
    name: "Payment method",
    href: "https://vdmkhrp-frontloops-task-02.netlify.app/",
    videoName: "task02",
  },
  {
    name: "Simple Wheels",
    href: "https://vdmkhrp-frontloops-task-03.netlify.app/",
    videoName: "task03",
  },
  {
    name: "Chat",
    href: "https://vdmkhrp-frontloops-task-04.netlify.app/",
    videoName: "task04",
  },
  {
    name: "Air ticket",
    href: "https://vdmkhrp-frontloops-task-05.netlify.app/",
    imageName: "task05",
    isImage: "true",
  },
  {
    name: "Signup",
    href: "https://vdmkhrp-frontloops-task-06.netlify.app/",
    videoName: "task06",
  },
  {
    name: "Blog",
    href: "https://vdmkhrp-frontloops-task-07.netlify.app/",
    imageName: "task07",
    isImage: "true",
  },
  {
    name: "Photo tour",
    href: "https://vdmkhrp-frontloops-task-08.netlify.app/",
    videoName: "task08",
  },
  {
    name: "My wallets",
    href: "https://vdmkhrp-frontloops-task-09.netlify.app/",
    videoName: "task09",
  },
  {
    name: "Apple watch",
    href: "https://vdmkhrp-frontloops-task-10.netlify.app/",
    videoName: "task10",
  },
  {
    name: "Wash slider",
    href: "https://vdmkhrp-frontloops-task-11.netlify.app/",
    videoName: "task11",
  },
  {
    name: "Account settings",
    href: "https://vdmkhrp-frontloops-task-12.netlify.app/",
    videoName: "task12",
  },
  {
    name: "Details",
    href: "https://vdmkhrp-frontloops-task-13.netlify.app/",
    videoName: "task13",
  },
  {
    name: "Application menu",
    href: "https://vdmkhrp-frontloops-task-14.netlify.app/",
    videoName: "task14",
  },
  {
    name: "City ​​attractions",
    href: "https://vdmkhrp-frontloops-task-15.netlify.app/",
    imageName: "task15",
    isImage: "true",
  },
  {
    name: "Calendar",
    href: "https://vdmkhrp-frontloops-task-16.netlify.app/",
    imageName: "task16",
    isImage: "true",
  },
  {
    name: "Press page",
    href: "https://vdmkhrp-frontloops-task-17.netlify.app/",
    videoName: "task17",
  },
  {
    name: "Card settings",
    href: "https://vdmkhrp-frontloops-task-18.netlify.app/",
    videoName: "task18",
  },
  {
    name: "Navigator app",
    href: "https://vdmkhrp-frontloops-task-19.netlify.app/",
    videoName: "task19",
  },
  {
    name: "Linkedin",
    href: "https://vdmkhrp-frontloops-task-20.netlify.app/",
    videoName: "task20",
  },
  {
    name: "Nike product card",
    href: "https://vdmkhrp-frontloops-task-21.netlify.app/",
    videoName: "task21",
  },
  {
    name: "City gallery",
    href: "https://vdmkhrp-frontloops-task-22.netlify.app/",
    videoName: "task22",
  },
  {
    name: "Music album cover",
    href: "https://vdmkhrp-frontloops-task-24.netlify.app/",
    videoName: "task24",
  },
];

const emailLinks = [
  {
    name: "Dunder Mifflin",
    href: "https://vdmkhrp.github.io/email/",
    videoName: "dunder",
  },
  {
    name: "Lottery gifts",
    href: "https://vdmkhrp.github.io/email-table/",
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
