// Função para adicionar ao carrinho
function addToCart(mangaName) {
    alert(`Mangá "${mangaName}" adicionado ao carrinho!`);
}

// Event listeners para os botões de compra
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mangaName = this.getAttribute('data-manga');
            addToCart(mangaName);
        });
    });
});
