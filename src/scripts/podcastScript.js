// podcastScript.js

document.addEventListener("DOMContentLoaded", function () {
  const bannerSection = document.querySelector(".banner_section");
  const sectionOne = document.querySelector(".section_one");
  const sectionTwo = document.querySelector(".section_two");
  const sectionThree = document.querySelector(".section_three");
  const sectionFour = document.querySelector(".section_four");
  const sectionFive = document.querySelector(".section_five");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    // Parallax effect for banner section
    if (bannerSection) {
      bannerSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }

    // Parallax effect for section one
    if (sectionOne) {
      sectionOne.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }

    // Parallax effect for section two
    if (sectionTwo) {
      sectionTwo.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }

    // Parallax effect for section three
    if (sectionThree) {
      sectionThree.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }

    // Parallax effect for section four
    if (sectionFour) {
      sectionFour.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }

    // Parallax effect for section five
    if (sectionFive) {
      sectionFive.style.transform = `translateY(${scrollPosition * 0.02}px)`;
    }
  });
});

