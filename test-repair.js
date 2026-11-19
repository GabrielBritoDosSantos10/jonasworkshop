
import { RepairSystem } from "./src/systems/RepairSystem.js";

const repairSystem = new RepairSystem();

// 1. Iniciar reparo
console.log("INICIANDO REPARO:");

console.log(
    repairSystem.startRepair("screen_repair")
);

// 2. Concluir diagnóstico
console.log("\nCONCLUINDO DIAGNÓSTICO:");

console.log(repairSystem.completeStep());

// 3. Selecionar material
console.log("\nSELECIONANDO MATERIAL:");

console.log(repairSystem.submitMaterial("glass"));

// 4. Avançar para substituição
console.log("\nAVANÇANDO ETAPA:");

console.log(repairSystem.completeStep());

// 5. Concluir substituição
console.log(repairSystem.completeStep());

// 6. Concluir teste
console.log(repairSystem.completeStep());

// 7. Concluir reciclagem
console.log(repairSystem.completeStep());

// 8. Resultado
console.log("\nRESULTADO FINAL:");

console.log(repairSystem.getResult());

console.log("\nPROGRESSO:");

console.log(repairSystem.getProgress());
