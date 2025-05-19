document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  allLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('data-target');
      if (targetId) {
        event.preventDefault();

        // Remove active class from all links
        allLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Smooth scroll
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
  
    // Show button only when scrolled down 100px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  
    // Scroll smoothly to top (home section)
    scrollBtn.addEventListener('click', () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  
    // Initially hide the button
    scrollBtn.style.display = 'none';
  });
    