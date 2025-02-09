import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

gsap.fromTo(
  ".timer__city",
  { text: "*$a#^*", duration: 1 },
  {
    text: "(UTC+2),",
    duration: 0.6,
    ease: "power2.out",
    delay: 0.5,
  }
);

gsap.fromTo(
  ".scroll-1",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".hero",
      start: "center-=200",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-2",
  { opacity: 0, x: 100, y: -100 },
  {
    opacity: 1,
    x: 0,
    y: 0,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".hero",
      start: "center-=200",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-3",
  { x: 100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".hero",
      start: "bottom-=100",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-4",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".hero",
      start: "bottom-=100",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.to(".hero", {
  y: 150,
  scrollTrigger: {
    scroller: ".grid",
    trigger: ".hero",
    start: "top",
    end: "bottom",
    scrub: 2,
  },
});

let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  gsap.to(".hero", {
    y: 450,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".hero",
      start: "top",
      end: "bottom",
      scrub: 2,
    },
  });

  return;
});

mm.revert();

gsap.fromTo(
  ".scroll-5",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-4",
      start: "top-=100",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-6",
  { x: 100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-4",
      start: "top-=100",
      end: "+=300",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-7",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-6",
      start: "bottom-=500",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-8",
  { x: 100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-6",
      start: "bottom-=500",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-9",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-8",
      start: "top-=200",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-10",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-9",
      start: "bottom-=500",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-11",
  { x: -100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-9",
      start: "bottom-=200",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-12",
  { x: 100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-9",
      start: "bottom-=200",
      end: "+=250",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".scroll-13",
  { x: 100, y: 100, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      scroller: ".grid",
      trigger: ".scroll-10",
      start: "center-=400",
      end: "+=250",
      scrub: true,
    },
  }
);

document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    gsap.to(".grid", {
      duration: 0.7,
      scrollTo: link.getAttribute("href"),
      ease: "power2.out",
    });
  });
});
