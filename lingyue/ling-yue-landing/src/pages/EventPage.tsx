import React from 'react';

const EventPage: React.FC = () => {
    const EVENTS = [
        { name: '始源杯：5V5 巅峰公开赛', date: '2026.04.20 - 2026.05.01', prize: '九大至尊宝石礼包', img: 'ri-trophy-fill' },
        { name: '灵约周年：全英雄限时免费', date: '2026.04.14 - 2026.04.16', prize: '108 种全英雄体验', img: 'ri-gift-fill' },
        { name: '七龙降临：BOSS 讨伐限时双倍', date: '2026.04.15 20:00', prize: '灵约石 x2048', img: 'ri-sword-fill' }
    ];

    return (
        <div className="event-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px' }}>活动中心 (EVENTS)</h2>
            
            <div style={{ display: 'grid', gap: '30px' }}>
                {EVENTS.map((e, i) => (
                    <div key={i} className="glass-ui neon-border" style={{ padding: '50px', borderRadius: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(90deg, rgba(251,191,36,0.05) 0%, transparent 100%)' }}>
                        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '30px', background: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
                                <i className={e.img} style={{ fontSize: '3rem', color: 'var(--accent)' }}></i>
                            </div>
                            <div>
                                <h4 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{e.name}</h4>
                                <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>活动时间：{e.date}</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                             <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>究极奖赏</div>
                             <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{e.prize}</div>
                             <button className="glow-btn" style={{ marginTop: '20px', padding: '10px 40px', borderRadius: '12px' }}>立即参与</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
