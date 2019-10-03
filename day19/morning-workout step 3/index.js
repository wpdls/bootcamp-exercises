document.addEventListener('DOMContentLoaded', () => {

const work = document.querySelector('.pleasework')
const timer1 = new Timer(20);
timer1.mount(work);
const timer2 = new Timer (30);
timer2.mount(work);
});