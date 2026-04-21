import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const MarketPage: React.FC = () => {
    const { showToast } = useApp();
    const [tab, setTab] = useState('black');

    const BLACK_MARKET = [
        { name: '混沌原石', cost: '混沌币 x10', risk: '极高', rarity: '至宝' },
        { name: '鸿蒙紫气', cost: '鸿蒙币 x5', risk: '高', rarity: '神器' },
        { name: '无量密匙', cost: '灵约石 x50000', risk: '中', rarity: '道具' }
    ];

    const FREE_TRADE = [
        { name: '破军之刃 (极品)', seller: '始源老祖', price: '功德 x300' },
        { name: '万龙神珠 (仿)', seller: '地摊小王', price: '道缘 x500' },
        { name: '洛神皮肤券', seller: '锦鲤本鲤', price: '因果 x100' }
    ];

    return (
        <div className="market-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px' }}>因果集市 (MARKETPLACE)</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
                <button 
                    onClick={() => setTab('black')}
                    style={{ padding: '15px 40px', borderRadius: '50px', border: 'none', background: tab === 'black' ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: tab === 'black' ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    混沌黑市 (BLACK MARKET)
                </button>
                <button 
                    onClick={() => setTab('free')}
                    style={{ padding: '15px 40px', borderRadius: '50px', border: 'none', background: tab === 'free' ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: tab === 'free' ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    自由交易 (FREE TRADE)
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                 {tab === 'black' ? BLACK_MARKET.map((it, i) => (
                     <div key={i} className="glass-ui neon-border" style={{ padding: '40px', borderRadius: '30px', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ fontSize: '0.7rem', color: '#ef4444', marginBottom: '10px' }}>危险等级：{it.risk}</div>
                          <h4 className="brand-font" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{it.name}</h4>
                          <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '25px' }}>品质：{it.rarity}</div>
                          <button className="glow-btn" onClick={() => showToast('黑市交易成功，因缘已了。', 'success')} style={{ width: '100%', padding: '12px', borderRadius: '12px' }}>{it.cost} 购入</button>
                     </div>
                 )) : FREE_TRADE.map((it, i) => (
                     <div key={i} className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                               <h4 style={{ fontSize: '1.1rem' }}>{it.name}</h4>
                               <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>摊主：{it.seller}</p>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                               <div style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '10px' }}>{it.price}</div>
                               <button className="btn-outline" onClick={() => showToast('交易达成', 'success')} style={{ padding: '5px 20px', borderRadius: '8px' }}>购买</button>
                          </div>
                     </div>
                 ))}
            </div>
        </div>
    );
};

export default MarketPage;
