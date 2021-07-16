// SCROLL
window.onscroll = function() {
    checkScroll();
}

function checkScroll() {
    var header = document.getElementById("header__nav");
    var navigations = document.querySelectorAll(".header__nav a");
    var checkScollTop = window.pageYOffset;
    if (checkScollTop > 100) {
        header.classList.add("sticky");
        navigations.forEach(function(navigation) {
            navigation.classList.add("sticky__element");
        })
    } else {
        header.classList.remove("sticky");
        navigations.forEach((navigation) => {
            navigation.classList.remove("sticky__element");
        })
    }
}