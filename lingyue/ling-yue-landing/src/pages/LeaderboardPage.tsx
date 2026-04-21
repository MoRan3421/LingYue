import React from 'react';

const LeaderboardPage: React.FC = () => {
    const rankings = [
        { rank: 1, name: '始源尊者', level: 500, karma: '无量', region: '吉隆坡仙城' },
        { rank: 2, name: '梦幻仙子', level: 498, karma: '大乘', region: '马六甲海峡' },
        { rank: 3, name: '团团熊猫', level: 480, karma: '圆满', region: '仙都中心' },
        { rank: 4, name: '榴莲大将', level: 450, karma: '金丹', region: '槟城界域' },
    ];

    return (
        <div className="master-container" style={{ padding: '120px 20px' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '40px' }}>始源金榜 (SOVEREIGN RANKINGS)</h1>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }} className="glass-ui">
                <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ padding: '20px', textAlign: 'left' }}>排行</th>
                        <th style={{ padding: '20px', textAlign: 'left' }}>觉醒者</th>
                        <th style={{ padding: '20px', textAlign: 'left' }}>修为等级</th>
                        <th style={{ padding: '20px', textAlign: 'left' }}>因果境界</th>
                        <th style={{ padding: '20px', textAlign: 'left' }}>所属界域</th>
                    </tr>
                </thead>
                <tbody>
                    {rankings.map(r => (
                        <tr key={r.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '20px', color: r.rank <= 3 ? 'var(--accent)' : '#fff' }}>#{r.rank}</td>
                            <td style={{ padding: '20px', fontWeight: 'bold' }}>{r.name}</td>
                            <td style={{ padding: '20px' }}>Lv.{r.level}</td>
                            <td style={{ padding: '20px', color: 'var(--secondary)' }}>{r.karma}</td>
                            <td style={{ padding: '20px', opacity: 0.6 }}>{r.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardPage;
