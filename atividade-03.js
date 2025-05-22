function adicionarItem() {
    let lista = document.getElementById('lista');
    let novoItem = document.createElement('li');
    novoItem.textContent = "Outro item";
    lista.appendChild(novoItem);
}