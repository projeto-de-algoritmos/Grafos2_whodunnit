export class Suspeito {
    id = -1; //Começar com -1 para saber se foi inicializado ou não
    nome = ''; //Começar com nome vazio
    acusacoes = []; //Começar com array vazio mas preencher com os ids dos suspeitos acusados pelo suspeito atual
    constructor(id, nome) {
        this.id = id; //Id que identifica cada um dos suspeitos
        this.nome = nome; //Nome da pessoa
    }
    acusa(acusacoes) {
        acusacoes.map((acusacao) => {
            this.acusacoes.push(acusacao);
        })
    }
}