import React, { useState, useEffect } from 'react';

const SovereignClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const worlds = ['凡尘', '灵泉', '因果', '业火', '混沌', '天命', '乾坤', '轮回', '始源'];
    const currentWorld = worlds[Math.floor((time.getHours() % 12) / 1.33)];

    return (
        <div className="glass-ui" style={{ padding: '20px', borderRadius: '15px', textAlign: 'center', width: '200px' }}>
            <div style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '2px' }}>始源历法</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '5px 0' }}>{time.toLocaleTimeString()}</div>
            <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{currentWorld}界 · 正时</div>
        </div>
    );
};

export default SovereignClock;
