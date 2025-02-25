function constructionCrew(worker) {
    if (!worker.dizziness) {
        return worker;
    }

    worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
    worker.dizziness = false;

    return worker;
}