import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const AchievementPage: React.FC = () => {
    const { user, showToast } = useApp();
    const [filter, setFilter] = useState('all');

    const ACHIEVEMENTS = [
        { id: 1, name: '始源觉醒', desc: '首次进入灵曜峡谷', status: 'done', reward: '称号：初入九界' },
        { id: 2, name: '万龙主宰', desc: '累计击杀终极龙 108 次', status: 'pending', reward: '勋章：万龙捕手' },
        { id: 3, name: '富甲一方', desc: '九大货币累计达到 100w', status: 'pending', reward: '至宝：聚宝盆' },
        { id: 4, name: '无量无尽', desc: '等级达到 500 级', status: 'pending', reward: '终极称号：无量无尽' }
    ];

    return (
        <div className="ach-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>至高荣耀 (ACHIEVEMENTS & TITLES)</h2>
            
            <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '80px' }}>
                 
                 {/* Left: User Stats & Active Title */}
                 <div style={{ textAlign: 'center' }}>
                      <div className="avatar-logo" style={{ width: '150px', height: '150px', margin: '0 auto 30px', backgroundImage: 'url(/hero_3d.png)' }}></div>
                      <h3 className="brand-font" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{user.rank}</h3>
                      <div style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '10px' }}>当前称号：[ 始源先驱 ]</div>
                      
                      <div style={{ marginTop: '50px', display: 'grid', gap: '20px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>成就点</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>14,200</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>勋章收集</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12 / 108</div>
                           </div>
                      </div>
                 </div>

                 {/* Right: Achievement List */}
                 <div>
                      <h4 className="brand-font" style={{ marginBottom: '40px' }}>成长印记</h4>
                      <div style={{ display: 'grid', gap: '20px' }}>
                           {ACHIEVEMENTS.map(a => (
                               <div key={a.id} className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: a.status === 'done' ? 1 : 0.4 }}>
                                    <div>
                                         <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>{a.name}</div>
                                         <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{a.desc}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                         <div style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>奖励：{a.reward}</div>
                                         {a.status === 'done' ? (
                                             <div style={{ color: '#10b981', marginTop: '5px', fontSize: '0.8rem' }}>✓ 已达成</div>
                                         ) : (
                                             <div style={{ color: '#fff', opacity: 0.3, marginTop: '5px', fontSize: '0.8rem' }}>进行中...</div>
                                         )}
                                    </div>
                               </div>
                           ))}
                      </div>
                      
                      <button className="glow-btn" onClick={() => showToast('全服唯一称号「万龙之主」已激活', 'success')} style={{ width: '100%', marginTop: '50px', padding: '25px', borderRadius: '50px', fontSize: '1.2rem' }}>
                           检阅始源勋章墙
                      </button>
                 </div>

            </div>
        </div>
    );
};

export default AchievementPage;
