// SCROLL
window.onscroll = function() {
    checkScroll();
}

function checkScroll() {
    var header = document.getElementById("header__nav");

    var checkScollTop = window.pageYOffset;
    if (checkScollTop > 100) {
        header.classList.add("sticky");
        var navigations = document.querySelectorAll(".header__nav a");
        navigations.forEach(function(navigation) {
            navigation.classList.add("sticky__element");
        })
    } else {
        header.classList.remove("sticky");
    }
}