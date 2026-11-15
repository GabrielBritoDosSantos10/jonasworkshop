class MaterialSystem {
    constructor(dados) {
        this.componente = dados.a;
        this.device = dados.b;

        //device representa o dispositivo que o elemento conserta
    }

    consulta(order) {
        if (ID[valor].a + ID[valor].b == order) {
            alert("O dispositivo é compatível!")
        } else {
            alert("Dispositivo não compatível")
        }
    }
}
//Compatibilidade de cada um
let cobre = new MaterialSystem({
    a: "Cobre",
    b: "Celular"
})

let ouro = new MaterialSystem({
    a: "Ouro",
    b: "Conectores"
})

let silicio = new MaterialSystem({
    a: "Silício",
    b: "chips"
})

let indio = new MaterialSystem({
    a: "Indio",
    b: "Película"
})

let estanho = new MaterialSystem({
    a: "Estanho",
    b: "Soldagem"
})

let litio = new MaterialSystem({
    a: "Lítio",
    b: "Baterias"
})

//Array que lista todos os objetos
let ID = [
    cobre,
    ouro,
    silicio,
    indio,
    estanho,
    litio

]
//Todos os componentes que tem no jogo
let componente = [
    "Cobre",
    "Ouro",
    "Silício",
    "Índio",
    "Estanho",
    "Lítio"
];

//Todos os dispositivos que tem no jogo
let dispositivo = [
    "Celular",
    "Conectores",
    "Chips",
    "Película",
    "Soldagem",
    "Baterias"
];

function pedido() {
  
    valor = Math.floor(Math.random() * 5) + 0
    valorDois = Math.floor(Math.random() * 5) + 0
    
    let order = {
        material: ID[valor],
        componente: componente[valor],
        dispositivo: dispositivo[valorDois]
    }
    alert(order.componente + " " + order.dispositivo)
    ID[valor].consulta(order.componente + order.dispositivo)
}
pedido()

function dica() {
    valor = Math.floor(Math.random() * 1) + 1
    let dica = document.getElementById("dica")
    
    switch(valor) {
    case 1: 
       alert("sssssssssssss")
    break
    
    case 2: 
        alert("kkkkkkkkkkkkk")
    break
}
}


//ANOTAÇÕES SOBRE O QUE CADA ELEMENTO QUÍMICO PARTICIPA EM DETERMINADA MANUTENÇÃO

// Elemento químico	Propriedade	Aplicação no celular
//- Cobre (Cu)	Alta condutividade elétrica	Contatos e circuitos elétricos.
//- Ouro (Au)	Alta condutividade e resistência à corrosão	Conectores e contatos eletrônicos.
//- Silício (Si)	Propriedades semicondutoras	Processadores e chips.
//- Índio (In)	Forma compostos transparentes e condutores	Telas sensíveis ao toque (ITO).
//-Estanho (Sn)	Baixo ponto de fusão em ligas de solda	Soldagem de componentes eletrônicos.
//- Lítio (Li)	Alta capacidade eletroquímica	Baterias recarregáveis.
// Cobalto (Co)	Estabilidade eletroquímica em determinados compostos	Baterias de íons de lítio.
// Níquel (Ni)	Participa de reações eletroquímicas	Baterias recarregáveis.
// Alumínio (Al)	Baixa densidade e boa resistência à corrosão	Estrutura e componentes internos.
// Neodímio (Nd)	Forte propriedade magnética em ligas	Alto-falantes e motores de vibração.
// Tântalo (Ta)	Forma óxidos com propriedades dielétricas	Capacitores eletrônicos.
// Prata (Ag)	Excelente condutividade elétrica	Materiais e contatos condutores.

// Exemplos específicos de manutenção
// - Troca de tela: o vidro temperado utiliza materiais à base de sílica, enquanto o ITO utiliza índio e estanho.
// - Reparo de placa-mãe: o estanho é utilizado em ligas de solda para fixar componentes.
// - Substituição de bateria: o lítio é um dos elementos fundamentais das baterias recarregáveis.
// - Reparo de conectores: o ouro é utilizado em contatos por sua resistência à corrosão.
// - Reparo de alto-falantes: o neodímio pode compor os ímãs utilizados no sistema.