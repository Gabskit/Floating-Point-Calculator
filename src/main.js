// main.js
import './style.css';
import 'flyonui/flyonui'; // Loads FlyonUI's interactive elements
import Alpine from 'alpinejs';

// Make Alpine available globally and start it
window.Alpine = Alpine;
Alpine.start();

document.querySelector('#app').innerHTML = `

`

setupCounter(document.querySelector('#counter'))
