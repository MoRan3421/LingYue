import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const AbodePage: React.FC = () => {
    const { user, showToast } = useApp();
    const [activeAbode, setActiveAbode] = useState('cave');

    const ABODES = [
        { id: 'cave', name: '万龙洞府', tier: '始源级', desc: '唯有万龙之主方可开启的无上洞天。', color: '#fbbf24' },
        { id: 'manor', name: '万龙仙府', tier: '造化级', desc: '聚九界灵气于一身，修炼速度提升 1000%。', color: '#10b981' },
        { id: 'nation', name: '万龙神国', tier: '永恒级', desc: '统御大千世界，神国子民皆为您贡献信仰功德。', color: '#ef4444' }
    ];

    return (
        <div className="abode-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>至尊神域 (SOVEREIGN ABODES)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: '80px' }}>
                 
                 {/* 3D Abode Visualization */}
                 <div className="glass-ui neon-border" style={{ height: '700px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ width: '500px', height: '500px' }}>
                           <Gem3D color={ABODES.find(a => a.id === activeAbode)?.color || '#fff'} />
                      </div>
                      <div style={{ position: 'absolute', bottom: '60px', textAlign: 'center' }}>
                           <div className="brand-font" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{ABODES.find(a => a.id === activeAbode)?.name}</div>
                           <div style={{ letterSpacing: '5px', opacity: 0.5 }}>{ABODES.find(a => a.id === activeAbode)?.tier}</div>
                      </div>
                      
                      {/* Aura Effects */}
                      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle, ${ABODES.find(a => a.id === activeAbode)?.color}11 0%, transparent 70%)` }}></div>
                 </div>

                 {/* Selection & Stats */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                      <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                           <h4 className="brand-font" style={{ marginBottom: '30px' }}>领地详情</h4>
                           <p style={{ fontSize: '1.2rem', opacity: 0.6, lineHeight: '1.8', marginBottom: '40px' }}>
                                {ABODES.find(a => a.id === activeAbode)?.desc}
                           </p>
                           
                           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                                <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                                     <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>每日灵气产出</div>
                                     <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>+1.2M</div>
                                </div>
                                <div style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }} className="glass-ui">
                                     <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>当前契约人数</div>
                                     <div style={{ fontWeight: 'bold' }}>1,080 / 10,000</div>
                                </div>
                           </div>

                           <button className="glow-btn" onClick={() => showToast('神域之光已降临，修炼速率提升。', 'success')} style={{ width: '100%', padding: '25px', borderRadius: '50px', fontSize: '1.2rem', background: ABODES.find(a => a.id === activeAbode)?.color, color: '#000' }}>
                                立即进入查看
                           </button>
                      </div>

                      <div style={{ display: 'grid', gap: '20px' }}>
                           {ABODES.map(a => (
                               <div 
                                    key={a.id} 
                                    onClick={() => setActiveAbode(a.id)}
                                    className="glass-ui" 
                                    style={{ padding: '30px', borderRadius: '25px', cursor: 'pointer', border: activeAbode === a.id ? `2px solid ${a.color}` : '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                     <div className="brand-font" style={{ fontSize: '1.2rem', color: activeAbode === a.id ? a.color : '#fff' }}>{a.name}</div>
                                     <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>{a.tier}</div>
                               </div>
                           ))}
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default AbodePage;
