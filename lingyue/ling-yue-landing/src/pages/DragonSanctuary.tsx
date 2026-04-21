import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const DRAGONS = [
    { name: '始源龙', color: '#fbbf24', desc: '掌控万物起源之火' },
    { name: '死咒龙', color: '#ef4444', desc: '散播永恒凋零之息' },
    { name: '极寒龙', color: '#3b82f6', desc: '凝固时空破碎之霜' },
    { name: '狂雷龙', color: '#8b5cf6', desc: '降下灭世雷霆之劫' },
    { name: '青木龙', color: '#10b981', desc: '主宰生命循环之灵' },
    { name: '暗影龙', color: '#64748b', desc: '吞噬九界光明之影' },
    { name: '混元龙', color: '#ec4899', desc: '执掌混沌秩序之源' }
];

const DragonSanctuary: React.FC = () => {
    const { showToast } = useApp();
    const [selectedDragon, setSelectedDragon] = useState(0);
    const [activePhase, setActivePhase] = useState(1);

    return (
        <div className="dragon-sanctuary master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>龙魂圣域 (7-DRAGON RESONANCE MATIX)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr 400px', gap: '40px', alignItems: 'center' }}>
                 
                 {/* Left: Dragon List */}
                 <div style={{ display: 'grid', gap: '15px' }}>
                      {DRAGONS.map((d, i) => (
                          <div 
                            key={i} 
                            onClick={() => setSelectedDragon(i)}
                            className="glass-ui" 
                            style={{ padding: '20px', borderRadius: '20px', cursor: 'pointer', border: selectedDragon === i ? `2px solid ${d.color}` : '1px solid transparent', transition: '0.3s' }}
                          >
                               <div style={{ color: d.color, fontWeight: 'bold' }}>{d.name}</div>
                               <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>{d.desc}</div>
                          </div>
                      ))}
                 </div>

                 {/* Center: 3D Visualization */}
                 <div className="glass-ui neon-border" style={{ height: '600px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <AnimatePresence mode="wait">
                          <motion.div 
                            key={selectedDragon}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            style={{ width: '400px', height: '400px' }}
                          >
                               <Gem3D color={DRAGONS[selectedDragon].color} />
                          </motion.div>
                      </AnimatePresence>
                      
                      <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center' }}>
                           <div className="brand-font" style={{ fontSize: '2rem' }}>{DRAGONS[selectedDragon].name} · 阶段 {activePhase}</div>
                           <div style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '10px' }}>
                                共鸣效果：全属性 +{activePhase * 150}%
                           </div>
                      </div>
                 </div>

                 {/* Right: Phase Effects */}
                 <div className="glass-ui" style={{ padding: '40px', borderRadius: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.2rem' }}>525 龙魂矩阵</h4>
                      <div style={{ display: 'flex', gap: '10px' }}>
                           {[1, 2, 3].map(p => (
                               <button 
                                 key={p} 
                                 onClick={() => setActivePhase(p)}
                                 style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', background: activePhase === p ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: activePhase === p ? '#000' : '#fff', cursor: 'pointer' }}
                               >
                                    阶段 {p}
                               </button>
                           ))}
                      </div>

                      <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'grid', gap: '10px' }}>
                           {Array.from({ length: 25 }).map((_, i) => (
                               <div key={i} className="glass-ui" style={{ padding: '15px', borderRadius: '15px', fontSize: '0.7rem' }}>
                                    <span style={{ color: DRAGONS[selectedDragon].color }}>[效果 {i+1}]</span> 提升周围友军能量回复速率 +{i % 20 + 5}%
                               </div>
                           ))}
                      </div>

                      <button className="glow-btn" onClick={() => showToast('已注入该龙魂共鸣因子', 'success')} style={{ width: '100%', padding: '20px', borderRadius: '30px' }}>
                           同步龙魂共鸣
                      </button>
                 </div>

            </div>
        </div>
    );
};

export default DragonSanctuary;
