function initParticles(isDarkMode) {
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": isDarkMode ? '#ffffff' : '#444444' },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" },
      },
      "opacity": {
        "value": 0.3,
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
        "distance": 200,
        "color": isDarkMode ? '#ffffff' : '#444444',
        "opacity": 0.2,
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
