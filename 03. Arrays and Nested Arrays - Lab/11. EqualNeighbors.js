function equalNeighbors(neighbors) {
    let equalNeighborsCount = 0;
    let neighborsLength = neighbors[0].length;

    for (let i = 0; i <= neighbors.length - 1; i++) {
        for (let j = 0; j <= neighborsLength - 1; j++) {
            let currentNeighbor = neighbors[i][j];
            let nextNeighbor = neighbors[i][j + 1];

            if (i + 1 <= neighbors.length - 1) {
                let downNeighbor = neighbors[i + 1][j];

                if (currentNeighbor === downNeighbor ) {
                    equalNeighborsCount++;
                }
            }

            if (currentNeighbor === nextNeighbor) {
                equalNeighborsCount++;
            }
        }
    }

    return equalNeighborsCount;
}