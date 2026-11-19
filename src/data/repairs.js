
export const repairs = [
  {
    id: "screen_repair",
    name: "Troca de tela",
    component: "screen",
    title: "Tela quebrada",
    description: "O aparelho sofreu uma queda e sua tela está trincada.",
    difficulty: "easy",

    materialQuestion: {
      question: "Qual material é utilizado na cobertura transparente de muitas telas de smartphones?",
      correctMaterialId: "glass",
      explanation: "O vidro apresenta transparência e dureza superficial, sendo utilizado na cobertura de telas."
    },

    steps: [
      "diagnosis",
      "material_selection",
      "replacement",
      "testing",
      "recycling"
    ]
  },

  {
    id: "battery_repair",
    name: "Substituição de bateria",
    component: "battery",
    title: "Bateria com baixa autonomia",
    description: "O aparelho está descarregando rapidamente.",
    difficulty: "medium",

    materialQuestion: {
      question: "Qual material é utilizado como ânodo em muitas baterias de íons de lítio?",
      correctMaterialId: "graphite",
      explanation: "O grafite é utilizado como material do ânodo em muitas baterias de íons de lítio."
    },

    steps: [
      "diagnosis",
      "material_selection",
      "replacement",
      "testing",
      "recycling"
    ]
  },

  {
    id: "charging_port_repair",
    name: "Reparo do conector de carga",
    component: "charging_port",
    title: "Celular não carrega",
    description: "O aparelho não reconhece o carregador.",
    difficulty: "medium",

    materialQuestion: {
      question: "Qual metal é amplamente utilizado em contatos elétricos devido à sua alta condutividade?",
      correctMaterialId: "copper",
      explanation: "O cobre possui alta condutividade elétrica e é utilizado em contatos e trilhas de circuitos."
    },

    steps: [
      "diagnosis",
      "material_selection",
      "replacement",
      "testing",
      "recycling"
    ]
  }
];
