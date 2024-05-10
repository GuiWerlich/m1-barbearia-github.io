const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};

cortes = barbearia.cortes
barbas = barbearia.barbas


function buscaCortePorId(id) {
    for (let i = 0; i < cortes.length; i++) {
        if (cortes[i].id === id) {
            nomeCorte = cortes[i]
            return nomeCorte
        }
    } 
    return "Corte não encontrado";

}


function buscaBarbaPorId(id) {
    for (let i = 0; i < barbas.length; i++) {
        if (barbas[i].id === id) {
            nomeBarba = barbas[i]
            return nomeBarba
        }
    } 
    return "Barba não encontrada";
}


function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return "Estamos abertos"
    } return "Estamos fechados"
}

function retornaTodosCortes() {
    return cortes
}

function retornaTodasBarbas() {
    return barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {

    const corte = buscaCortePorId(corteId)
    const barba = buscaBarbaPorId(barbaId)

    const pedido = {
    nome: nomeCliente,
    pedidoCorte: corte.tipo,
    pedidoCortePreco: corte.valor,
    pedidoBarba: barba.tipo,
    pedidoBarbaPreco: barba.valor
    }

    return pedido
}



function atualizarServico(lista, id, valor, tipo) {
   
}

function calculaTotal(pedido) {
    return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco
}
