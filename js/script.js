// Load navigation bar and footer
function loadContent() {
  fetch('/html/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));

  fetch('/html/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;

      // Dark mode / light mode toggle
      const modeToggle = document.getElementById('mode-toggle');
      const body = document.body;
      const footer = document.querySelector('footer');
      const icon = modeToggle.querySelector('i');

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        //initParticles(true);
        body.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
      else {
        //initParticles(false)
      }

      modeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        //initParticles(isDark);

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (isDark) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      });

      // Hamburger menu
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.forEach(link => link.classList.remove('active'));
          link.classList.add('active');
        });
      });

      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobile-menu');

      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
      });

      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('show');
        });
      });

    })
    .catch(err => console.error('Error loading navbar:', err));

}

document.addEventListener('DOMContentLoaded', loadContent);

document.addEventListener('DOMContentLoaded', function() {
  const isIndexPage = window.location.pathname.includes('index.html'); 
  const aboutLink = document.getElementById('about-link');
  
//  if (isIndexPage) {
//    aboutLink.setAttribute('href', '#about'); 
//  } 
});

// News Section ------------------------------------------------//
// See more feature in mobile mode
if (
  window.location.pathname === '/' ||
  window.location.pathname.endsWith('index.html')
) {
  document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".news-entry");
    const loadMoreBtn = document.getElementById("load-more-news");

    if (window.innerWidth <= 600) {
      let visibleCount = 3;
      const step = 10;

      const updateVisibility = () => {
        entries.forEach((entry, index) => {
          entry.style.display = index < visibleCount ? "grid" : "none";
        });

        if (visibleCount >= entries.length) {
          loadMoreBtn.style.display = "none";
        }
      };

      loadMoreBtn.addEventListener("click", () => {
        visibleCount += step;
        updateVisibility();
      });

      updateVisibility();
    } else {
      entries.forEach(entry => {
        entry.style.display = "grid";
      });

      loadMoreBtn.style.display = "none";

      const container = document.querySelector(".news-container");
      container.style.maxHeight = "500px";
      container.style.overflowY = "auto";
    }
  });
}

// Contact Section ------------------------------------------------//
// Send email
if (window.location.pathname.endsWith('contact.html')) {
  let captchaVerified = false;

  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("NXd9ZKL-gf1R_Abjm"); //

    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      if (!captchaVerified) {
        document.getElementById("captcha-warning").style.display = "block";
        return;
      }

      const form = event.target;

      emailjs.sendForm("service_2m7vqra", "template_g7r6na7", form)
        .then(function (response) {
          console.log("Success", response);
          document.getElementById("response-message").innerHTML = "Thank you for contacting me! I will get back to you soon.";
          form.reset();
          document.getElementById("captcha-warning").style.display = "none";
        }, function (error) {
          console.error("Error", error);
          document.getElementById("response-message").innerHTML = "Oops! Something went wrong. Please try again.";
        });
    });
  });

  function enableSubmit() {
    document.getElementById("submit-button").disabled = false;
    document.getElementById("captcha-warning").style.display = "none";
    captchaVerified = true;
  }

}


// Particles ------------------------------------------------//
function initParticles(isDarkMode) {
  // Destroy existing instance if it exists
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": isDarkMode ? '#ffffff' : '#000000' },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": { "enable": false }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": isDarkMode ? '#ffffff' : '#000000',
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

}
