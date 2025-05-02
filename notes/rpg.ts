interface CharacterStats {
    strength: number;
    agility: number;
    intelligence: number;
}

abstract class GameCharacter implements CharacterStats {
    public readonly id: number;
    public name: string;
    protected level: number;
    private _health: number;
    static maxLevel: number = 100;

    strength: number;
    agility: number;
    intelligence: number;

    constructor(
        id: number,
        name: string,
        level: number,
        health: number,
        strength: number,
        agility: number,
        intelligence: number
    ) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._health = health;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    get health() {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            this._health = 0;
        } else if (value > 100) {
            this._health = 100;
        } else {
            this._health = value;
        }
    }

    abstract attack(): string;

    levelUp(): void {
        if (this.level === GameCharacter.maxLevel) {
            console.log('You are at max level');
        } else {
            this.level += 1;
        }
    }
}

class Rogue extends GameCharacter {
    constructor(id: number, name: string, level: number, health: number) {
        super(id, name, level, health, 30, 90, 60);
    }

    attack(): string {
        return `${this.name} shoots their bow!`;
    }

    getStats(): CharacterStats {
        return {
            strength: this.strength,
            agility: this.agility,
            intelligence: this.intelligence
        };
    }
}

class Warrior extends GameCharacter {
    constructor(id: number, name: string, level: number, health: number) {
        super(id, name, level, health, 80, 40, 20);
    }

    attack(): string {
        return `${this.name} swings their mighty blade!`;
    }

    getStats(): CharacterStats {
        return {
            strength: this.strength,
            agility: this.agility,
            intelligence: this.intelligence
        };
    }
}


const conan = new Warrior(1, "Conan", 10, 85);

console.log(conan.attack()); 
console.log(conan.getStats()); 

conan.health = 120;
console.log(conan.health);

conan.levelUp(); 
