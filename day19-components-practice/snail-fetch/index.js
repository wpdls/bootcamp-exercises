document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.pleasework')


  fetch ('http://bootcamp.podlomar.org/api/snails/5')
  .then(response => response.json())
  .then(moveSnails => {
    for (const move of moveSnails) {
      const moveSnails = new Race (move.name, move.velocity, move.color);
      moveSnails.mount(app);
    }
  })
  });