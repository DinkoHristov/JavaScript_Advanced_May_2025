function carFactory(car) {
    const engines = 
    [
        { SmallEngine: { power: 90, volume: 1800 } },
        { NormalEngine: { power: 120, volume: 2400 } },
        { MonsterEngine: { power: 200, volume: 3500 } },
    ];

    const carriages = 
    [
        { Hatchback: { type: 'hatchback', color: car.color } },
        { Coupe: { type: 'coupe', color: car.color } },
    ];

    let choosenEngine = null;
    let choosenCarriage = null;

    // Choose best engine
    if (car.power <= 90) {
        let smallEngine = engines.find(x => x.SmallEngine);
        choosenEngine = smallEngine.SmallEngine;
    } else if (car.power <= 120) {
        let normalEngine = engines.find(x => x.NormalEngine);
        choosenEngine = normalEngine.NormalEngine;
    } else {
        let monsterEngine = engines.find(x => x.MonsterEngine);
        choosenEngine = monsterEngine.MonsterEngine;
    }

    // Choose best carriage
    if (car.carriage === 'hatchback') {
        let hatchback = carriages.find(x => x.Hatchback);
        choosenCarriage = hatchback.Hatchback;
    } else if (car.carriage === 'coupe') {
        let coupe = carriages.find(x => x.Coupe);
        choosenCarriage = coupe.Coupe;
    }
    
    if (car.wheelsize % 2 === 0) {
        car.wheelsize = car.wheelsize - 1;
    }

    return { 
        model: car.model, 
        engine: { power: choosenEngine.power, volume: choosenEngine.volume }, 
        carriage: { type: choosenCarriage.type, color: choosenCarriage.color},
        wheels: [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    };
}