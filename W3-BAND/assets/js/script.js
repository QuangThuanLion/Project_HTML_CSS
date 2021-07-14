// Slider
const url = 'http://127.0.0.1:5500/assets';
var slideIndex = 0;
showImage();

function showImage() {
    var slider = document.getElementById("slider");
    var arrayUrl = ["images/chicago.jpg", "images/ny.jpg", "images/la.jpg"];
    slider.style.backgroundImage = `url("${url}/${arrayUrl[slideIndex]}")`;
    if (slideIndex === arrayUrl.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    setTimeout(showImage, 2000);
}

// onClick mobile show menu
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var rootHeight = header.clientHeight;

mobileMenu.onclick = function() {
    let isClosed = header.clientHeight === rootHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

// closed when select menuItems
var menuItems = document.querySelectorAll("#nav li a[href*='#']");
const subnav = document.getElementById("subnav");
const styles = window.getComputedStyle(subnav);
const rootDisplay = styles.display;
menuItems.forEach(function(menuItem) {
    menuItem.onclick = function(event) {
        var CheckParentMenuItem = this.nextElementSibling &&
            this.nextElementSibling.classList.contains("subnav");
        if (CheckParentMenuItem) {
            event.preventDefault();
            const stylesEdit = window.getComputedStyle(subnav);
            const displayEdit = stylesEdit.display;
            if (displayEdit === rootDisplay) {
                subnav.style.display = "block";
            } else {
                subnav.style.display = "none";
            }
        } else {
            header.style.height = null;
        }
    }
})