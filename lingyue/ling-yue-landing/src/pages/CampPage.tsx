import React from 'react';
import { motion } from 'framer-motion';

const CampPage: React.FC = () => {
    const feeds = [
        { author: '青龙主宰', time: '2小时前', content: '今日 AURA 熵值异常波动，各位道友出战请小心业力反弹。', likes: 1082 },
        { author: '团团熊猫', time: '5小时前', content: '新的 3.5D 正方形野区已全量部署，去探索灵约的代码深处吧！', likes: 2450 },
        { author: '玩家_42', time: '1天前', content: '有没有人组队打“鸿蒙试炼”？已有两人。', likes: 120 }
    ];

    return (
        <div className="master-container" style={{ padding: '120px 20px', display: 'flex', gap: '40px', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Left Sidebar - Profile Summary */}
            <aside style={{ width: '350px', flexShrink: 0 }}>
                <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px', position: 'sticky', top: '120px' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--accent), var(--secondary))', margin: '0 auto 20px' }}></div>
                    <h2 className="brand-font" style={{ fontSize: '1.5rem', textAlign: 'center' }}>TuanTuanPanda</h2>
                    <div style={{ textAlign: 'center', color: 'var(--accent)', fontWeight: 'bold', margin: '10px 0' }}>始源架构师</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px', textAlign: 'center' }}>
                        <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>因果点</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>10.8K</div>
                        </div>
                        <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>桃园结义</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>14/C</div>
                        </div>
                    </div>
                    <button className="btn-outline" style={{ width: '100%', marginTop: '30px', padding: '15px', borderRadius: '15px' }}>
                        进入个人空间
                    </button>
                </div>
            </aside>

            {/* Main Content - Social Feed */}
            <main style={{ flex: 1 }}>
                <div style={{ marginBottom: '40px' }}>
                    <h2 className="brand-font" style={{ fontSize: '2rem', marginBottom: '20px' }}>始源大厅 (COMMUNITY FEED)</h2>
                    <div className="glass-ui" style={{ padding: '25px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                        <input type="text" placeholder="发表你的觉醒感言..." style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem', outline: 'none' }} />
                        <button className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px' }}>发布</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {feeds.map((f, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-ui"
                            style={{ padding: '30px', borderRadius: '25px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>{f.author}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>{f.time}</div>
                            </div>
                            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '20px' }}>{f.content}</p>
                            <div style={{ display: 'flex', gap: '20px', opacity: 0.6, fontSize: '0.9rem' }}>
                                <span><i className="ri-heart-line"></i> {f.likes}</span>
                                <span><i className="ri-chat-3-line"></i> 互动</span>
                                <span><i className="ri-share-line"></i> 分享</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CampPage;
