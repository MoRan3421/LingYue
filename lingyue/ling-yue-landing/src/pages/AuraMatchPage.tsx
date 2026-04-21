import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const AuraMatchPage: React.FC = () => {
    const { showToast } = useApp();
    const [parity, setParity] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setParity(Math.floor(Math.random() * 2) + 98); // Stable 98-99% parity
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="aura-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>始源均衡 (EVMGSO-AURA MATCHING)</h2>
            
            <div className="glass-ui neon-border" style={{ padding: '80px', borderRadius: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                 
                 {/* Matching Core Visualization */}
                 <div style={{ position: 'relative', textAlign: 'center' }}>
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', borderRadius: '50%', border: '2px solid rgba(59,130,246,0.1)', animation: 'spin 10s linear infinite' }}></div>
                      <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                           <Gem3D color="#3b82f6" />
                      </div>
                      <div className="brand-font" style={{ fontSize: '4rem', marginTop: '40px', color: '#3b82f6' }}>{parity}%</div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.5 }}>EVMGSO 公平正态分布熵</div>
                 </div>

                 {/* Mechanism Specs */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.5rem' }}>AURA 均衡协议</h4>
                      <div style={{ display: 'grid', gap: '20px' }}>
                           {[
                               { name: '段位权重同步', desc: '40 个修仙段位的积分精准映射', status: 'ACTIVE' },
                               { name: '信誉正态分布', desc: '100 分制信誉点强制入池校验', status: 'ACTIVE' },
                               { name: '延迟 parity 优化', desc: '根据物理距离优化跨服数据交换', status: 'ACTIVE' },
                               { name: '反脚本因果率', desc: 'EVMGSO 行为熵分析即时封禁', status: 'SECURE' }
                           ].map((s, i) => (
                               <div key={i} className="glass-ui" style={{ padding: '25px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                         <div style={{ fontWeight: 'bold' }}>{s.name}</div>
                                         <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>{s.desc}</div>
                                    </div>
                                    <div style={{ color: '#10b981', fontWeight: 'bold' }}>{s.status}</div>
                               </div>
                           ))}
                      </div>

                      <button className="glow-btn" onClick={() => showToast('匹配机制已校准至最新周期', 'info')} style={{ padding: '20px', borderRadius: '40px', background: 'rgba(59,130,246,0.2)', color: '#3b82f6', border: '1px solid #3b82f6' }}>
                           校准 AURA 核心 (CALIBRATE)
                      </button>
                 </div>

            </div>
        </div>
    );
};

export default AuraMatchPage;
