import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const VIPPage: React.FC = () => {
    const { user } = useApp();
    const [activeTab, setActiveTab] = useState('vip'); // vip or noble

    const VIP_LEVELS = Array.from({ length: 36 }).map((_, i) => ({
        lv: i + 1,
        title: `觉醒使者 · 阶级 ${i + 1}`,
        reward: `每日领取灵约石 +${(i + 1) * 10}`,
        requirement: (i + 1) * 1000
    }));

    const NOBLE_LEVELS = [
        { lv: 1, name: '始源骑士', color: '#94a3b8' },
        { lv: 5, name: '万龙公爵', color: '#f59e0b' },
        { lv: 10, name: '九界至尊', color: '#ef4444' }
    ];

    return (
        <div className="vip-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>尊享圣域 (VIP & NOBLE SANCTUARY)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '80px' }}>
                 
                 {/* Left: Progression Status */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                      <div style={{ width: '200px', height: '200px', margin: '0 auto 40px' }}>
                           <Gem3D color={activeTab === 'vip' ? '#fbbf24' : '#ef4444'} />
                      </div>
                      <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>当前 VIP 等级</div>
                      <div className="brand-font" style={{ fontSize: '4rem', color: 'var(--accent)' }}>VIP {user.vip}</div>
                      
                      <div className="glass-ui" style={{ marginTop: '40px', padding: '30px', borderRadius: '25px', textAlign: 'left' }}>
                           <h4 style={{ marginBottom: '15px' }}>累计灵约石进度</h4>
                           <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                <div style={{ width: '45%', height: '100%', background: 'var(--accent)' }}></div>
                           </div>
                           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '10px', opacity: 0.5 }}>
                                <span>4,500 / 10,000</span>
                                <span>下一级: VIP {user.vip + 1}</span>
                           </div>
                      </div>

                      <div style={{ marginTop: '40px', display: 'grid', gap: '15px' }}>
                           <button onClick={() => setActiveTab('vip')} className="glow-btn" style={{ padding: '15px', borderRadius: '30px', background: activeTab === 'vip' ? 'var(--accent)' : 'transparent', color: activeTab === 'vip' ? '#000' : '#fff', border: '1px solid var(--accent)' }}>VIP 36 阶体系</button>
                           <button onClick={() => setActiveTab('noble')} className="glow-btn" style={{ padding: '15px', borderRadius: '30px', background: activeTab === 'noble' ? '#ef4444' : 'transparent', color: '#fff', border: '1px solid #ef4444' }}>贵族 10 阶特权</button>
                      </div>
                 </div>

                 {/* Right: Benefits List */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', maxHeight: '800px', overflowY: 'auto' }}>
                      <h3 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '40px' }}>
                           {activeTab === 'vip' ? '全 36 阶特权矩阵' : '至高 10 阶贵族勋章'}
                      </h3>
                      
                      <div style={{ display: 'grid', gap: '20px' }}>
                           {(activeTab === 'vip' ? VIP_LEVELS : NOBLE_LEVELS).map((item: any) => (
                               <div key={item.lv} className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: item.lv <= user.vip ? 1 : 0.4 }}>
                                    <div>
                                         <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: activeTab === 'vip' ? 'var(--accent)' : item.color }}>
                                              {activeTab === 'vip' ? `VIP ${item.lv}` : `贵族 ${item.lv} · ${item.name}`}
                                         </div>
                                         <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>
                                              {activeTab === 'vip' ? item.title : '专属全服入场特效 + 属性增益光环'}
                                         </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                         <div style={{ fontSize: '0.7rem', color: '#10b981' }}>{activeTab === 'vip' ? item.reward : '全属性 +5%'}</div>
                                         {item.lv <= user.vip ? (
                                             <div style={{ fontSize: '0.7rem', color: 'var(--accent)', marginTop: '5px' }}>[ 已激活 ]</div>
                                         ) : (
                                             <div style={{ fontSize: '0.7rem', opacity: 0.3, marginTop: '5px' }}>未解锁</div>
                                         )}
                                    </div>
                               </div>
                           ))}
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default VIPPage;
