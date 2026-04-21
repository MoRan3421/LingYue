import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const SKINS = [
    { name: '洛神·惊鸿', hero: '洛神', baseColor: '#f472b6' },
    { name: '玄冥·幽冥', hero: '玄冥', baseColor: '#3b82f6' },
    { name: '太阿·剑神', hero: '太阿', baseColor: '#fbbf24' }
];

const SkinsPage: React.FC = () => {
    const { showToast } = useApp();
    const [selectedSkin, setSelectedSkin] = useState(SKINS[0]);
    const [evolutionStage, setEvolutionStage] = useState(1);

    const handleEvolve = () => {
        if (evolutionStage < 36) {
            setEvolutionStage(prev => prev + 1);
            showToast(`成功进化至第 ${evolutionStage + 1} 阶段！属性加成提升至 ${evolutionStage + 1}%`, 'success');
        } else {
            showToast('已达到最高进化阶段：天道无极级', 'info');
        }
    };

    return (
        <div className="skins-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>化凡为神 (SKIN EVOLUTION)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: '80px' }}>
                 
                 {/* 3D Showcase Area */}
                 <div className="glass-ui neon-border" style={{ position: 'relative', height: '600px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '400px', height: '400px' }}>
                           <Gem3D color={selectedSkin.baseColor} />
                      </div>
                      
                      <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center' }}>
                           <div className="brand-font" style={{ fontSize: '2rem', marginBottom: '10px' }}>{selectedSkin.name}</div>
                           <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>当前英雄：{selectedSkin.hero}</div>
                      </div>
                      
                      <div className="glass-ui" style={{ position: 'absolute', top: '40px', right: '40px', padding: '20px', borderRadius: '20px', textAlign: 'right' }}>
                           <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>进化阶段</div>
                           <div className="brand-font" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>{evolutionStage} <span style={{ fontSize: '1rem' }}>/ 36</span></div>
                           <div style={{ fontSize: '0.8rem', color: '#10b981' }}>当前全属性加成: +{evolutionStage}%</div>
                      </div>
                 </div>

                 {/* Controls & Gallery */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                      <div className="glass-ui" style={{ padding: '40px', borderRadius: '40px' }}>
                           <h4 className="brand-font" style={{ marginBottom: '25px' }}>解锁进化形态</h4>
                           <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', marginBottom: '30px' }}>
                                <div style={{ width: `${(evolutionStage / 36) * 100}%`, height: '100%', background: 'var(--accent)', boxShadow: '0 0 15px var(--accent)' }}></div>
                           </div>
                           <button className="glow-btn" onClick={handleEvolve} style={{ width: '100%', padding: '25px', borderRadius: '50px', fontSize: '1.2rem' }}>
                               消耗灵约石 · 立即进化
                           </button>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                           {SKINS.map(s => (
                               <div 
                                    key={s.name}
                                    onClick={() => { setSelectedSkin(s); setEvolutionStage(1); }}
                                    className="glass-ui" 
                                    style={{ padding: '20px', borderRadius: '25px', cursor: 'pointer', textAlign: 'center', border: selectedSkin.name === s.name ? '2px solid var(--accent)' : '1px solid transparent' }}
                                >
                                     <div className="avatar-logo" style={{ width: '60px', height: '60px', margin: '0 auto 15px', backgroundImage: 'url(/hero_3d.png)' }}></div>
                                     <div style={{ fontSize: '0.7rem' }}>{s.name}</div>
                               </div>
                           ))}
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default SkinsPage;
