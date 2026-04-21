const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const path = require('path');

app.use(express.json());

// API: Get Hero Matrix
app.get('/api/heroes', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/hero_matrix.json'), 'utf8');
        res.json(JSON.parse(data));
    } catch (e) {
        res.status(500).json({ error: "Could not load hero matrix" });
    }
});

// Ling Yue Core: Sovereign Database State
let worldState = {
    totalEntities: 108,
    activeMatchmakings: 42,
    fairnessEntropy: 0.008, // AURA Threshold
};

let users = {
    "TuanTuan": "panda123" // Default Sovereign Architect
};

// API: Authentication
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.json({ success: true, token: `AURA_${Math.random().toString(36).substr(2, 9)}`, username });
    } else {
        res.status(401).json({ success: false, message: "因果校验失败 (Invalid Credentials)" });
    }
});

app.post('/api/auth/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).json({ success: false, message: "道号已存在 (Username Taken)" });
    }
    users[username] = password;
    res.json({ success: true, message: "觉醒成功 (Registered)" });
});

// API: Calculate AURA Matchmaking (Simulating C Core calling cloud)
app.post('/api/aura/match', (req, res) => {
    const { playerId, skillLevel } = req.body;
    console.log(`[AURA] Matchmaking request for ${playerId} at level ${skillLevel}`);
    
    // Simulate entropy calculation
    const success = Math.random() > worldState.fairnessEntropy;
    
    res.json({
        status: success ? 'MATCHED' : 'RECALCULATING',
        entropy: worldState.fairnessEntropy,
        matchId: `LY_${Math.random().toString(36).substr(2, 9)}`,
    });
});

// API: Sync 9-Currency Assets
app.get('/api/assets/:playerId', (req, res) => {
    res.json({
        '灵约石': 1420,
        '功德': 5200,
        '业力': 980,
        '因果': 12500,
        '天命': 42,
        '混沌': 210
    });
});

app.listen(port, () => {
    console.log(`[Ling Yue Backend] Sovereign Server running at http://localhost:${port}`);
});
