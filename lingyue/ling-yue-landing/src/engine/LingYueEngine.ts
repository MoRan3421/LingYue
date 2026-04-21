export class LingYueEngine {
    private entities: Entity[] = [];
    private player: Entity;
    private gameTime = 0;
    private lastUpdate = Date.now();
    
    // Dragon States
    private dragonResonances = 0; // Max 7

    constructor(canvas: HTMLCanvasElement) {
        // Player
        this.player = new Entity(400, 300, 'blue', true, 'Hero', '灵源');
        this.entities.push(this.player);

        // Bases
        this.entities.push(new Entity(100, 100, 'blue', false, 'Base', 'Blue Crystal'));
        this.entities.push(new Entity(2900, 2900, 'red', false, 'Base', 'Red Crystal'));

        // Triple Lane Towers (Simulation)
        // Mid
        this.entities.push(new Entity(800, 800, 'blue', false, 'Tower', 'Mid-T1'));
        this.entities.push(new Entity(2200, 2200, 'red', false, 'Tower', 'Mid-Enemy-T1'));
        // Top
        this.entities.push(new Entity(200, 800, 'blue', false, 'Tower', 'Top-T1'));
        this.entities.push(new Entity(2800, 2200, 'red', false, 'Tower', 'Top-Enemy-T1'));
        // Bot
        this.entities.push(new Entity(800, 200, 'blue', false, 'Tower', 'Bot-T1'));
        this.entities.push(new Entity(2200, 2800, 'red', false, 'Tower', 'Bot-Enemy-T1'));

        this.spawnTripleLaneMinions();
    }

    public update() {
        const now = Date.now();
        const dt = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        this.gameTime += dt;

        // Seven Dragon Check
        if (this.gameTime > 1200 && Math.random() < 0.001 && this.dragonResonances < 7) {
            this.dragonResonances++;
            this.applyDragonBuff();
        }

        this.entities = this.entities.filter(e => e.hp > 0);
        this.entities.forEach(e => e.update(dt, this.entities, this.gameTime));
    }

    private applyDragonBuff() {
        const factor = this.dragonResonances === 7 ? 6.0 : 1.2;
        this.player.hp *= factor;
        this.player.dmg *= factor;
    }

    private spawnTripleLaneMinions() {
        // Spawn for Mid, Top, Bot
        ['mid', 'top', 'bot'].forEach(lane => {
            for(let i=0; i<3; i++) {
                this.entities.push(new Entity(200, 200, 'blue', false, 'Minion', `${lane}_B_Minion`));
                this.entities.push(new Entity(2800, 2800, 'red', false, 'Minion', `${lane}_R_Minion`));
            }
        });
    }

    public getPlayerStats() {
        return {
            x: this.player.x, y: this.player.y, hp: this.player.hp, resonances: this.dragonResonances,
            entities: this.entities.map(e => ({ x: e.x, y: e.y, team: e.team, type: e.type, hp: e.hp }))
        };
    }

    public setTarget(x: number, y: number) {
        this.player.targetX = x * 2;
        this.player.targetY = y * 2;
    }
}

class Entity {
    public hp = 1000;
    public dmg = 100;
    public targetX: number;
    public targetY: number;

    constructor(public x: number, public y: number, public team: 'blue'|'red', private isPlayer: boolean, public type: 'Hero'|'Minion'|'Tower'|'Base', public name: string) {
        this.targetX = x; this.targetY = y;
        if (type === 'Tower' || type === 'Base') this.hp = 10000;
        if (type === 'Minion') this.hp = 400;
    }

    update(dt: number, all: Entity[], time: number) {
        if (this.type === 'Tower' || this.type === 'Base') return;

        const nearest = all.find(e => e.team !== this.team && e.hp > 0);
        if (nearest) {
            this.targetX = nearest.x;
            this.targetY = nearest.y;
            const dist = Math.sqrt((this.x - nearest.x)**2 + (this.y - nearest.y)**2);
            if (dist < 150) nearest.hp -= this.dmg * dt;
        }

        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > 10) {
            const speed = this.type === 'Minion' ? 100 : 250;
            this.x += (dx/dist) * speed * dt;
            this.y += (dy/dist) * speed * dt;
        }
    }
}
