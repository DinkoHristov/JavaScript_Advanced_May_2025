function heroes() {
    class Heroe {
        mage(name) {
            class Mage {
                constructor(name) {
                    this.name = name;
                    this.health = 100;
                    this.mana = 100;
                }

                cast(spell) {
                    if (this.mana > 0) {
                        this.mana--;
                        console.log(`${name} cast ${spell}`);
                    }
                }
            }

            return new Mage(name);
        }

        fighter(name) {
            class Fighter {
                constructor(name) {
                    this.name = name;
                    this.health = 100;
                    this.stamina = 100;
                }

                fight() {
                    if (this.stamina > 0) {
                        this.stamina--;
                        console.log(`${this.name} slashes at the foe!`);
                    }
                }
            }

            return new Fighter(name);
        }
    }

    return new Heroe();
}