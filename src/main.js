// main.js
import './style.css';
import './Jqmstyle.css'
import 'flyonui/flyonui'; // Loads FlyonUI's interactive elements
import Alpine from 'alpinejs';

// Make Alpine available globally and start it
window.Alpine = Alpine;
Alpine.start();

document.querySelector('#app').innerHTML = `
<div x-data="{}">
	<div class="ui-bar-d bar">
		<h1>Floating Point calculator</h1>
		<button class="btn glass squircle-cor"><span class="icon-[solar--hamburger-menu-line-duotone]"></span></button>
	</div>
	<div class="content-sp">
		<div class=""></div>
	</div>
</div>
`

setupCounter(document.querySelector('#counter'))
