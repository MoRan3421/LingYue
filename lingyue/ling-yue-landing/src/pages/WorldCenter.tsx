import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const WORLDS = [
    { id: 'spirit', name: '灵曜界', desc: '始源英雄诞生之地', color: '#fbbf24' },
    { id: 'dao', name: '悟道界', desc: '天材地宝产出核心', color: '#10b981' },
    { id: 'merit', name: '大乘界', desc: '万事功德加身之所', color: '#3b82f6' },
    { id: 'karma', name: '无间界', desc: '业力冲天战火不断', color: '#ef4444' },
    { id: 'cau', name: '红幻界', desc: '因果交织迷雾重重', color: '#8b5cf6' },
    { id: 'des', name: '凌霄界', desc: '天命所归众神巅峰', color: '#f472b6' },
    { id: 'rei', name: '冥河界', desc: '轮回不息魂归何处', color: '#a855f7' },
    { id: 'hon', name: '太初界', desc: '鸿蒙一气开天辟地', color: '#6366f1' },
    { id: 'cha', name: '虚空界', desc: '混沌本源一切终点', color: '#fff' }
];

const WorldCenter: React.FC = () => {
    const { showToast } = useApp();
    const [selectedWorld, setSelectedWorld] = useState(WORLDS[0]);

    return (
        <div className="world-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>九界纵横 (THE NINE DOMAINS)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px', gap: '80px' }}>
                 
                 {/* World 3D Map Selection */}
                 <div className="glass-ui neon-border" style={{ position: 'relative', borderRadius: '40px', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', height: 'fit-content' }}>
                      {WORLDS.map(w => (
                          <div 
                            key={w.id} 
                            onClick={() => setSelectedWorld(w)}
                            style={{ 
                                padding: '30px', 
                                textAlign: 'center', 
                                cursor: 'pointer', 
                                borderRadius: '25px', 
                                border: `2px solid ${selectedWorld.id === w.id ? w.color : 'transparent'}`,
                                background: selectedWorld.id === w.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                                transition: '0.3s'
                            }}
                          >
                               <div style={{ width: '80px', height: '80px', margin: '0 auto 15px' }}>
                                    <Gem3D color={w.color} />
                                </div>
                               <div style={{ fontWeight: 'bold', color: selectedWorld.id === w.id ? w.color : '#fff' }}>{w.name}</div>
                          </div>
                      ))}
                 </div>

                 {/* Domain Info & Action */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 className="brand-font" style={{ fontSize: '2.5rem', color: selectedWorld.color, marginBottom: '20px' }}>{selectedWorld.name}</h3>
                      <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '40px' }}>{selectedWorld.desc}</p>
                      
                      <div style={{ display: 'grid', gap: '20px', marginBottom: '60px' }}>
                           <div className="glass-ui" style={{ padding: '25px', borderRadius: '20px', borderLeft: `5px solid ${selectedWorld.color}` }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>本界专属副本</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{selectedWorld.name}·深处</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '25px', borderRadius: '20px', borderLeft: `5px solid ${selectedWorld.color}` }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>活跃觉醒者</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>14,208 人在线</div>
                           </div>
                      </div>

                      <button className="glow-btn" onClick={() => showToast(`已穿梭至 [${selectedWorld.name}]`, 'success')} style={{ width: '100%', padding: '25px', borderRadius: '50px', fontSize: '1.2rem', background: selectedWorld.color, color: '#000' }}>
                           跨界穿梭 · 证道永恒
                      </button>
                 </div>

            </div>
        </div>
    );
};

export default WorldCenter;
