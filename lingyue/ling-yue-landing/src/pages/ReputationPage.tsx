import React from 'react';
import { useApp } from '../context/AppContext';

const ReputationPage: React.FC = () => {
    const { user } = useApp();

    return (
        <div className="rep-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>道心明鉴 (REPUTATION HALL)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                 
                 {/* Reputation Meter */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1rem', opacity: 0.5, marginBottom: '20px' }}>当前信誉等级</div>
                      <div className="brand-font" style={{ fontSize: '6rem', color: user.reputation >= 90 ? '#10b981' : '#ef4444', textShadow: `0 0 30px ${user.reputation >= 90 ? '#10b981' : '#ef4444'}` }}>
                           {user.reputation}<span style={{ fontSize: '2rem' }}> / 100</span>
                      </div>
                      <h3 style={{ marginTop: '20px', color: 'var(--accent)' }}>称号：信誉宗师</h3>
                      
                      <div className="glass-ui" style={{ marginTop: '40px', padding: '30px', borderRadius: '20px', textAlign: 'left' }}>
                           <h4 style={{ marginBottom: '15px' }}>状态特权：</h4>
                           <ul style={{ fontSize: '0.9rem', opacity: 0.8, display: 'grid', gap: '10px' }}>
                                <li>✓ 允许参加巅峰赛 (需 90+ 分)</li>
                                <li>✓ 允许参加排位赛 (需 80+ 分)</li>
                                <li>✓ 每日可领取信誉宝箱 (需 90+ 分)</li>
                                <li>✓ 赠送专属皮肤「明镜」</li>
                           </ul>
                      </div>
                 </div>

                 {/* Penalty Rules */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h4 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '40px' }}>戒律与惩罚 (LOGS)</h4>
                      
                      <div style={{ display: 'grid', gap: '20px' }}>
                           {[
                               { action: '挂机/逃跑', cost: '10 ~ 20 分', type: 'penalty' },
                               { action: '恶意演戏', cost: '20 ~ 30 分', type: 'penalty' },
                               { action: '言语辱骂', cost: '5 ~ 15 分', type: 'penalty' },
                               { action: '举报成功', cost: '+2 分', type: 'reward' },
                               { action: '每日登录', cost: '+1 分', type: 'reward' }
                           ].map((rule, i) => (
                               <div key={i} className="glass-ui" style={{ padding: '20px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ opacity: 0.7 }}>{rule.action}</span>
                                    <span style={{ fontWeight: 'bold', color: rule.type === 'penalty' ? '#ef4444' : '#10b981' }}>{rule.cost}</span>
                               </div>
                           ))}
                      </div>

                      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '15px', fontSize: '0.85rem', color: '#ef4444' }}>
                           警示：信誉分低于 60 分将禁止所有匹配，请保持良好的竞技礼仪。
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default ReputationPage;
