const onlinePlayers = document.querySelector('.jogadoresOn');

window.addEventListener('load', () => {
  console.log('Punho supremo de Asura!');
  randomizePlayers();
})

function randomizePlayers() {
  onlinePlayers.innerText = `Jogadores online: ${Math.floor(Math.random() * 10001).toFixed(0)}`;
}