

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.pleasework')
  const race = new Race ('Hello', 2);
  race.mount(app);
  const race1 = new Race ('hi', 6);
  race1.mount(app);
  });