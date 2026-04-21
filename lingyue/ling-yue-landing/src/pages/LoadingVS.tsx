import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const LoadingVS: React.FC = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/combat'), 1000);
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="vs-loading-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '60px', overflow: 'hidden', position: 'relative' }}>
            
            {/* Top Bar: Fairness Parity */}
            <div className="glass-ui" style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '10px 40px', borderRadius: '50px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                 EVMGSO-AURA 匹配正态分布 Parity: <span style={{ color: '#10b981' }}>99.9%</span> | 对局平衡：极佳
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px 1fr', height: '80vh', gap: '30px', alignItems: 'center' }}>
                 
                 {/* Team A (Left) */}
                 <div style={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: '15px' }}>
                      {[1,2,3,4,5].map(i => (
                          <motion.div 
                            key={i} 
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-ui neon-border" 
                            style={{ padding: '20px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}
                          >
                               <div style={{ width: '60px', height: '60px' }}><Gem3D color="#3b82f6" /></div>
                               <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>洛神·惊鸿_{i}</div>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--accent)' }}>36阶进化 · 【天道无极】</div>
                               </div>
                               <div style={{ marginLeft: 'auto', fontSize: '0.7rem', opacity: 0.4 }}>99%</div>
                          </motion.div>
                      ))}
                 </div>

                 {/* Center VS */}
                 <div style={{ textAlign: 'center' }}>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="brand-font" 
                        style={{ fontSize: '5rem', color: 'var(--accent)', filter: 'drop-shadow(0 0 20px var(--accent))' }}
                      >
                           VS
                      </motion.div>
                 </div>

                 {/* Team B (Right) */}
                 <div style={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: '15px' }}>
                      {[1,2,3,4,5].map(i => (
                          <motion.div 
                            key={i} 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-ui neon-border" 
                            style={{ padding: '20px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center', flexDirection: 'row-reverse', textAlign: 'right' }}
                          >
                               <div style={{ width: '60px', height: '60px' }}><Gem3D color="#ef4444" /></div>
                               <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>始源修仙者_{i}</div>
                                    <div style={{ fontSize: '0.6rem', color: '#8b5cf6' }}>18阶进化 · 【造化弄人】</div>
                               </div>
                               <div style={{ marginRight: 'auto', fontSize: '0.7rem', opacity: 0.4 }}>{Math.floor(progress)}%</div>
                          </motion.div>
                      ))}
                 </div>

            </div>

            {/* Bottom Progress */}
            <div style={{ position: 'absolute', bottom: '40px', width: '80%', left: '10%' }}>
                 <div style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px' }}>
                      正在加载始源峡谷场景资源...
                 </div>
                 <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                      <motion.div 
                        animate={{ width: `${progress}%` }}
                        style={{ height: '100%', background: 'linear-gradient(to right, #3b82f6, #ef4444)' }}
                      ></motion.div>
                 </div>
            </div>

        </div>
    );
};

export default LoadingVS;
