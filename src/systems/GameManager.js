
import { RepairSystem } from "./RepairSystem.js";
import { ScoringSystem } from "./ScoringSystem.js";

export class GameManager {
    constructor() {
        // Inicializa os sistemas principais
        this.repairSystem = new RepairSystem();
        this.scoringSystem = new ScoringSystem();
        
        this.materialScored = false;

        // Informações do serviço atual
        this.currentService = null;

        // Controle da pontuação do reparo atual
        this.repairScoreStart = 0;
        this.earnedScoreStart = 0;
        this.lostScoreStart = 0;

        // Evita registrar o mesmo reparo duas vezes
        this.repairRecorded = false;

        this.status = "idle";
    }

    // Inicia uma nova sessão de reparo
    startGame(repairId, serviceInfo = {}) {
        if (this.status === "in_progress") {
            return {
                success: false,
                message: "Já existe um reparo em andamento."
            };
        }

        const result = this.repairSystem.startRepair(repairId);

        if (!result.success) {
            return result;
        }

        // Guarda informações adicionais do serviço
        this.currentService = {
            repairId,
            customerId: serviceInfo.customerId ?? null,
            deviceId: serviceInfo.deviceId ?? null
        };

        // Guarda a pontuação inicial
        const stats = this.scoringSystem.getStats();

        this.repairScoreStart = stats.currentScore;
        this.earnedScoreStart = stats.totalEarned;
        this.lostScoreStart = stats.totalLost;

        this.repairRecorded = false;
        this.materialScored = false;
        this.status = "in_progress";

        return {
            success: true,
            message: "Serviço iniciado com sucesso!",
            service: this.currentService,
            currentRepair: result.repair,
            currentStep: result.currentStep,
            score: this.scoringSystem.getScore()
        };
    }

    // Retorna o reparo atual
    getCurrentRepair() {
        return this.repairSystem.getCurrentRepair();
    }

    // Retorna a etapa atual
    getCurrentStep() {
        return this.repairSystem.getCurrentStep();
    }

    // Processa a escolha de material
    submitMaterial(materialId) {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Nenhum serviço está em andamento."
            };
        }

        const result = this.repairSystem.submitMaterial(materialId);

        if (!result.success) {
            return result;
        }

        if (result.correct && !this.materialScored) {
            this.scoringSystem.scoreStep("material");
            this.materialScored = true;
        } else if (!result.correct) {
            this.scoringSystem.scoreStep("mistake");
        }

        return {
            ...result,
            score: this.scoringSystem.getScore(),
            progress: this.repairSystem.getProgress()
        };
    }

    // Conclui a etapa atual e avança o reparo
    completeCurrentStep() {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Nenhum serviço está em andamento."
            };
        }

        const currentStep = this.repairSystem.getCurrentStep();

        if (!currentStep) {
            return {
                success: false,
                message: "Não existe uma etapa disponível."
            };
        }

        // A seleção de material possui validação própria
        if (currentStep === "material_selection") {
            return {
                success: false,
                message: "Selecione o material correto antes de continuar."
            };
        }

        // Tenta concluir a etapa no RepairSystem
        const result = this.repairSystem.completeStep();

        if (!result.success) {
            return result;
        }

        // Pontua somente depois que a etapa foi concluída
        const stepPoints = {
            diagnosis: "diagnosis",
            replacement: "replacement",
            testing: "testing",
            recycling: "recycling"
        };

        const scoringStep = stepPoints[currentStep];

        if (scoringStep) {
            this.scoringSystem.scoreStep(scoringStep);
        }

        // Verifica se o reparo terminou
        if (this.repairSystem.status === "completed") {
            this.finishGame();

            return {
                ...result,
                message: "Reparo concluído!",
                finalScore: this.scoringSystem.getScore(),
                result: this.repairSystem.getResult()
            };
        }

        return {
            ...result,
            score: this.scoringSystem.getScore(),
            progress: this.repairSystem.getProgress()
        };
    }

    // Finaliza a sessão e registra o resultado
    finishGame() {
        if (this.repairRecorded) {
            return {
                success: false,
                message: "Este reparo já foi registrado."
            };
        }

        const stats = this.scoringSystem.getStats();

        const pointsEarned =
            (stats.totalEarned - this.earnedScoreStart) -
            (stats.totalLost - this.lostScoreStart);

        const repair = this.repairSystem.getCurrentRepair();

        const result = this.scoringSystem.completeRepair({
            repairId: repair.id,
            repairName: repair.name,
            pointsEarned
        });

        if (!result.success) {
            return result;
        }

        this.repairRecorded = true;
        this.status = "completed";

        return result;
    }

    // Cancela a sessão atual
    cancelGame() {
        if (this.status !== "in_progress") {
            return {
                success: false,
                message: "Não existe uma sessão em andamento."
            };
        }

        const result = this.repairSystem.cancelRepair();

        if (!result.success) {
            return result;
        }

        this.currentService = null;
        this.status = "idle";

        return {
            success: true,
            message: "Sessão cancelada."
        };
    }

    // Retorna o estado geral do jogo
    getGameState() {
        return {
            status: this.status,
            service: this.currentService,
            repair: this.getCurrentRepair(),
            currentStep: this.getCurrentStep(),
            progress: this.repairSystem.getProgress(),
            score: this.scoringSystem.getScore(),
            stats: this.scoringSystem.getStats()
        };
    }

    // Retorna as estatísticas gerais
    getGameStats() {
        return this.scoringSystem.getStats();
    }

    // Retorna o histórico de reparos
    getRepairHistory() {
        return this.scoringSystem.getHistory();
    }
}
