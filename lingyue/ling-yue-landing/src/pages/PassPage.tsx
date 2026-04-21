import React from 'react';

const PassPage: React.FC = () => {
    const LEVELS = Array.from({ length: 15 }).map((_, i) => ({
        lv: i + 1,
        free: i % 5 === 0 ? '灵约石 x500' : '空',
        premium: i === 14 ? '全图史诗皮肤' : (i % 3 === 0 ? '鸿蒙币 x5' : '功德 x10')
    }));

    return (
        <div className="pass-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <header style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                     <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>荣耀进阶 (BATTLE PASS)</h2>
                     <p style={{ opacity: 0.5 }}>完成任务提升战令等级 · 解锁始源限定资产</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                     <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>当前等级 (LV)</div>
                     <div className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>36</div>
                </div>
            </header>

            <div className="glass-ui" style={{ borderRadius: '30px', overflow: 'hidden' }}>
                 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                      <thead style={{ background: 'rgba(255,255,255,0.02)', fontSize: '0.8rem', opacity: 0.5 }}>
                           <tr>
                                <th style={{ padding: '20px' }}>等级</th>
                                <th>普通奖励 (FREE)</th>
                                <th>至尊奖励 (SOVEREIGN)</th>
                           </tr>
                      </thead>
                      <tbody>
                           {LEVELS.map(l => (
                               <tr key={l.lv} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: l.lv <= 36 ? 'linear-gradient(90deg, transparent, rgba(251,191,36,0.02), transparent)' : 'transparent' }}>
                                    <td style={{ padding: '25px', fontWeight: 'bold' }}>{l.lv}</td>
                                    <td style={{ opacity: l.free === '空' ? 0.2 : 1 }}>{l.free}</td>
                                    <td style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{l.premium}</td>
                               </tr>
                           ))}
                      </tbody>
                 </table>
            </div>
            
            <div style={{ position: 'fixed', bottom: '100px', right: '80px' }}>
                 <button className="glow-btn" style={{ padding: '20px 60px', borderRadius: '40px', fontSize: '1.2rem', boxShadow: '0 0 50px rgba(251,191,36,0.4)' }}>开启至尊进阶 (ACTIVATE PASS)</button>
            </div>
        </div>
    );
};

export default PassPage;
