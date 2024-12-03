document.addEventListener('scroll', () => {
  const textElement = document.querySelector('.skills-text');
  const rect = textElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    textElement.classList.add('slide-down');
  }
});
document.addEventListener('scroll', () => {
  const skillBlocks = document.querySelectorAll('.skill-block');
  const windowHeight = window.innerHeight;

  skillBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top <= windowHeight * 0.8) {
      block.classList.add('fade-in');
    }
  });
});

document.addEventListener('scroll', () => {
  const servicesTitle = document.querySelector('.section-title');
  const rect = servicesTitle.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    servicesTitle.classList.add('slide-down');
  }
});
document.addEventListener('scroll', () => {
  const skillBlocks = document.querySelectorAll('.service-block');
  const windowHeight = window.innerHeight;

  skillBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top <= windowHeight * 0.8) {
      block.classList.add('fade-in');
    }
  });
});

document.addEventListener('scroll', () => {
  const skillBlocks = document.querySelectorAll('.social-icon');
  const windowHeight = window.innerHeight;

  skillBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top <= windowHeight * 0.8) {
      block.classList.add('fade-in');
    }
  });
});