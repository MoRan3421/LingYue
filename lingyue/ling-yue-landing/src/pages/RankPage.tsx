import React from 'react';

const RankPage: React.FC = () => {
    const REGIONS = ['Kuala Lumpur', 'Selangor', 'Johor', 'Penang', 'Sabah', 'Sarawak', 'Perak'];
    const RANKS = [
        { name: '灵感宗主 (L.N)', level: '归宗 I', region: 'Kuala Lumpur', score: 9880, hero: '灵源' },
        { name: '炎之后裔 (Flame)', level: '归宗 III', region: 'Selangor', score: 9200, hero: '炎刃' },
        { name: '冰霜之心 (Frost)', level: '入圣 I', region: 'Johor', score: 8500, hero: '雪影' },
        { name: '虚空探索者 (Void)', level: '入圣 V', region: 'Penang', score: 7800, hero: '泰坦' }
    ];

    return (
        <div className="rank-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                <div>
                    <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>全马荣耀榜 (TOP RANKS)</h2>
                    <p style={{ opacity: 0.5 }}>马来西亚 36 区服实时同步 · 顶峰数据公开</p>
                </div>
                <div className="glass-ui" style={{ padding: '10px 30px', borderRadius: '15px' }}>
                    当前地区：Kuala Lumpur <i className="ri-arrow-down-s-line"></i>
                </div>
            </div>

            <div className="glass-ui" style={{ borderRadius: '30px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'rgba(255,255,255,0.02)', fontSize: '0.8rem', opacity: 0.5 }}>
                        <tr>
                            <th style={{ padding: '25px 40px' }}>排名</th>
                            <th>觉醒者</th>
                            <th>所在地区</th>
                            <th>最高段位</th>
                            <th>功勋评分</th>
                            <th style={{ padding: '25px 40px' }}>常用英雄</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RANKS.map((r, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i === 0 ? 'linear-gradient(90deg, rgba(251,191,36,0.05) 0%, transparent 100%)' : 'transparent' }}>
                                <td style={{ padding: '25px 40px' }}>
                                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: i < 3 ? 'var(--accent)' : '#222', color: i < 3 ? '#000' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                        {i + 1}
                                    </div>
                                </td>
                                <td className="brand-font" style={{ color: i === 0 ? 'var(--accent)' : '#fff' }}>{r.name}</td>
                                <td style={{ fontSize: '0.85rem', opacity: 0.6 }}>{r.region}</td>
                                <td style={{ color: 'var(--accent)' }}>{r.level}</td>
                                <td className="brand-font">{r.score}</td>
                                <td style={{ padding: '25px 40px', opacity: 0.6 }}>{r.hero}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                 {REGIONS.map(reg => (
                     <div key={reg} className="glass-ui" style={{ padding: '8px 20px', borderRadius: '50px', fontSize: '0.7rem', opacity: 0.4 }}>{reg}</div>
                 ))}
            </div>
        </div>
    );
};

export default RankPage;
