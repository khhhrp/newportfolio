import "./gsap-animations";

document.addEventListener("DOMContentLoaded", function () {
  const timer = document.querySelector(".timer");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const navigationLinks = document.querySelectorAll(".navigation__works-link");
  const mediaBlockLinks = document.querySelectorAll(".media-block__link");
  const mqh = window.matchMedia("(hover:hover)");

  const playVideo = (video) => {
    if (video) {
      video.play().catch((error) => {
        console.error("Ошибка воспроизведения видео:", error);
      });
    }
  };

  const pauseVideo = (video) => {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const linkMouseMove = (e, media) => {
    if (media) {
      media.style.transform = `translate(-50%, -50%) translate(${e.offsetX}px, ${e.offsetY}px)`;
    }
  };

  const removeListeners = () => {
    mediaBlockLinks.forEach((link) => {
      const mediaBlockVideo = link.querySelector("video");
      const mediaAction = link.querySelector(".media-block__action");
      link.removeEventListener("mouseenter", () => playVideo(mediaBlockVideo));
      link.removeEventListener("mouseleave", () => pauseVideo(mediaBlockVideo));
      link.removeEventListener("mousemove", (e) =>
        linkMouseMove(e, mediaAction)
      );
    });
  };

  const addListeners = () => {
    mediaBlockLinks.forEach((link) => {
      const mediaBlockVideo = link.querySelector("video");
      const mediaAction = link.querySelector(".media-block__action");

      if (mediaBlockVideo) {
        mediaBlockVideo.setAttribute("preload", "auto");
      }

      link.addEventListener("mouseenter", () => playVideo(mediaBlockVideo));
      link.addEventListener("mouseleave", () => pauseVideo(mediaBlockVideo));
      link.addEventListener("mousemove", (e) => linkMouseMove(e, mediaAction));
    });
  };

  const videoAction = () => (mqh.matches ? addListeners() : removeListeners());

  videoAction();

  mqh.onchange = videoAction;

  const handleButtonClick = (
    button,
    activeClass,
    navigation,
    navActiveClass,
    timer,
    timerActiveCLass
  ) => {
    button.addEventListener("click", () => {
      button.classList.toggle(activeClass);
      navigation.classList.toggle(navActiveClass);
      timer.classList.toggle(timerActiveCLass);
    });
  };

  handleButtonClick(
    menuToggle,
    "menu-toggle--active",
    navigation,
    "navigation--active",
    timer,
    "timer--active"
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("navigation--active");
      menuToggle.classList.remove("menu-toggle--active");
      timer.classList.remove("timer--active");
    });
  });
});

function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.querySelector(".timer__current-time").textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
