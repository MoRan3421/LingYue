import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const JudiciaryPage: React.FC = () => {
    const { showToast } = useApp();
    const [analyzing, setAnalyzing] = useState(false);

    const handleAudit = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            showToast('因果判定：本场对局所有玩家数据熵值符合 99.9% 均衡律', 'success');
        }, 2000);
    };

    return (
        <div className="judiciary-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>始源裁决所 (AURA JUDICIARY)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                 
                 {/* Match Log & Entropy */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>近期对局因果熵分析</h4>
                      
                      <div style={{ display: 'grid', gap: '15px' }}>
                           {[1, 2, 3].map(i => (
                               <div key={i} className="glass-ui" style={{ padding: '20px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                         <div style={{ fontWeight: 'bold' }}>对局 ID: 1082540{i}</div>
                                         <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>模式：混沌争霸 | 时间：512s</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                         <div style={{ color: '#10b981', fontWeight: 'bold' }}>公平度：99.9%</div>
                                         <div style={{ fontSize: '0.6rem', opacity: 0.3 }}>因果偏离度：0.0001%</div>
                                    </div>
                               </div>
                           ))}
                      </div>

                      <button 
                        className="glow-btn" 
                        onClick={handleAudit}
                        disabled={analyzing}
                        style={{ width: '100%', marginTop: '40px', padding: '20px', borderRadius: '40px' }}
                      >
                           {analyzing ? '正在回溯因果律...' : '发起全量公平审计 (AUDIT)'}
                      </button>
                 </div>

                 {/* EVMGSO Engine Status */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                      <div style={{ width: '250px', height: '250px', margin: '0 auto 40px' }}>
                           <Gem3D color="#3b82f6" />
                      </div>
                      <h3 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>EVMGSO-AURA 核心</h3>
                      <p style={{ opacity: 0.5, lineHeight: '1.8' }}>
                           始源裁决中心实时监控全球觉醒者的行为熵值。任何脚本滥用、业力异常偏离都将被因果律捕捉。匹配机制基于觉醒者的真实修仙段位、信誉分与历史 Parity 波动进行三维对齐。
                      </p>
                      
                      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                           <div className="glass-ui" style={{ padding: '15px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>因果链稳态</div>
                                <div style={{ fontWeight: 'bold' }}>HIGH</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '15px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>净信誉带宽</div>
                                <div style={{ fontWeight: 'bold' }}>108 Gbps</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '15px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>判定时延</div>
                                <div style={{ fontWeight: 'bold' }}>1ms</div>
                           </div>
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default JudiciaryPage;
