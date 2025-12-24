// Micro interactions (safe & working)

// tiny nav reveal on scroll (adds subtle shadow)
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.style.boxShadow =
      window.scrollY > 10
        ? '0 10px 30px rgba(2,6,23,0.6)'
        : 'none';
  });
})();

// Simple accessible typing accent inside hero
(function () {
  const words = ['CS Student', 'Robotics Developer', 'Automation Enthusiast'];
  const el = document.getElementById('typing');
  if (!el) return;

  let wi = 0, ci = 0, del = false;

  function tick() {
    const w = words[wi];
    el.textContent = w.slice(0, ci);

    if (!del) {
      ci++;
      if (ci > w.length) {
        del = true;
        setTimeout(tick, 1000);
        return;
      }
    } else {
      ci--;
      if (ci === 0) {
        del = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(tick, del ? 60 : 110);
  }

  tick();
})();

// ✅ CONTACT FORM — MUST BE SEPARATE
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qqjf77l",
    "template_k4ois1s",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("Failed to send message");
    console.error(error);
  });
});
