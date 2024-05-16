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

function buscaCortePorId(id) {
    const cortes = barbearia.cortes;
    for (let i = 0; i < cortes.length; i++) {
        if (cortes[i].id === id) {
            return cortes[i];
        }
    } 
    return "Corte não encontrado";
}

function buscaBarbaPorId(id) {
    const barbas = barbearia.barbas;
    for (let i = 0; i < barbas.length; i++) {
        if (barbas[i].id === id) {
            return barbas[i];
        }
    } 
    return "Barba não encontrada";
}

function verificaStatusBarbearia() {
    return barbearia.estaAberto ? "Estamos abertos" : "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    };

    return pedido;
}

function atualizarServico(lista, id, novoValor, novoTipo) {
    for (const item of lista) {
        if (item.id === id) {
            item.tipo = novoTipo;
            item.valor = novoValor;

            return lista
        }
    }
    return lista
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
