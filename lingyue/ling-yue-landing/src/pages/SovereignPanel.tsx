import React from 'react';
import { motion } from 'framer-motion';

const SovereignPanel: React.FC = () => {
    const stats = [
        { label: '因果熵值', value: '0.0081', status: 'OPTIMAL' },
        { label: '在线觉醒者', value: '108,420', status: 'ACTIVE' },
        { label: '始源核心负载', value: '12%', status: 'LOW' },
        { label: '业力平衡率', status: 'STABLE', value: '100%' }
    ];

    return (
        <div className="master-container" style={{ padding: '120px 20px', textAlign: 'center' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '50px' }}>始源控制面板 (SOVEREIGN PANEL)</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                {stats.map((s, i) => (
                    <motion.div 
                        key={i}
                        className="glass-ui"
                        whileHover={{ scale: 1.05 }}
                        style={{ padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--accent)' }}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{s.label}</div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', margin: '10px 0' }}>{s.value}</div>
                        <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>● {s.status}</div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px' }}>
                <h2 className="brand-font" style={{ color: 'var(--secondary)' }}>高级源初调整 (PRIME ADJUSTMENTS)</h2>
                <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px' }}>重置因果流</button>
                    <button className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px' }}>下发全服奖励</button>
                    <button className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px' }}>开启 2.0 预研</button>
                </div>
            </div>
            
            <div style={{ marginTop: '50px', opacity: 0.2, fontSize: '0.8rem' }}>
                仅限始源架构师 (TuanTuanPanda) 授权使用
            </div>
        </div>
    );
};

export default SovereignPanel;
