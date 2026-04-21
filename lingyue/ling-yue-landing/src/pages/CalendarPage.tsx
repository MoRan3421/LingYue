import React from 'react';

const MODES = [
    { day: '周一', name: '万龙坑·求生', desc: '全图无视野，混沌龙暴走' },
    { day: '周二', name: '九界·乱斗', desc: '随机英雄随机九界Buff' },
    { day: '周三', name: '归宗·镜像', desc: '全员选择相同英雄' },
    { day: '周四', name: '太初·一击', desc: '技能CD缩减90%' },
    { day: '周五', name: '因果·轮回', desc: '死亡后立即全状态原地复活' },
    { day: '周六', name: '混沌·争霸', desc: '10人混战，最后存活者胜' },
    { day: '周日', name: '始源·巅峰', desc: '排位积分翻倍，全英雄解锁' }
];

const CalendarPage: React.FC = () => {
    return (
        <div className="calendar-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>万象轮换 (108 MODES ROTATION)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '15px' }}>
                {MODES.map((m, i) => (
                    <div key={i} className="glass-ui neon-border" style={{ padding: '40px 15px', borderRadius: '30px', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                         <div className="brand-font" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '20px' }}>{m.day}</div>
                         <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '15px' }}>{m.name}</div>
                         <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{m.desc}</p>
                    </div>
                ))}
            </div>
            
            <div style={{ marginTop: '100px', display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
                 <div className="glass-ui" style={{ padding: '30px 60px', borderRadius: '20px' }}>
                      <span style={{ opacity: 0.5 }}>今日限定模式：</span>
                      <span className="brand-font" style={{ color: 'var(--accent)', marginLeft: '15px' }}>混沌·争霸 (CHAMPIONS)</span>
                 </div>
                 <button className="glow-btn" style={{ padding: '20px 40px', borderRadius: '40px' }}>立即匹配</button>
            </div>
            
            <div style={{ marginTop: '60px', textAlign: 'center', opacity: 0.1, fontSize: '0.7rem' }}>
                 EVMGSO-AURA 动态校验成功 | 108/108 模式就绪
            </div>
        </div>
    );
};

export default CalendarPage;
