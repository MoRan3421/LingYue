import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const ResultPage: React.FC = () => {
    const navigate = useNavigate();
    const { user, showToast } = useApp();
    const [claimed, setClaimed] = useState(false);

    const rewardsBlocked = user.reputation < 90;

    return (
        <div className="result-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px', textAlign: 'center' }}>
            
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="brand-font" 
              style={{ fontSize: '8vw', color: 'var(--accent)', marginBottom: '20px' }}
            >
                胜 胜 (VICTORY)
            </motion.div>
            
            <div style={{ fontSize: '1.2rem', opacity: 0.5, letterSpacing: '8px', marginBottom: '60px' }}>始源之光 · 照耀九界</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '1200px', margin: '0 auto' }}>
                 
                 {/* Left: Performance */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>战绩评估</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>K / D / A</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12 / 2 / 18</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>输出占比</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>36%</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>参团率</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>85%</div>
                           </div>
                      </div>
                      
                      <div style={{ marginTop: '40px' }}>
                           <div style={{ fontSize: '0.8rem', opacity: 0.4, marginBottom: '10px' }}>段位进度：{user.rank}</div>
                           <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                                <div style={{ width: '75%', height: '100%', background: 'var(--accent)' }}></div>
                           </div>
                           <div style={{ fontSize: '0.7rem', marginTop: '10px', color: 'var(--accent)' }}>距离下一阶：还需 1 场胜利</div>
                      </div>
                 </div>

                 {/* Right: Rewards & Reputation Check */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', position: 'relative' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>赛季与战后奖励</h4>
                      
                      <div className="glass-ui" style={{ padding: '30px', borderRadius: '30px', textAlign: 'center', marginBottom: '30px', border: rewardsBlocked ? '1px solid #ef4444' : '1px solid #10b981' }}>
                           <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>当前信誉积分</div>
                           <div className="brand-font" style={{ fontSize: '3rem', color: rewardsBlocked ? '#ef4444' : '#10b981' }}>{user.reputation}</div>
                           {rewardsBlocked && <div style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '10px' }}>[ 警告 ] 信誉分低于 90，本场奖励已扣除</div>}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', opacity: rewardsBlocked ? 0.3 : 1 }}>
                           {[
                               { name: '灵约石', amt: '+150', color: '#fbbf24' },
                               { name: '道缘分', amt: '+50', color: '#10b981' },
                               { name: '勇者积分', amt: '+200', color: '#3b82f6' }
                           ].map(r => (
                               <div key={r.name} className="glass-ui" style={{ padding: '15px', borderRadius: '15px' }}>
                                    <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>{r.name}</div>
                                    <div style={{ fontWeight: 'bold', color: r.color }}>{r.amt}</div>
                               </div>
                           ))}
                      </div>

                      <button 
                        className="glow-btn" 
                        onClick={() => { setClaimed(true); showToast('奖励领取成功！', 'success'); }}
                        disabled={rewardsBlocked || claimed}
                        style={{ width: '100%', marginTop: '40px', padding: '20px', borderRadius: '40px' }}
                      >
                           {rewardsBlocked ? '信誉不足，无法领取' : (claimed ? '奖励已进入包裹' : '领取奖励 (CLAIM)')}
                      </button>
                 </div>
            </div>

            <button className="btn-outline" onClick={() => navigate('/')} style={{ marginTop: '80px', padding: '20px 80px', borderRadius: '50px' }}>回到主城</button>
        </div>
    );
};

export default ResultPage;
