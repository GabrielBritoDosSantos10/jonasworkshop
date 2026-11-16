
import { materials } from "../data/materials.js";

// Verifica se existem materiais cadastrados
console.log("Total de materiais:", materials.length);

// Exibe todos os materiais
console.table(
  materials.map(material => ({
    id: material.id,
    nome: material.name,
    categoria: material.category
  }))
);

// Verifica se os identificadores são únicos
const ids = materials.map(material => material.id);
const idsUnicos = new Set(ids);

if (ids.length !== idsUnicos.size) {
  console.error("ERRO: existem materiais com IDs duplicados!");
} else {
  console.log("OK: todos os IDs são únicos.");
}

// Verifica se os campos obrigatórios existem
for (const material of materials) {
  if (
    !material.id ||
    !material.name ||
    !material.category ||
    !material.properties ||
    !material.applications ||
    !material.advantages ||
    !material.limitations ||
    !material.recycling
  ) {
    console.error("Material incompleto:", material.name);
  }
}

console.log("Verificação concluída!");
