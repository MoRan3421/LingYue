import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const MallPage: React.FC = () => {
    const { user, showToast } = useApp();
    const [activeDepot, setActiveDepot] = useState('灵约石');

    const CURRENCIES = [
        { name: '灵约石', color: '#fbbf24', quota: 150, items: ['英雄契约书', '复活丹', '加速灵水'] },
        { name: '道缘', color: '#10b981', quota: 150, items: ['师徒传送令', '道侣玫瑰', '求偶广播'] },
        { name: '功德', color: '#3b82f6', quota: 100, items: ['业力消除药', '善名牌', '转世卷轴'] },
        { name: '业力', color: '#8b5cf6', quota: 150, items: ['黑市通行证', '诅咒之箭', '嗜血灵药'] },
        { name: '因果', color: '#ec4899', quota: 250, items: ['命理改版', '因果律透镜', '匹配净化器'] },
        { name: '天命', color: '#f97316', quota: 150, items: ['自选英雄包', '天命印记', '瑞符尘埃'] },
        { name: '轮回', color: '#6366f1', quota: 140, items: ['皮肤碎片', '进阶灵羽', '轮回宝珠'] },
        { name: '鸿蒙', color: '#14b8a6', quota: 100, items: ['始源碎片', '鸿蒙精华', '至高契约'] },
        { name: '混沌', color: '#ef4444', quota: 80, items: ['万龙之血', '混沌核心', '永恒徽章'] }
    ];

    return (
        <div className="mall-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>九界大藏 (THE NINE DEPOTS)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '60px' }}>
                 
                 {/* Left: Currency Select */}
                 <div style={{ display: 'grid', gap: '10px' }}>
                      {CURRENCIES.map(c => (
                          <div 
                            key={c.name} 
                            onClick={() => setActiveDepot(c.name)}
                            className="glass-ui" 
                            style={{ 
                                padding: '20px', 
                                borderRadius: '20px', 
                                cursor: 'pointer', 
                                border: activeDepot === c.name ? `2px solid ${c.color}` : '1px solid transparent',
                                background: activeDepot === c.name ? `${c.color}11` : 'rgba(255,255,255,0.03)'
                            }}
                          >
                               <div style={{ color: c.color, fontWeight: 'bold' }}>{c.name}商行</div>
                               <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>每日赠送：{c.quota}</div>
                          </div>
                      ))}
                 </div>

                 {/* Right: Item Grid */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px' }}>
                      <h3 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '40px', color: CURRENCIES.find(c => c.name === activeDepot)?.color }}>
                           {activeDepot}限定商品
                      </h3>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                           {CURRENCIES.find(c => c.name === activeDepot)?.items.map((it, i) => (
                               <div key={i} className="glass-ui" style={{ padding: '30px', borderRadius: '25px', textAlign: 'center' }}>
                                    <div style={{ width: '100px', height: '100px', margin: '0 auto 20px' }}>
                                         <Gem3D color={CURRENCIES.find(c => c.name === activeDepot)?.color || '#fff'} />
                                    </div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{it}</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.4, marginBottom: '25px' }}>{activeDepot}界域专属产出</div>
                                    <button 
                                      className="glow-btn" 
                                      onClick={() => showToast(`成功购买：${it}`, 'success')}
                                      style={{ width: '100%', padding: '15px', borderRadius: '30px', background: CURRENCIES.find(c => c.name === activeDepot)?.color, color: '#000' }}
                                    >
                                         购买
                                    </button>
                               </div>
                           ))}
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default MallPage;
