/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/**
 * This object represents the main application and its functionalities.
 */
var app = {
  // Property to check if the scrolling on the body has been disabled.
  bodyHasScrollKilled: false,
  // Property to store the scroll position of the body before scrolling is disabled.
  oldBodyPos: 0,
  /**
   * Initializes the application.
   */
  init: function init() {
    app.pageTransitionInit();
    app.toggleOffCanvas();
    app.pageTransitionOnClick();
  },
  /**
   * Sets up event listeners for the off-canvas functionality.
   * - It listens for click events to open or close the off-canvas.
   * - It also listens for the escape key to close the off-canvas.
   */
  toggleOffCanvas: function toggleOffCanvas() {
    // Listen for clicks on elements with `data-toggle="off-canvas"` to toggle off-canvas.
    document.body.addEventListener("click", function (e) {
      if (e.target.closest('[data-toggle="off-canvas"]')) {
        var target = document.getElementById(e.target.dataset.target);
        console.log('target: ', target);
        if (target.classList.contains("open")) {
          app.closeOffCanvas(target);
        } else {
          e.preventDefault();
          app.openOffCanvas(target);
        }
      }
    });

    // Close the off-canvas when clicking on close buttons or backdrops within it.
    document.body.addEventListener("click", function (e) {
      if (e.target.closest(".offscreen-panel .close-toggle") || e.target.closest(".offscreen-panel .backdrop")) {
        e.preventDefault();
        app.closeOffCanvas(e.target.closest(".offscreen-panel"));
      }
    });

    // Close the off-canvas when the escape key is pressed.
    document.body.addEventListener("keyup", function (e) {
      if (e.keyCode === 27) {
        app.closeOffCanvas();
      }
    });
  },
  /**
   * Opens the off-canvas target.
   *
   * @param {HTMLElement} target - The DOM element representing the off-canvas to be opened.
   * @returns {Boolean} - Returns true if the operation was successful, false otherwise.
   */
  openOffCanvas: function openOffCanvas(target) {
    // target = document.getElementById(target.slice(1));
    if (!target) return false;
    target.classList.add("open");
    document.body.classList.add("offcanvas-opened", "".concat(target.id, "-opened"));
    document.body.dispatchEvent(new CustomEvent("app_off_canvas_opened", {
      detail: target
    }));

    // Disables the body's scrolling.
    app.killBodyScroll();
    return true;
  },
  /**
   * Closes the off-canvas target.
   * If no specific target is provided, it will close all open off-canvas panels.
   *
   * @param {HTMLElement|null} target - The DOM element representing the off-canvas to be closed. If null, all open off-canvas panels will be closed.
   */
  closeOffCanvas: function closeOffCanvas(target) {
    if (!target) {
      document.querySelectorAll(".offscreen-panel").forEach(function (panel) {
        if (!panel.classList.contains("open")) return;
        panel.classList.remove("open");
        document.body.classList.remove("".concat(panel.id, "-opened"));
      });
    } else {
      target = target.closest(".offscreen-panel");
      target.classList.remove("open");
      document.body.classList.remove("".concat(target.id, "-opened"));
    }
    document.body.classList.remove("offcanvas-opened");
    document.body.dispatchEvent(new CustomEvent("app_off_canvas_closed", {
      detail: target
    }));

    // Restores the body's scrolling.
    app.restoreBodyScroll();
  },
  /**
   * Disables scrolling on the body by setting its position to fixed.
   */
  killBodyScroll: function killBodyScroll() {
    app.oldBodyPos = -window.pageYOffset;
    document.body.style.setProperty('--scroll-position', "".concat(app.oldBodyPos, "px"));
    document.body.classList.add('no-scroll');
    app.bodyHasScrollKilled = true;
  },
  /**
   * Enables scrolling on the body by resetting its position.
   * The function also scrolls the body to its previous position before the scroll was disabled.
   */
  restoreBodyScroll: function restoreBodyScroll() {
    document.body.classList.remove('no-scroll');
    document.body.style.top = "";
    window.scrollTo(0, -app.oldBodyPos);
    app.bodyHasScrollKilled = false;
  },
  /**
   * Initializes the page transition effect when the page loads.
   * This gives an entrance effect to the page.
   */
  pageTransitionInit: function pageTransitionInit() {
    var pageWrapper = document.querySelector('.page-wrapper');

    // Ensure we have the pageWrapper.
    if (!pageWrapper) return;

    // Short delay to let the initial styles apply, then remove the transition effect classes.
    setTimeout(function () {
      pageWrapper.classList.remove('out');
    }, 50);
  },
  /**
   * Handles the page transition effect when an anchor tag is clicked.
   * This gives an exit effect from the page.
   */
  pageTransitionOnClick: function pageTransitionOnClick() {
    var pageWrapper = document.querySelector('.page-wrapper');

    // Ensure we have the pageWrapper.
    if (!pageWrapper) return;
    document.body.addEventListener('click', function (e) {
      // Check if the clicked element is an anchor tag.
      if (e.target.tagName === 'A') {
        var href = e.target.getAttribute('href');

        // Check if the href value exists.
        if (href) {
          // If the href is an anchor link on the same page, do nothing.
          if (href.startsWith('#')) return;
          e.preventDefault();

          // Apply the transition effect classes.
          pageWrapper.classList.add('out');

          // After the effect duration, redirect to the link's href value.
          setTimeout(function () {
            window.location.href = href;
          }, 400); // Assuming the transition duration is 0.4s (400ms). Adjust if needed.
        }
      }
    });
  }
};

// Initialize the application once the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  app.init();

  // Add a class to indicate that the HTML content is fully loaded.
  document.body.classList.add("html-loaded");

  // Scroll to Top functionality
  var scrollToTopBtn = document.querySelector('.to-the-top');
  if (scrollToTopBtn) {
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        // show after scrolling 100px
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default action which might add #site-header to URL
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }); // smooth scrolling to top
    });
  }
});
/******/ })()
;
//# sourceMappingURL=main.js.map