document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for hash links (e.g. #state, #district, #media)
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

function sendFormByEmail(event, recipient, subject) {
  event.preventDefault();
  const form = event.currentTarget;
  const lines = [];

  form.querySelectorAll('input, select, textarea').forEach(field => {
    if (field.type === 'file' || !field.value) return;
    const wrapper = field.closest('.col-md-6, .col-12');
    const label = wrapper?.querySelector('label')?.textContent?.trim() || field.name || 'വിവരം';
    lines.push(`${label}: ${field.value}`);
  });

  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  window.location.href = mailto;
  return false;
}
