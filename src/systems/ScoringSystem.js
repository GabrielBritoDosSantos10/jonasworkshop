export class ScoringSystem {
    constructor() {
        this.score = 0;
        this.totalEarned = 0;
        this.totalLost = 0;
        this.repairHistory = [];
        this.points = {
            diagnosis: 50,
            material: 100,
            replacement: 100,
            testing: 150,
            recycling: 100,
            mistake: -25
        };
    }
    // Adiciona pontos ao jogador
    addPoints(amount, reason = "Pontuação recebida") {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 0) {
            return {
                success: false,
                message: "Quantidade de pontos inválida."
            };
        }
        this.score += amount;
        this.totalEarned += amount;
        return {
            success: true,
            message: reason,
            points: amount,
            currentScore: this.score
        };
    }
    // Remove pontos do jogador
    removePoints(amount, reason = "Penalidade aplicada") {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 0) {
            return {
                success: false,
                message: "Quantidade de pontos inválida."
            };
        }

        const removedPoints = Math.min(amount, this.score);

        this.score -= removedPoints;
        this.totalLost += removedPoints;

        return {
            success: true,
            message: reason,
            pointsLost: removedPoints,
            currentScore: this.score
        };
    }
    // Pontua uma etapa específica
    scoreStep(step) {
        const amount = this.points[step];
        if (amount === undefined) {
            return {
                success: false,
                message: "Etapa de pontuação desconhecida."
            };
        }
        if (step === "mistake") {
            return this.removePoints(
                Math.abs(amount),
                "Penalidade por tentativa incorreta"
            );
        }
        return this.addPoints(
            amount,
            `Etapa concluída: ${step}`
        );
    }
    // Registra a pontuação de um reparo concluído
    completeRepair(repairData) {
        if (!repairData || !repairData.repairId) {
            return {
                success: false,
                message: "Dados do reparo inválidos."
            };
        }
        const record = {
            repairId: repairData.repairId,
            repairName: repairData.repairName,
            pointsEarned: repairData.pointsEarned ?? 0,
            completedAt: new Date().toISOString()
        };
        this.repairHistory.push(record);
        return {
            success: true,
            message: "Pontuação do reparo registrada!",
            record
        };
    }    // Retorna a pontuação atual
    getScore() {
        return this.score;
    }
    // Retorna estatísticas da pontuação
    getStats() {
        return {
            currentScore: this.score,
            totalEarned: this.totalEarned,
            totalLost: this.totalLost,
            completedRepairs: this.repairHistory.length
        };
    }
    // Retorna o histórico de reparos
    getHistory() {
        return this.repairHistory;
    }
    // Reinicia a pontuação
    resetScore() {
        this.score = 0;
        this.totalEarned = 0;
        this.totalLost = 0;
        this.repairHistory = [];

        return {
            success: true,
            message: "Pontuação reiniciada."
        };
    }
}
