import React from 'react';

export const ItemHub: React.FC = () => {
    const items = [
        { name: '破軍劍', type: '物理', stats: '+180 攻擊力', desc: '低於 50% 生命值增加傷害' },
        { name: '不祥徵兆', type: '防禦', stats: '+270 物防', desc: '受到攻擊減速敵方' },
        { name: '博學者之怒', type: '法術', stats: '+240 法強', desc: '增加 35% 全局法強' }
    ];

    return (
        <section id="armory" className="item-hub-section snap-child">
            <div className="section-header centered">
                <h2>靈約萬寶錄 <small>Armory Hub</small></h2>
                <p>研習頂級流派，打造屬於您的專屬神裝。</p>
            </div>
            <div className="item-grid-container glass">
                {items.map((it, i) => (
                    <div key={i} className="item-card glass">
                        <div className="item-icon"><i className="ri-sword-fill"></i></div>
                        <div className="item-info">
                            <h3>{it.name} <small>{it.type}</small></h3>
                            <p className="stats">{it.stats}</p>
                            <p className="desc">{it.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const Community: React.FC = () => {
    const topics = [
        { title: '# 靈約 S1 最強陣容分開', author: 'StrategyGod', views: '254k' },
        { title: '# 李青源：青蓮劍歌操作教學', author: 'DarkCloud', views: '1M+' },
        { title: '# 如何在 100v100 中生存？', author: 'Commander_Panda', views: '89k' }
    ];

    return (
        <section id="community" className="community-section snap-child">
            <div className="section-header">
                <h2>全馬熱點話題 <small>Hot Topics</small></h2>
                <p>加入靈約社區，與百萬召喚師分享攻略與戰勝瞬間。</p>
            </div>
            <div className="community-grid">
                {topics.map((t, i) => (
                    <div key={i} className="topic-card glass">
                        <h3>{t.title}</h3>
                        <div className="topic-meta">
                            <span>作者: {t.author}</span>
                            <span>閱讀: {t.views}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
