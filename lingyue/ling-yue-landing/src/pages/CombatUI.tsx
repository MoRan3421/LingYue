import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { LingYueEngine } from '../engine/LingYueEngine';
import Scene3D from '../components/Scene3D';

const CombatUI: React.FC = () => {
    const { activeHero, showToast } = useApp();
    const [engine, setEngine] = useState<LingYueEngine | null>(null);
    const [stats, setStats] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const eng = new LingYueEngine(canvas);
        setEngine(eng);
        
        const timer = setInterval(() => {
            eng.update();
            setStats(eng.getPlayerStats());
        }, 30);
        return () => clearInterval(timer);
    }, []);

    const SKILLS = [
        { key: 'Q', name: '始源冲锋', desc: '向目标方向突进并造成范围伤害', icon: 'ri-flashlight-fill' },
        { key: 'W', name: '因果护盾', desc: '获得一个吸收伤害的护盾并回血', icon: 'ri-shield-flash-fill' },
        { key: 'E', name: '九界震慑', desc: '震慑周围敌方目标造成晕眩', icon: 'ri-thunderstorms-fill' },
        { key: 'R', name: '万龙齐鸣', desc: '召唤终极龙息摧毁路径一切', icon: 'ri-fire-fill', isUlt: true }
    ];

    if (!stats) return <div className="loading-screen" style={{ background: '#000', height: '100vh' }}></div>;

    return (
        <div className="combat-container" style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#000' }}>
            
            {/* Real 3D Terrain & Models Viewport */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                 <Scene3D playerPos={{ x: stats.x, y: stats.y }} entities={stats.entities} />
            </div>

            {/* Top Bar: KDA, Timer, Resonances */}
            <header style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, padding: '0 40px' }}>
                 <div className="glass-ui neon-border" style={{ padding: '10px 40px', borderRadius: '40px', display: 'flex', gap: '40px', alignItems: 'center' }}>
                      <div className="brand-font" style={{ color: '#3b82f6' }}>5</div>
                      <div style={{ opacity: 0.5, fontSize: '1.2rem' }}>VS</div>
                      <div className="brand-font" style={{ color: '#ef4444' }}>2</div>
                      <div style={{ marginLeft: '40px', color: 'var(--accent)', fontWeight: 'bold' }}>12:45</div>
                      {stats.resonances > 0 && (
                          <div style={{ marginLeft: '20px', color: '#fbbf24', fontSize: '0.8rem' }}>七龙共鸣: {stats.resonances}/7</div>
                      )}
                 </div>
            </header>

            {/* Skill Buttons Matrix (Mobile & Desktop Dual Support) */}
            <div style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', gap: '20px', alignItems: 'flex-end', zIndex: 50 }}>
                 {SKILLS.map((s, i) => (
                     <div key={i} style={{ position: 'relative' }}>
                          <button 
                            className="glass-ui neon-border"
                            style={{ 
                                width: s.isUlt ? '100px' : '80px', 
                                height: s.isUlt ? '100px' : '80px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', 
                                justifyContent: 'center',
                                cursor: 'pointer',
                                background: 'rgba(251,191,36,0.05)',
                                color: 'var(--accent)',
                                transition: '0.2s',
                                boxShadow: s.isUlt ? '0 0 30px rgba(251,191,36,0.3)' : 'none'
                            }}
                            onClick={() => showToast(`释放技能：${s.name}`, 'info')}
                          >
                               <i className={s.icon} style={{ fontSize: s.isUlt ? '2rem' : '1.5rem' }}></i>
                               <span style={{ fontSize: '0.6rem', position: 'absolute', bottom: '10px' }}>{s.key}</span>
                          </button>
                          {/* Level Up Plus Sign */}
                          <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '25px', height: '25px', borderRadius: '50%', background: 'var(--accent)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}>+</div>
                     </div>
                 ))}
                 
                 {/* Summoner Spells */}
                 <div style={{ marginLeft: '40px', display: 'grid', gap: '15px' }}>
                      <div className="glass-ui" style={{ width: '50px', height: '50px', borderRadius: '15px' }}></div> {/* Flash */}
                      <div className="glass-ui" style={{ width: '50px', height: '50px', borderRadius: '15px' }}></div> {/* Heal */}
                 </div>
            </div>

            {/* Joystick Placeholder (Mobile Focus) */}
            <div style={{ position: 'absolute', bottom: '80px', left: '80px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.02)', border: '2px solid rgba(251,191,36,0.1)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent)', opacity: 0.3 }}></div>
            </div>

            {/* Shop Entry (Quick Buy) */}
            <div style={{ position: 'absolute', top: '150px', left: '20px', zIndex: 50 }}>
                 <div className="glass-ui neon-border" style={{ padding: '10px', borderRadius: '15px', display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(251,191,36,0.2)' }}></div>
                      <div style={{ fontSize: '0.7rem' }}>推荐：破军之刃<br/><span style={{ color: 'var(--accent)' }}>💰 2950</span></div>
                 </div>
            </div>

            {/* Mini-map */}
            <div style={{ position: 'absolute', top: '100px', right: '20px', width: '150px', height: '150px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 50 }}>
                 <div style={{ position: 'absolute', top: '10%', left: '10%', width: '5px', height: '5px', background: '#3b82f6', borderRadius: '50%' }}></div>
                 <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '5px', height: '5px', background: '#ef4444', borderRadius: '50%' }}></div>
            </div>
        </div>
    );
};

export default CombatUI;
