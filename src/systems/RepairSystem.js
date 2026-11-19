
import { repairs } from "../data/repairs.js";
import { materials } from "../data/materials.js";

export class RepairSystem {
    constructor() {
        this.currentRepair = null;
        this.currentStepIndex = 0;
        this.selectedMaterial = null;
        this.attempts = 0;
        this.status = "idle";
        this.history = [];
    }

    // Inicia um reparo pelo ID
    startRepair(repairId) {
        const repair = repairs.find(item => item.id === repairId);

        if (!repair) {
            return {
                success: false,
                message: "Reparo não encontrado."
            };
        }

        if (this.status === "in_progress") {
            return {
                success: false,
                message: "Já existe um reparo em andamento."
            };
        }

        this.currentRepair = repair;
        this.currentStepIndex = 0;
        this.selectedMaterial = null;
        this.attempts = 0;
        this.status = "in_progress";

        return {
            success: true,
            message: "Reparo iniciado!",
            repair: this.currentRepair,
            currentStep: this.getCurrentStep()
        };
    }

    // Retorna o reparo atual
    getCurrentRepair() {
        return this.currentRepair;
    }

    // Retorna a etapa atual
    getCurrentStep() {
        if (!this.currentRepair) {
            return null;
        }

        return this.currentRepair.steps[this.currentStepIndex] ?? null;
    }

    // Verifica se o material escolhido é adequado
    submitMaterial(materialId) {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Não existe um reparo em andamento."
            };
        }

        if (this.getCurrentStep() !== "material_selection") {
            return {
                success: false,
                message: "Não é o momento de selecionar um material."
            };
        }

        const material = materials.find(item => item.id === materialId);

        if (!material) {
            return {
                success: false,
                message: "Material não encontrado."
            };
        }

        this.attempts++;

        const correctMaterialId =
            this.currentRepair.materialQuestion.correctMaterialId;

        if (materialId === correctMaterialId) {
            this.selectedMaterial = material;

            return {
                success: true,
                correct: true,
                message: "Material correto!",
                explanation: this.currentRepair.materialQuestion.explanation,
                material
            };
        }

        return {
            success: true,
            correct: false,
            message: "Esse material não é o mais adequado.",
            explanation: this.currentRepair.materialQuestion.explanation,
            selectedMaterial: material
        };
    }

    // Avança para a próxima etapa
    completeStep() {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Não existe um reparo em andamento."
            };
        }

        const currentStep = this.getCurrentStep();

        if (!currentStep) {
            return {
                success: false,
                message: "Nenhuma etapa disponível."
            };
        }

        if (
            currentStep === "material_selection" &&
            !this.selectedMaterial
        ) {
            return {
                success: false,
                message: "Escolha o material correto antes de continuar."
            };
        }

        this.currentStepIndex++;

        if (this.currentStepIndex >= this.currentRepair.steps.length) {
            return this.finishRepair();
        }

        return {
            success: true,
            message: "Etapa concluída!",
            nextStep: this.getCurrentStep(),
            progress: this.getProgress()
        };
    }

    // Finaliza o reparo
    finishRepair() {
        this.status = "completed";

        const result = {
            repairId: this.currentRepair.id,
            repairName: this.currentRepair.name,
            selectedMaterial: this.selectedMaterial,
            attempts: this.attempts,
            status: this.status,
            completedAt: new Date().toISOString()
        };

        this.history.push(result);

        return {
            success: true,
            message: "Reparo concluído com sucesso!",
            result
        };
    }

    // Retorna o progresso do reparo
    getProgress() {
        if (!this.currentRepair) {
            return 0;
        }

        return Math.round(
            (this.currentStepIndex / this.currentRepair.steps.length) * 100
        );
    }
F
    // Retorna o resultado do reparo atual
    getResult() {
        if (this.status !== "completed") {
            return null;
        }

        return this.history[this.history.length - 1] ?? null;
    }

    // Cancela o reparo atual
    cancelRepair() {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Não existe um reparo em andamento."
            };
        }

        this.currentRepair = null;
        this.currentStepIndex = 0;
        this.selectedMaterial = null;
        this.attempts = 0;
        this.status = "idle";

        return {
            success: true,
            message: "Reparo cancelado."
        };
    }
}
