import viteLogo from './vite.svg';

import './index.css';

const app = document.querySelector('#app');
const htmlContent = `
	<h1 class='wrap'>Hello <span class='vite-text'>Vite</span> <img src="${viteLogo}" class="vite-logo" /></h1>
`;
app.innerHTML = htmlContent;
