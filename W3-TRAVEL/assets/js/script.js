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

// MENU MOBILE
var menu__mobile = document.getElementById("menu__mobile");
var header__nav__wrapper = document.getElementById("header__nav__wrapper");
var menu__mobile_icon = menu__mobile.firstElementChild;
var isClosed = true;

menu__mobile.onclick = (event) => {
    event.preventDefault();
    if (isClosed) {
        header__nav__wrapper.style.display = "block";
        menu__mobile.style.backgroundColor = "#000";
        menu__mobile_icon.setAttribute("style", "color: #fff;");
        isClosed = false;
    } else {
        header__nav__wrapper.style.display = null;
        isClosed = true;
    }
}