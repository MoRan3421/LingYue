import React from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const SettlementPage: React.FC = () => {
    const { user } = useApp();

    return (
        <div className="settle-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>巅峰结算 (PEAK SETTLEMENT)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                 
                 {/* Weekly Top 100 Showcase */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h3 className="brand-font" style={{ fontSize: '2rem', marginBottom: '30px' }}>本周巅峰榜前 10 奖励</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                           <div className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '30px', borderLeft: '10px solid #fbbf24' }}>
                                <div style={{ width: '80px', height: '80px' }}>
                                     <Gem3D color="#fbbf24" />
                                </div>
                                <div>
                                     <div className="brand-font" style={{ fontSize: '1.2rem' }}>巅峰限定皮肤：【太初·不朽】</div>
                                     <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>发放对象：巅峰榜第 1 - 10 名</div>
                                </div>
                           </div>
                           <div className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '30px', borderLeft: '10px solid #10b981' }}>
                                <div style={{ width: '80px', height: '80px' }}>
                                     <Gem3D color="#10b981" />
                                </div>
                                <div>
                                     <div className="brand-font" style={{ fontSize: '1.2rem' }}>巅峰专属称号：【归宗之影】</div>
                                     <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>发放对象：巅峰榜第 11 - 100 名</div>
                                </div>
                           </div>
                      </div>
                 </div>

                 {/* Your Seasonal Progress */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '35px' }}>您的赛季征程</h4>
                      <div className="glass-ui" style={{ padding: '30px', borderRadius: '30px', marginBottom: '30px', textAlign: 'center' }}>
                           <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>当前修仙段位</div>
                           <div className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>{user.rank} ({user.subRank}/5)</div>
                           <div style={{ marginTop: '15px', color: '#10b981' }}>✓ 赛季结算预计获得：15,000 灵约石</div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>巅峰积分</div>
                                <div style={{ fontWeight: 'bold' }}>2,450 (全服 #142)</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '15px' }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>勇者积分</div>
                                <div style={{ fontWeight: 'bold', color: '#fbbf24' }}>1,800</div>
                           </div>
                      </div>

                      <div style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5, lineHeight: '1.8' }}>
                           注：只有胜利对局能获得等级经验。赛季结算时信誉分低于 90 将无法领取巅峰皮肤奖励。每赛季更新战令任务，请及时完成。
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default SettlementPage;
