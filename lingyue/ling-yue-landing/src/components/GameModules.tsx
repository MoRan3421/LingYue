import React from 'react';

export const Leaderboard: React.FC = () => {
    const players = [
        { rank: 1, name: 'DarkCloud', hero: '李青源', winRate: '78.5%', tier: '國服最強' },
        { rank: 2, name: 'Ling_Yue_Pro', hero: '雲中影', winRate: '74.2%', tier: '最強巔峰' },
        { rank: 3, name: 'PandaKing', hero: '霸下', winRate: '72.1%', tier: '最強王者' },
        { rank: 4, name: 'CyberBlade', hero: '李青源', winRate: '69.8%', tier: '至尊星耀' },
    ];

    return (
        <section id="leaderboard" className="leaderboard-section snap-child">
            <div className="section-header centered">
                <span className="badge">巔峰榜單</span>
                <h2>大馬最強傳說</h2>
                <p>實時演算全服玩家戰力，見證青蓮劍心的巔峰對決。</p>
            </div>
            
            <div className="leaderboard-container glass">
                <div className="board-tabs">
                    <div className="tab active">排位榜</div>
                    <div className="tab">英雄榜</div>
                    <div className="tab">戰隊榜</div>
                </div>
                
                <div className="board-grid">
                    <div className="board-header">
                        <span>排名</span><span>召喚師</span><span>常用英雄</span><span>勝率</span><span>段位</span>
                    </div>
                    {players.map(p => (
                        <div key={p.rank} className="board-row">
                            <span className={`rank-num rank-${p.rank}`}>{p.rank}</span>
                            <span className="player-name">{p.name}</span>
                            <span>{p.hero}</span>
                            <span className="win-rate">{p.winRate}</span>
                            <span className="tier-tag">{p.tier}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const GameModes: React.FC = () => {
    const modes = [
        { title: '競技對抗', desc: '5v5 經典模式', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070' },
        { title: '百人國戰', desc: '100v100 跨服戰', img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070' },
        { title: '娛樂大亂鬥', desc: '全隨機無限火力', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070' },
        { title: '副本挑戰', desc: '四人聯機 PVE', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2000' }
    ];

    return (
        <section id="modes" className="modes-section snap-child">
            <div className="section-header">
                <h2>108 種模式 · 戰術競技</h2>
                <p>從 5v5 經典對戰到 100v100 跨服國戰，滿足所有競技渴望。</p>
            </div>
            <div className="modes-grid">
                {modes.map((m, i) => (
                    <div key={i} className="mode-card glass">
                        <img src={m.img} alt={m.title} className="mode-img"/>
                        <div className="mode-info">
                            <h3>{m.title}</h3>
                            <p>{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
