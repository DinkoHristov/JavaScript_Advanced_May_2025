function heroicInventory(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroesRegister = [];
    
    for (let i = 0; i < input.length; i++) {
        if (!input[i].trim()) {
            continue;
        }
        
        let heroInfo = input[i].split(' / ');

        let items = heroInfo[2] ? heroInfo[2].split(', ') : [];
        let hero = new Hero(heroInfo[0], Number(heroInfo[1]), items);

        heroesRegister.push(hero);
    }

    console.log(JSON.stringify(heroesRegister));
}

heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara',
        '                '
    ]        
);