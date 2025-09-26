let selectedAvatar = null;
let userName = '';

// Função para selecionar o avatar
document.querySelectorAll('.avatar-images img').forEach(img => {
  img.addEventListener('click', function() {
    selectedAvatar = this.src;
    document.querySelectorAll('.avatar-images img').forEach(img => {
      img.style.border = 'none';
    });
    this.style.border = '5px solid #eb9b05'; // Destacar o avatar selecionado
  });
});

// Função para exibir o container de avatar quando a barra de progresso chega a 100%
setTimeout(() => {
  document.getElementById('avatar-container').style.display = 'block';
}, 5000); // Espera 5 segundos para carregar o avatar container

// Função para iniciar o jogo e transitar para a próxima página
document.getElementById('start-button').addEventListener('click', function() {
  userName = document.getElementById('nickname').value;

  // Validar se o nome foi inserido e um avatar foi selecionado
  if (!selectedAvatar || userName.trim() === '') {
    alert('Selecione um avatar e insira um nome!');
    return;
  }

  // Exibir o efeito de esmaecimento
  document.getElementById('dark-overlay').style.display = 'block';

  // Salvar dados em localStorage para uso posterior no jogo
  localStorage.setItem('userAvatar', selectedAvatar);
  localStorage.setItem('userName', userName);

  // Redirecionar para outra página após o efeito de esmaecimento
  setTimeout(() => {
    window.location.href = 'index2.html'; // Substitua com o link correto
  }, 1000); // Espera 1 segundo para a transição
});

// Atualiza o contador de moedas na interface
function updateCoins() {
  let coins = localStorage.getItem('coins') || 0;
  document.getElementById('coin-count').innerText = coins;
}

// Inicia o jogo e adiciona moedas conforme o nível escolhido
function startGame(page, coinReward) {
  let coins = localStorage.getItem('coins') || 0;
  coins = parseInt(coins) + coinReward;
  localStorage.setItem('coins', coins);
  window.location.href = page; // Redireciona para a página do nível
}

// Carrega avatar e nome do jogador armazenados
window.onload = function() {
  updateCoins();

  const userAvatar = localStorage.getItem('userAvatar');
  const userName = localStorage.getItem('userName');

  if (userAvatar) {
      document.getElementById('avatar-img').src = userAvatar;
  }

  if (userName) {
      document.getElementById('player-name').innerText = userName;
  }
};
