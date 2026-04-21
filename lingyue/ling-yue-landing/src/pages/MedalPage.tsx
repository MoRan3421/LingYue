import React from 'react';

const MedalPage: React.FC = () => {
    const MEDALS = [
        { name: '始源至尊', icon: 'ri-vip-crown-2-fill', color: '#fbbf24', desc: '在全马排位中进入前 100 名' },
        { name: '万龙主宰', icon: 'ri-fire-fill', color: '#ef4444', desc: '单局内击杀 7 条主宰龙' },
        { name: '因果富贾', icon: 'ri-money-cny-box-fill', color: '#3b82f6', desc: '累计消耗灵约石超过 1,000,000' },
        { name: '九界情缘', icon: 'ri-heart-2-fill', color: '#f472b6', desc: '完成一次道侣结婚仪式' }
    ];

    return (
        <div className="medal-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px', textAlign: 'center' }}>勋章荣誉 (MEDALS)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                {MEDALS.map((m, i) => (
                    <div key={i} className="glass-ui neon-border" style={{ padding: '40px 20px', borderRadius: '30px', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                        <div style={{ width: '100px', height: '100px', margin: '0 auto 30px', borderRadius: '50%', background: `${m.color}11`, border: `2px solid ${m.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className={m.icon} style={{ fontSize: '3rem', color: m.color, filter: `drop-shadow(0 0 15px ${m.color}66)` }}></i>
                        </div>
                        <h4 className="brand-font" style={{ fontSize: '1.2rem', color: m.color, marginBottom: '15px' }}>{m.name}</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{m.desc}</p>
                    </div>
                ))}
            </div>
            
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                 <div className="glass-ui" style={{ padding: '30px 60px', borderRadius: '20px', display: 'inline-block' }}>
                      <span style={{ opacity: 0.5 }}>当前全服称号：</span>
                      <span className="brand-font" style={{ color: 'var(--accent)', marginLeft: '15px' }}>归宗始源 · 大宗师</span>
                 </div>
            </div>
        </div>
    );
};

export default MedalPage;
