let redbar = 4;

document.addEventListener('DOMContentLoaded', () => {
  const mainbar = document.querySelector('#mainbar');

  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.innerHTML = (
    `<div id="label" class="label">
    <span id="counter">4</span>/<span id="maximum">10</span>
    </div>
    <div class="progress">
    <div id="minus" class="btn-minus"></div>
    <div class="bar">
      <div id="knob" class="knob"></div>
    </div>
    <div id="plus" class="btn-plus"></div>
  </div>`
  );
  bar.querySelector('.btn-minus').addEventListener('click', (event) => {
    const knob = document.querySelector('.knob');
    const counter = document.querySelector('#counter');
    if (redbar > 0 ) {
      redbar -= 1;
     knob.style.width = `${redbar}0%`;
     counter.textContent = `${redbar}`
    }
  });
  bar.querySelector('.btn-plus').addEventListener('click', (event) => {
    if (redbar < 10 ) {
      redbar += 1;
     knob.style.width = `${redbar}0%`;
     counter.textContent = `${redbar}`
    }
  });
  mainbar.appendChild(bar);
});
