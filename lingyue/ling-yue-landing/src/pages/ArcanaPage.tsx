import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const ArcanaPage: React.FC = () => {
    const { user, showToast } = useApp();
    const [selectedSlot, setSelectedSlot] = useState(0);

    const SLOTS = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        type: i % 5 === 0 ? 'red' : (i % 5 === 1 ? 'blue' : (i % 5 === 2 ? 'green' : (i % 5 === 3 ? 'gold' : 'purple'))),
        level: Math.floor(Math.random() * 150) + 1
    }));

    return (
        <div className="arcana-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>灵瑞圣坛 (150-LEVEL ARCANA MATRIX)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px', gap: '80px' }}>
                 
                 {/* Arcana Board */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '15px' }}>
                           {SLOTS.map(s => (
                               <motion.div 
                                 key={s.id} 
                                 whileHover={{ scale: 1.1 }}
                                 onClick={() => setSelectedSlot(s.id)}
                                 style={{ 
                                    aspectRatio: '1/1', 
                                    borderRadius: '50%', 
                                    background: `radial-gradient(circle, ${s.type} 0%, transparent 80%)`, 
                                    border: selectedSlot === s.id ? '2px solid #fff' : '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    fontSize: '0.6rem',
                                    fontWeight: 'bold'
                                 }}
                               >
                                    Lv.{s.level}
                               </motion.div>
                           ))}
                      </div>
                      
                      <div style={{ marginTop: '60px', textAlign: 'center' }}>
                           <div style={{ fontSize: '1.2rem', opacity: 0.5 }}>主瑞属性：始源攻击力 +2540 / 穿透 +108</div>
                      </div>
                 </div>

                 {/* Upgrade Controls */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>瑞符强化</h4>
                      <p style={{ opacity: 0.5, marginBottom: '40px', fontSize: '0.9rem' }}>
                           每种颜色瑞符对应不同的战斗属性。等级上限为 150 级。等级越高，觉醒时提供的能量共鸣越强。
                      </p>
                      
                      <div style={{ padding: '30px', borderRadius: '25px', background: 'rgba(255,255,255,0.03)', marginBottom: '40px' }}>
                           <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>当前瑞符等级</div>
                           <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>Lv.{SLOTS[selectedSlot].level}</div>
                           <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginTop: '15px' }}>
                                <div style={{ width: `${(SLOTS[selectedSlot].level / 150) * 100}%`, height: '100%', background: 'var(--accent)' }}></div>
                           </div>
                      </div>

                      <button 
                        className="glow-btn" 
                        onClick={() => showToast('瑞符强化成功，共鸣等级提升！', 'success')}
                        style={{ width: '100%', padding: '25px', borderRadius: '50px', fontSize: '1.2rem' }}
                      >
                           立即强化 (UPGRADE)
                      </button>
                      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.7rem', opacity: 0.3 }}>消耗：灵瑞尘埃 x1080</div>
                 </div>

            </div>
        </div>
    );
};

export default ArcanaPage;
