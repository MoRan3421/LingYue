import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const PetWingPage: React.FC = () => {
    const { showToast } = useApp();
    const [activeTab, setActiveTab] = useState('pets');
    const [isCatching, setIsCatching] = useState(false);

    const handleCatch = () => {
        setIsCatching(true);
        setTimeout(() => {
            setIsCatching(false);
            showToast('恭喜！已成功捕捉【始源·万龙神兽】碎片', 'success');
        }, 2000);
    };

    return (
        <div className="pet-wing-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>御风伏兽 (PETS & WINGS)</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
                {['pets', 'wings', 'mounts'].map(t => (
                    <button 
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className="glass-ui neon-border"
                        style={{ padding: '15px 40px', borderRadius: '50px', background: activeTab === t ? 'var(--accent)' : 'transparent', color: activeTab === t ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                         {t === 'pets' ? '始源灵宠 (PETS)' : (t === 'wings' ? '至极法翼 (WINGS)' : '万龙坐骑 (MOUNTS)')}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                 {/* Showcase */}
                 <div className="glass-ui neon-border" style={{ height: '600px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      
                      <AnimatePresence mode="wait">
                          <motion.div 
                            key={isCatching ? 'catching' : activeTab}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: isCatching ? [1, 1.2, 1] : 1, opacity: 1, rotate: isCatching ? [0, 360] : 0 }}
                            transition={{ duration: isCatching ? 0.5 : 0.3, repeat: isCatching ? Infinity : 0 }}
                            style={{ width: '400px', height: '400px' }}
                          >
                               <Gem3D color={isCatching ? '#ef4444' : (activeTab === 'pets' ? '#10b981' : (activeTab === 'wings' ? '#3b82f6' : '#fbbf24'))} />
                          </motion.div>
                      </AnimatePresence>

                      <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center' }}>
                           <div style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '10px' }}>
                                {isCatching ? '正在注入始源契约之力...' : `当前形态：${activeTab === 'pets' ? '万龙神兽 · 幼体' : '万龙神翼 · 初阶'}`}
                           </div>
                           {isCatching && <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>SUCCESS RATE: 85%</div>}
                      </div>

                      {/* Catching Aura */}
                      {isCatching && (
                          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)', animation: 'neon-pulse 0.5s infinite' }}></div>
                      )}
                 </div>

                 {/* Actions */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>{activeTab === 'pets' ? '捕捉与契约' : '羽翼进阶'}</h4>
                      <p style={{ opacity: 0.5, marginBottom: '40px', lineHeight: '1.8' }}>
                           {activeTab === 'pets' ? '穿梭九界捕捉副本，使用始源契约球可将其收服。捕捉成功的灵宠将永久提升角色的法术强度与辅助技能范围。' : '收集九界风灵羽，进阶翅膀可获得飞行能力，无视战场地形阻碍，获得极速支援优势。'}
                      </p>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>当前品质</div>
                                <div style={{ fontWeight: 'bold', color: '#8b5cf6' }}>传说级 (EPIC)</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>飞行速率</div>
                                <div style={{ fontWeight: 'bold', color: '#10b981' }}>+450%</div>
                           </div>
                      </div>

                      <button 
                        className="glow-btn" 
                        disabled={isCatching}
                        onClick={activeTab === 'pets' ? handleCatch : handleCatch} 
                        style={{ width: '100%', padding: '25px', borderRadius: '50px', fontSize: '1.2rem', opacity: isCatching ? 0.7 : 1 }}
                      >
                           {isCatching ? '正在捕捉...' : (activeTab === 'pets' ? '立即捕捉 · 消耗契约球' : '立即进阶 · 消耗风灵羽')}
                      </button>
                 </div>
            </div>

            {/* Collection Grid */}
            <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px' }}>
                 {Array.from({ length: 12 }).map((_, i) => (
                     <div key={i} className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center', filter: i > 0 ? 'grayscale(1)' : 'none', opacity: i > 0 ? 0.3 : 1 }}>
                          <div style={{ width: '60px', height: '60px', margin: '0 auto 10px' }}>
                               <Gem3D color="#3b82f6" />
                          </div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{i === 0 ? '已契约' : '待觉醒'}</div>
                     </div>
                 ))}
            </div>
        </div>
    );
};

export default PetWingPage;
