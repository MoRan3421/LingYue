import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const AuctionPage: React.FC = () => {
    const { user, showToast } = useApp();
    const [currentBid, setCurrentBid] = useState(120000);
    const [timeLeft, setTimeLeft] = useState(3600);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleBid = () => {
        const newBid = currentBid + 5000;
        setCurrentBid(newBid);
        showToast(`竞价成功！当前领先出价：${newBid.toLocaleString()} 灵约石`, 'success');
    };

    return (
        <div className="auction-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>全服拍卖 (SOVEREIGN AUCTION)</h2>
            
            <div className="glass-ui neon-border" style={{ padding: '80px', borderRadius: '40px', display: 'grid', gridTemplateColumns: '500px 1fr', gap: '100px', alignItems: 'center' }}>
                 
                 {/* Item Showcase */}
                 <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                           <Gem3D color="#fbbf24" />
                      </div>
                      <h3 className="brand-font" style={{ fontSize: '2.5rem', marginTop: '40px' }}>万龙神剑 · 始源</h3>
                      <div style={{ color: '#fbbf24', fontSize: '0.9rem', marginTop: '10px' }}>[ 全服唯一神器 (UNIQUE) ]</div>
                 </div>

                 {/* Bidding Control */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                           <div className="glass-ui" style={{ padding: '30px', borderRadius: '25px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px' }}>剩余时间</div>
                                <div className="brand-font" style={{ fontSize: '2rem', color: '#ef4444' }}>
                                     {Math.floor(timeLeft/60)}m {timeLeft%60}s
                                </div>
                           </div>
                           <div className="glass-ui" style={{ padding: '30px', borderRadius: '25px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px' }}>当前最高出价</div>
                                <div className="brand-font" style={{ fontSize: '2rem', color: 'var(--accent)' }}>
                                     {currentBid.toLocaleString()}
                                </div>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>出价者：归宗大宗师***</div>
                           </div>
                      </div>

                      <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px' }}>
                           <h4 style={{ marginBottom: '20px' }}>属性加成预览：</h4>
                           <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.8' }}>
                                攻击力 +50% | 全图龙息特效开启 | 专属称号【万龙之主】解锁权重增加。<br/>
                                始源被动：攻击时 10% 概率触发“造化之力”，无视目标所有防御。
                           </p>
                      </div>

                      <div style={{ display: 'flex', gap: '20px' }}>
                           <button className="glow-btn" onClick={handleBid} style={{ flex: 1, padding: '25px', borderRadius: '50px', fontSize: '1.2rem' }}>
                               出价 (加价 5000)
                           </button>
                           <button className="btn-outline" style={{ flex: 1, padding: '25px', borderRadius: '50px', fontSize: '1.2rem' }}>
                               一口价 1,000,000
                           </button>
                      </div>
                      
                      <div style={{ textAlign: 'center', fontSize: '0.7rem', opacity: 0.3 }}>
                           基于 EVMGSO 协议的公平竞拍逻辑 · 保证金已冻结
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default AuctionPage;
