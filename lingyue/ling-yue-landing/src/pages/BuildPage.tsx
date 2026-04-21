import React from 'react';

const ITEMS = [
    { name: '破军之刃', category: '攻击', cost: 2950, attr: '+180 物理攻击', desc: '敌方生命低于50%时伤害增加30%' },
    { name: '贤者之书', category: '法术', cost: 2990, attr: '+400 法术攻击', desc: '增加等同于法术攻击力12%的生命值' },
    { name: '不祥征兆', category: '防御', cost: 2180, attr: '+270 物理防御', desc: '受到伤害时减少攻击者30%攻速' },
    { name: '急速战靴', category: '移动', cost: 710, attr: '+25% 攻击速度', desc: '唯一被动：+60 移动速度' }
];

const BuildPage: React.FC = () => {
    return (
        <div className="build-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px' }}>圣坛神装 (ARMORY)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '80px' }}>
                {['攻击', '法术', '防御', '移动'].map(cat => (
                    <div key={cat} className="glass-ui" style={{ padding: '12px 25px', borderRadius: '50px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6, cursor: 'pointer' }}>{cat}</div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                {ITEMS.map((it, i) => (
                    <div key={i} className="glass-ui neon-border" style={{ padding: '35px', borderRadius: '30px', display: 'flex', gap: '30px', alignItems: 'center' }}>
                         <div style={{ width: '100px', height: '100px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <i className="ri-sword-fill" style={{ fontSize: '2.5rem', opacity: 0.5 }}></i>
                         </div>
                         <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                   <h4 className="brand-font" style={{ fontSize: '1.4rem' }}>{it.name}</h4>
                                   <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>💰 {it.cost}</span>
                              </div>
                              <div style={{ fontSize: '0.85rem', color: '#fbbf24', marginBottom: '5px' }}>{it.attr}</div>
                              <div style={{ fontSize: '0.75rem', opacity: 0.4 }}>{it.desc}</div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildPage;
