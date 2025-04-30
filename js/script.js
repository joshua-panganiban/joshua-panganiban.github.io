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
        body.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }

      modeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');

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
  
  if (isIndexPage) {
    aboutLink.setAttribute('href', '#about'); 
  } else {
    aboutLink.setAttribute('href', './index.html#about'); 
  }
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
