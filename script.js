document.querySelector(".navbar-toggle").addEventListener("click", function () {
    var links = document.querySelectorAll(".header_links1");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
    }
  });
