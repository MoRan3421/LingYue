import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const ForgePage: React.FC = () => {
    const { showToast } = useApp();
    const [isAwakening, setIsAwakening] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleAwaken = () => {
        setIsAwakening(true);
        let current = 0;
        const interval = setInterval(() => {
            current += 5;
            setProgress(current);
            if (current >= 100) {
                clearInterval(interval);
                setIsAwakening(false);
                setProgress(0);
                showToast('【万龙始源剑】已成功完成 100% 觉醒！', 'success');
            }
        }, 150);
    };

    return (
        <div className="forge-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>天工神府 (SOVEREIGN FORGE & AWAKENING)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '600px 1fr', gap: '80px', alignItems: 'center' }}>
                 
                 {/* Forge Visuals */}
                 <div className="glass-ui neon-border" style={{ height: '700px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <AnimatePresence mode="wait">
                          <motion.div 
                            key={isAwakening ? 'awaked' : 'idle'}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: isAwakening ? [1, 1.2, 1] : 1, opacity: 1, rotate: isAwakening ? [0, 720] : 0 }}
                            transition={{ duration: isAwakening ? 0.3 : 0.5, repeat: isAwakening ? Infinity : 0 }}
                            style={{ width: '400px', height: '400px' }}
                          >
                               <Gem3D color={isAwakening ? '#fff' : '#fbbf24'} />
                          </motion.div>
                      </AnimatePresence>

                      <div style={{ position: 'absolute', bottom: '60px', width: '80%', textAlign: 'center' }}>
                           <div style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '15px' }}>
                                {isAwakening ? '始源能量共鸣中...' : '当前器灵：万龙始源剑 · 沉睡中'}
                           </div>
                           {isAwakening && (
                               <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent)', boxShadow: '0 0 20px var(--accent)' }}></div>
                               </div>
                           )}
                      </div>

                      {/* Sparkles / Particles simulated by gradients */}
                      {isAwakening && (
                          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)', animation: 'neon-pulse 0.2s infinite' }}></div>
                      )}
                 </div>

                 {/* Controls */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>神器觉醒 (AWAKENING)</h4>
                      <p style={{ opacity: 0.6, marginBottom: '40px', lineHeight: '1.8' }}>
                           天工鼎不仅可以提升装备基础属性，更可以唤醒封印在万古神器中的器灵。觉醒后的神器将获得独立的攻击词条、全屏视觉特效以及针对“七龙”的额外增益。
                      </p>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>觉醒状态</div>
                                <div style={{ fontWeight: 'bold', color: '#8b5cf6' }}>第二阶段 (PHASE 2)</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>始源共鸣</div>
                                <div style={{ fontWeight: 'bold', color: '#10b981' }}>+450%</div>
                           </div>
                      </div>

                      <div style={{ display: 'flex', gap: '20px' }}>
                           <button className="glow-btn" onClick={() => showToast('天工锻造完成，基础属性提升 +150', 'success')} style={{ flex: 1, padding: '20px', borderRadius: '40px' }}>基础强化</button>
                           <button className="glow-btn" onClick={handleAwaken} style={{ flex: 1, padding: '20px', borderRadius: '40px', background: '#8b5cf6' }}>立即觉醒</button>
                      </div>
                      
                      <div style={{ marginTop: '40px', padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', textAlign: 'center' }}>
                           <h5 style={{ marginBottom: '10px', fontSize: '0.8rem' }}>镶嵌插槽 (GEM SLOTS)</h5>
                           <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                         <div style={{ width: '20px', height: '20px', background: i === 1 ? '#ef4444' : (i === 2 ? '#3b82f6' : 'transparent'), borderRadius: '4px' }}></div>
                                    </div>
                                ))}
                           </div>
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default ForgePage;
