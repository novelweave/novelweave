/*
Template Name: Blink - Startup & SaaS Bootstrap 5 Template.
Author: GrayGrids
*/
// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());
// Disable keyboard shortcuts for copy, paste, cut
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'a')) {
        e.preventDefault();
    }
});
//------------------------------------------------------------------------------------------------------------------------
(function () {
    //===== Preloader
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        preloader.style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
        // Debounce function to improve performance
        function debounce(func, wait = 20, immediate = true) {
            let timeout;
            return function (...args) {
                const context = this;
                const later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        // Sticky navbar functionality
        window.onscroll = debounce(function () {
            const headerNavbar = document.querySelector(".navbar-area");
            const sticky = headerNavbar.offsetTop;

            if (window.pageYOffset > sticky) {
                headerNavbar.classList.add("sticky");
            } else {
                headerNavbar.classList.remove("sticky");
            }
        
        const backToTop = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    }, 100); // 100ms debounce

    // WOW active
    new WOW().init();



    // Smooth scroll for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not(.scroll-top)');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Scroll to top functionality
    const scrollTopButton = document.querySelector('.scroll-top');
    scrollTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Debounce function to limit function execution rate
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

})();

  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

// Function to get a cookie value
function getCookie(name) {
    const cookieArray = document.cookie.split("; ");
    for (let i = 0; i < cookieArray.length; i++) {
        const [key, value] = cookieArray[i].split("=");
        if (key === name) return value;
    }
    return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to check cookies and display the banner
function checkCookieConsent() {
    const consent = getCookie("cookie_consent");
    if (!consent) {
        document.getElementById("cookie-banner").style.display = "block"; // Show the banner if no consent
    }
}

// Event listeners for Accept and Decline buttons
document.getElementById("accept-cookies").addEventListener("click", function () {
    setCookie("cookie_consent", "accepted", 365); // Store acceptance for 365 days
    document.getElementById("cookie-banner").style.display = "none"; // Hide the banner
});

document.getElementById("decline-cookies").addEventListener("click", function () {
    setCookie("cookie_consent", "declined", 365); // Store decline for 365 days
    document.getElementById("cookie-banner").style.display = "none"; // Hide the banner
});

// Check cookie consent status on page load
document.addEventListener("DOMContentLoaded", checkCookieConsent);
