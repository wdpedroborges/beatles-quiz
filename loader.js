const loader = document.getElementById('loader');
const mensagemLoader = document.getElementById('mensagemLoader');

window.addEventListener('load', () => {
	setTimeout(() => {
		loader.style.display = 'none';
	}, 1000);
});