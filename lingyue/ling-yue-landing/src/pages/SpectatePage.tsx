import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpectatePage: React.FC = () => {
    const navigate = useNavigate();
    const MATCHES = [
        { tier: '归宗 I', region: 'Kuala Lumpur', viewers: '1.2M', heroes: ['灵源', '炎刃', '雪影', '泰坦', '洛神'] },
        { tier: '归宗 III', region: 'Selangor', viewers: '850K', heroes: ['瞬', '炎刃', '洛神', '泰坦', '雪影'] },
        { tier: '入圣 V', region: 'Johor', viewers: '420K', heroes: ['灵源', '瞬', '雪影', '泰坦', '炎刃'] }
    ];

    return (
        <div className="spectate-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px' }}>圣域观战 (SPECTATE)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                {MATCHES.map((m, i) => (
                    <div key={i} className="glass-ui neon-border" style={{ borderRadius: '30px', overflow: 'hidden', background: 'rgba(255,255,255,0.01)' }}>
                        <div style={{ width: '100%', height: '200px', background: 'rgba(0,0,0,0.4)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                             <div className="hologram-scan" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
                             <i className="ri-play-circle-fill" style={{ fontSize: '4rem', color: 'var(--accent)', cursor: 'pointer' }}></i>
                        </div>
                        <div style={{ padding: '30px' }}>
                             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{m.tier}</span>
                                  <span style={{ opacity: 0.5, fontSize: '0.8rem' }}><i className="ri-eye-line"></i> {m.viewers}</span>
                             </div>
                             <div style={{ fontSize: '0.9rem', marginBottom: '20px' }}>来自 {m.region} 的巅峰对抗</div>
                             <div style={{ display: 'flex', gap: '5px' }}>
                                  {m.heroes.map(h => (
                                      <div key={h} style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#222', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{h[0]}</div>
                                  ))}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpectatePage;
