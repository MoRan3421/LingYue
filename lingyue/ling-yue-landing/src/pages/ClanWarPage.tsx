import React from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const ClanWarPage: React.FC = () => {
    const { showToast } = useApp();

    const BRACKETS = [
        { teamA: '灵曜圣宗', teamB: '悟道神殿', time: '今日 20:00' },
        { teamA: '大乘魔门', teamB: '虚空禁地', time: '今日 21:00' },
        { teamA: '冥河幽都', teamB: '凌霄天庭', time: '明日 19:00' }
    ];

    return (
        <div className="clan-war-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>宗门争霸 (CLAN WAR ARENA)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                 {BRACKETS.map((b, i) => (
                     <div key={i} className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.8rem', opacity: 0.4, marginBottom: '40px' }}>———— {b.time} · 巅峰对决 ————</div>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                               <div>
                                    <div style={{ width: '100px', height: '100px', margin: '0 auto 20px' }}>
                                         <Gem3D color="#3b82f6" />
                                    </div>
                                    <div className="brand-font" style={{ fontSize: '1.5rem' }}>{b.teamA}</div>
                               </div>

                               <div className="brand-font" style={{ fontSize: '3rem', opacity: 0.2 }}>VS</div>

                               <div>
                                    <div style={{ width: '100px', height: '100px', margin: '0 auto 20px' }}>
                                         <Gem3D color="#ef4444" />
                                    </div>
                                    <div className="brand-font" style={{ fontSize: '1.5rem' }}>{b.teamB}</div>
                               </div>
                          </div>

                          <button 
                            className="glow-btn" 
                            onClick={() => showToast(`已为 ${b.teamA} 助威！`, 'success')}
                            style={{ marginTop: '60px', width: '100%', padding: '20px', borderRadius: '40px' }}
                          >
                               立即参与助威 (CHEER)
                          </button>
                     </div>
                 ))}
            </div>

            <div className="glass-ui" style={{ marginTop: '80px', padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                 <h3 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>宗门榜首奖励</h3>
                 <p style={{ opacity: 0.5 }}>优胜宗门全员可获得【鸿蒙之气】x108 并在宗门领地竖立始源雕像。</p>
            </div>
        </div>
    );
};

export default ClanWarPage;
