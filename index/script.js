const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-menu .nav-item ul li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

// ============= menu icon ===============
const menuicon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuicon.addEventListener("click", function () {
  menuicon.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// ===============================

const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } 
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});



// =================Slide=================

  const slider = $(".slider-item");
    slider
      .slick({
        dots: true
      });
    //Implementing navigation of slides using mouse scroll
    slider.on('wheel', (function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
  }));


  // ================ light & dark / mode ===============

  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });