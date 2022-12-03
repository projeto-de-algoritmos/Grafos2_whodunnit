export class Suspeito {
    id = -1; //Começar com -1 para saber se foi inicializado ou não
    nome = ''; //Começar com nome vazio
    acusacoes = []; //Começar com array vazio
    constructor(id, nome, acusacoes){
        this.id = id; //Id que identifica cada um dos suspeitos
        this.nome = nome; //Nome da pessoa
        this.acusa(acusacoes); //Coloca todas as acusações dentro do array acusacoes
    }
    acusa(acusacoes) {
        acusacoes.map((acusacao) =>{
            this.acusacoes.push(acusacao);
        })
    }
}