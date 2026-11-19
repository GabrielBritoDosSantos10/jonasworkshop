
import { GameManager } from "./src/systems/GameManager.js";

const game = new GameManager();

// 1. Iniciar serviço
console.log("=== INICIANDO SERVIÇO ===");

console.log(
    game.startGame("screen_repair", {
        customerId: "customer_01",
        deviceId: "device_01"
    })
);

// 2. Diagnóstico
console.log("\n=== DIAGNÓSTICO ===");

console.log(game.completeCurrentStep());

// 3. Escolher material
console.log("\n=== SELEÇÃO DE MATERIAL ===");

console.log(game.submitMaterial("glass"));

// 4. Substituição
console.log("\n=== SUBSTITUIÇÃO ===");

console.log(game.completeCurrentStep());

// 5. Teste
console.log("\n=== TESTE DO APARELHO ===");

console.log(game.completeCurrentStep());

// 6. Reciclagem
console.log("\n=== RECICLAGEM ===");

console.log(game.completeCurrentStep());

// 7. Estado final
console.log("\n=== ESTADO FINAL ===");

console.log(game.getGameState());

// 8. Histórico
console.log("\n=== HISTÓRICO ===");

console.log(game.getRepairHistory());
