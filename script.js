
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const topPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + headerHeight + 10;

  sections.forEach(section => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});
