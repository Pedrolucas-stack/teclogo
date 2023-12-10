const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

function initMap() {
    // Coordenadas do seu endereço
    var coordenadas = { lat: -21.165324, lng: -47.786152 };

    // Opções do mapa
    var opcoesDoMapa = {
        center: coordenadas,
        zoom: 15,
    };

    // Criar o mapa
    var mapa = new google.maps.Map(document.getElementById('mapa'), opcoesDoMapa);

    // Adicionar marcador ao mapa
    var marcador = new google.maps.Marker({
        position: coordenadas,
        map: mapa,
        title: 'Av. Cavalheiro Paschoal Innecchi, 500, Ribeirão Preto - SP'
    });
}

function toggleChat() {
    var chatContainer = document.getElementById('chatContainer');

    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}

// Adiciona um evento de clique no documento para fechar o chat se clicar fora dele
document.addEventListener('click', function (event) {
    var chatContainer = document.getElementById('chatContainer');
    var chatButton = document.getElementById('chatButton');

    // Verifica se o clique não foi dentro do contêiner do chat e do botão
    if (!chatContainer.contains(event.target) && !chatButton.contains(event.target)) {
        chatContainer.style.display = 'none';
    }
});