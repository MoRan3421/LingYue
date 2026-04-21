import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const PETS = [
    { name: '裂空神龙 (Dragon)', type: '坐骑', level: 'MAX', img: 'ri-command-fill', color: '#fbbf24' },
    { name: '混沌吞天兽 (Chaos)', type: '灵宠', level: '32', img: 'ri-mickey-fill', color: '#a855f7' },
    { name: '鸿蒙凤凰 (Phoenix)', type: '坐骑', level: '18', img: 'ri-windy-fill', color: '#ef4444' },
    { name: '天命圣虎 (Tiger)', type: '灵宠', level: '11', img: 'ri-baidu-fill', color: '#10b981' }
];

const PetPage: React.FC = () => {
    const [selected, setSelected] = useState(PETS[0]);

    return (
        <div className="pet-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>九界万象 (MOUNTS & PETS)</h2>
                <p style={{ opacity: 0.5 }}>108 种太初灵宠 · 108 种荒古坐骑</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px' }}>
                {/* 3D Showcase Preview */}
                <div className="glass-ui neon-border" style={{ borderRadius: '40px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.01)' }}>
                    <div className="hologram-scan" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
                    <div style={{ textAlign: 'center' }}>
                        <i className={selected.img} style={{ fontSize: '15rem', color: selected.color, filter: `drop-shadow(0 0 50px ${selected.color}44)` }}></i>
                        <h3 className="brand-font" style={{ fontSize: '3rem', marginTop: '40px', color: selected.color }}>{selected.name}</h3>
                        <div style={{ fontSize: '1.2rem', opacity: 0.6 }}>{selected.type} · 契合度 {selected.level}</div>
                    </div>
                </div>

                {/* List Scroll */}
                <div style={{ display: 'grid', gap: '15px' }}>
                    <h4 className="brand-font" style={{ marginBottom: '20px', letterSpacing: '3px' }}>当前纳戒储藏</h4>
                    {PETS.map(p => (
                        <div 
                            key={p.name} 
                            onClick={() => setSelected(p)}
                            className="glass-ui" 
                            style={{ 
                                padding: '20px 30px', 
                                borderRadius: '20px', 
                                cursor: 'pointer', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                border: selected.name === p.name ? `1px solid ${p.color}` : '1px solid rgba(255,255,255,0.05)',
                                background: selected.name === p.name ? `${p.color}11` : 'transparent',
                                transition: '0.3s'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <i className={p.img} style={{ fontSize: '1.5rem', color: p.color }}></i>
                                <span>{p.name}</span>
                            </div>
                            <span style={{ fontSize: '0.7rem', opacity: 0.4 }}>{p.type}</span>
                        </div>
                    ))}
                    <div className="glass-ui" style={{ marginTop: '30px', padding: '30px', borderRadius: '30px', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.1)' }}>
                         查看全部 108 种待契约万象...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetPage;
