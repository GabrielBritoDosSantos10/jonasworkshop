export const materials = [
  {
    id: "copper",
    name: "Cobre",
    category: "Metal",

    properties: {
      electricalConductivity: "Alta",
      thermalConductivity: "Alta",
      flexibility: "Alta",
      density: "Alta"
    },

    applications: [
      "Fios e cabos",
      "Trilhas de circuitos",
      "Contatos elétricos"
    ],

    advantages: [
      "Excelente condução de eletricidade",
      "Boa condução de calor",
      "Pode ser moldado em fios e chapas"
    ],

    limitations: [
      "Pode sofrer oxidação e corrosão",
      "É relativamente pesado",
      "Pode ser danificado por esforço mecânico"
    ],

    recycling:
      "Pode ser recuperado e reciclado, reduzindo a necessidade de extração de cobre."
  },

  {
    id: "silicon",
    name: "Silício",
    category: "Semicondutor",

    properties: {
      electricalConductivity: "Controlável",
      thermalConductivity: "Moderada",
      flexibility: "Baixa",
      density: "Baixa"
    },

    applications: [
      "Microprocessadores",
      "Transistores",
      "Circuitos integrados"
    ],

    advantages: [
      "Permite controlar a passagem de corrente elétrica",
      "É essencial na fabricação de componentes eletrônicos",
      "Possibilita a criação de circuitos miniaturizados"
    ],

    limitations: [
      "É um material quebradiço",
      "Seu processamento exige técnicas especializadas",
      "Seu funcionamento depende de condições específicas de fabricação e operação"
    ],

    recycling:
      "A recuperação do silício de componentes eletrônicos exige processos especializados."
  },

  {
    id: "aluminum",
    name: "Alumínio",
    category: "Metal",

    properties: {
      electricalConductivity: "Boa",
      thermalConductivity: "Alta",
      flexibility: "Moderada",
      density: "Baixa"
    },

    applications: [
      "Carcaças de dispositivos",
      "Estruturas internas",
      "Dissipadores de calor"
    ],

    advantages: [
      "É leve em comparação com muitos outros metais",
      "Conduz bem o calor",
      "Forma uma camada superficial de óxido que ajuda a protegê-lo da corrosão"
    ],

    limitations: [
      "É menos condutor elétrico que o cobre",
      "Pode sofrer deformações",
      "Sua camada de óxido pode dificultar conexões elétricas"
    ],

    recycling:
      "É amplamente reciclável e sua reciclagem geralmente consome menos energia que a produção a partir do minério."
  },

  {
    id: "glass",
    name: "Vidro",
    category: "Material inorgânico",

    properties: {
      electricalConductivity: "Muito baixa",
      thermalConductivity: "Baixa",
      transparency: "Alta",
      hardness: "Alta",
      flexibility: "Muito baixa"
    },

    applications: [
      "Cobertura de telas",
      "Lentes de câmeras",
      "Proteção de displays"
    ],

    advantages: [
      "Apresenta transparência",
      "Possui boa dureza superficial",
      "Pode proteger componentes internos"
    ],

    limitations: [
      "É quebradiço",
      "Pode trincar com impactos",
      "Pode ser danificado por variações bruscas de temperatura"
    ],

    recycling:
      "A reciclagem depende do tipo de vidro e da separação adequada dos materiais."
  },

  {
    id: "polymer",
    name: "Polímeros",
    category: "Material orgânico",

    properties: {
      electricalConductivity: "Geralmente muito baixa",
      thermalConductivity: "Geralmente baixa",
      flexibility: "Variável",
      density: "Geralmente baixa"
    },

    applications: [
      "Isolamento de fios",
      "Revestimento de cabos",
      "Carcaças e peças plásticas",
      "Adesivos e componentes flexíveis"
    ],

    advantages: [
      "Podem ser leves",
      "Podem apresentar flexibilidade",
      "Muitos funcionam como isolantes elétricos"
    ],

    limitations: [
      "Alguns podem deformar com o calor",
      "Podem sofrer desgaste com o tempo",
      "Nem todos os tipos são facilmente recicláveis"
    ],

    recycling:
      "A reciclagem depende do tipo de polímero e da identificação e separação corretas."
  },

  {
    id: "graphite",
    name: "Grafite",
    category: "Material não metálico",

    properties: {
      electricalConductivity: "Boa",
      thermalConductivity: "Boa",
      flexibility: "Baixa",
      structure: "Camadas de átomos de carbono"
    },

    applications: [
      "Ânodos de baterias de íons de lítio",
      "Componentes eletroquímicos"
    ],

    advantages: [
      "Consegue conduzir eletricidade",
      "Sua estrutura em camadas permite a inserção de íons de lítio",
      "É utilizado em baterias recarregáveis"
    ],

    limitations: [
      "É relativamente quebradiço",
      "Seu desempenho depende da estrutura e pureza do material",
      "Não substitui metais em todas as aplicações elétricas"
    ],

    recycling:
      "Pode ser recuperado em processos especializados de reciclagem de baterias."
  }
];
