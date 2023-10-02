window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector(".navbar").classList.remove("bg-light");
        document.querySelector(".navbar").classList.add("navbar-trans");
    } else {
        document.querySelector(".navbar").classList.add("bg-light");
        document.querySelector(".navbar").classList.remove("navbar-trans");
    }
};
