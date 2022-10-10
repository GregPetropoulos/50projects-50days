const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

//Adding a toggle o the nave set to active will apply all the ccs styles
toggle.addEventListener('click', () => nav.classList.toggle('active'));
