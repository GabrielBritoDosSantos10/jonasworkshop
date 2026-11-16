
import { customers } from "../data/customers.js";
import { devices } from "../data/devices.js";

// Exibe os clientes e seus respectivos aparelhos
for (const customer of customers) {

  console.log("\n-------------------------");
  console.log("CLIENTE:", customer.name);
  console.log("FALA:", customer.dialogue);

  // Procura os aparelhos pertencentes ao cliente
  const customerDevices = devices.filter(
    device => device.customerId === customer.id
  );

  for (const device of customerDevices) {
    console.log("APARELHO:", device.brand, device.model);
    console.log("TIPO:", device.category);
    console.log("COMPONENTES:", device.repairableComponents);
  }
}

// Verifica se todos os aparelhos possuem um cliente válido
for (const device of devices) {

  const ownerExists = customers.some(
    customer => customer.id === device.customerId
  );

  if (!ownerExists) {
    console.error(
      "ERRO: aparelho sem cliente válido:",
      device.id
    );
  }
}

console.log("\nVerificação concluída!");
