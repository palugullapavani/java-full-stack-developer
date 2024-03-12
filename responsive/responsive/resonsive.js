'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // vars
    var testim = document.getElementById("testim"),
        testimDots = Array.from(document.getElementById("testim-dots").children),
        testimContent = Array.from(document.getElementById("testim-content").children),
        testimLeftArrow = document.getElementById("left-arrow"),
        testimRightArrow = document.getElementById("right-arrow"),
        testimSpeed = 4500,
        currentSlide = 0,
        currentActive = 0,
        testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    });

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    });

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        });
    }

    playSlide(currentSlide);

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    });

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPos - touchEndPos;

        if (touchPosDiff > 0 + ignoreTouch) {
            playSlide(currentSlide += 1);
        } else if (touchPosDiff < 0 - ignoreTouch) {
            playSlide(currentSlide -= 1);
        } else {
            return;
        }
    });
});
