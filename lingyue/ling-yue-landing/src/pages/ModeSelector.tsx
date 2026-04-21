import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const MODES = [
    { name: '混沌争霸', desc: '全英雄属性翻倍，技能无冷却。', icon: 'ri-fire-fill', color: '#ef4444' },
    { name: '镜像对决', desc: '双方使用完全相同的全能英雄。', icon: 'ri-user-follow-fill', color: '#3b82f6' },
    { name: '始源夺宝', desc: '采集灵曜水晶获得分数，击杀抢夺。', icon: 'ri-copper-diamond-fill', color: '#fbbf24' },
    { name: '时空扭曲', desc: '每5分钟全地图掉落随机始源技能。', icon: 'ri-time-fill', color: '#8b5cf6' },
    { name: '无尽血战', desc: '死亡不回城，原地复活决战到底。', icon: 'ri-skull-fill', color: '#f43f5e' },
    { name: '太初迷宫', desc: '峡谷地形不断随机变换，寻找出口。', icon: 'ri-treasure-map-fill', color: '#10b981' }
];

const ModeSelector: React.FC = () => {
    const { showToast } = useApp();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMode = () => setCurrentIndex(prev => (prev + 1) % MODES.length);
    const prevMode = () => setCurrentIndex(prev => (prev - 1 + MODES.length) % MODES.length);

    return (
        <div className="mode-selector-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '80px' }}>百态无常 (108 GAMEPLAY MODES)</h2>
            
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px' }}>
                 
                 {/* Navigation Buttons */}
                 <button onClick={prevMode} style={{ position: 'absolute', left: 0, zIndex: 100, background: 'none', border: 'none', color: '#fff', fontSize: '4rem', cursor: 'pointer', opacity: 0.5 }}><i className="ri-arrow-left-s-line"></i></button>
                 <button onClick={nextMode} style={{ position: 'absolute', right: 0, zIndex: 100, background: 'none', border: 'none', color: '#fff', fontSize: '4rem', cursor: 'pointer', opacity: 0.5 }}><i className="ri-arrow-right-s-line"></i></button>

                 <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentIndex}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass-ui neon-border"
                        style={{ width: '800px', height: '100%', borderRadius: '40px', padding: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                      >
                           <div style={{ width: '200px', height: '200px', marginBottom: '40px' }}>
                                <Gem3D color={MODES[currentIndex].color} />
                           </div>
                           <h3 className="brand-font" style={{ fontSize: '3rem', color: MODES[currentIndex].color, marginBottom: '20px' }}>{MODES[currentIndex].name}</h3>
                           <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '500px', lineHeight: '1.8' }}>{MODES[currentIndex].desc}</p>
                           
                           <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                                <div className="glass-ui" style={{ padding: '15px 30px', borderRadius: '30px', fontSize: '0.8rem' }}>今日活跃: 1.2M 觉醒者</div>
                                <div className="glass-ui" style={{ padding: '15px 30px', borderRadius: '30px', fontSize: '0.8rem' }}>预计排队: 2s</div>
                           </div>

                           <button className="glow-btn" onClick={() => showToast(`已选择模式：${MODES[currentIndex].name}，正在拉取九界玩家`, 'success')} style={{ marginTop: '60px', padding: '25px 80px', borderRadius: '50px', fontSize: '1.2rem', background: MODES[currentIndex].color, color: '#000' }}>
                                立即开始匹配 (PLAY)
                           </button>
                      </motion.div>
                 </AnimatePresence>

                 {/* Side Background Modes */}
                 <div style={{ position: 'absolute', right: '-150px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }}>
                      <h4 className="brand-font" style={{ fontSize: '10rem', whiteSpace: 'nowrap' }}>NEXT MODE NEXT MODE</h4>
                 </div>
            </div>

            {/* Pagination dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '60px' }}>
                 {MODES.map((_, i) => (
                     <div key={i} onClick={() => setCurrentIndex(i)} style={{ width: i === currentIndex ? '40px' : '12px', height: '12px', borderRadius: '10px', background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.1)', cursor: 'pointer', transition: '0.3s' }}></div>
                 ))}
            </div>
        </div>
    );
};

export default ModeSelector;
