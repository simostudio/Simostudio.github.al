
  // Add smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = anchorLink.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}

// Add form submission functionality
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  // Replace the URL below with your actual form submission URL
  const url = 'https://example.com/form-submission';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Thank you for your message!');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  };
  xhr.send(`name=${name}&email=${email}&message=${message}`);
});

// Your JavaScript code, if needed, can be added here
