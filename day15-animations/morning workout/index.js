const displayMessage  = () => {
    let hover = document.querySelector('#hover');

    hover.textContent =  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aut eaque ipsam repellat odio saepe possimus aliquid, assumenda dignissimos facilis dolor, at laborum corrupti libero eum officia! Iste, adipisci beatae.';
    hover.style.color = 'blue';
};

const hideMessage = () => {
    let hover = document.querySelector('#hover');
    hover.textContent = '';
};

document.addEventListener ('DOMContentLoaded', () => {
    let padlock = document.querySelector('#padlock')
    padlock.addEventListener('mouseenter', displayMessage);
    padlock.addEventListener('mouseleave', hideMessage);
}
);
