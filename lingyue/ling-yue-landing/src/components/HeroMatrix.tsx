import React from 'react';
import { motion } from 'framer-motion';

const HERO_CLASSES = [
    { name: '业火 (FIRE)', desc: '真实伤害 & 50层业火叠加', icon: '🔥', color: '#f472b6' }, /* Pink */
    { name: '寒霜 (FROST)', desc: '极致减速 & 5层冰冻控制', icon: '❄️', color: '#38bdf8' }, /* Blue */
    { name: '雷鸣 (THUNDER)', desc: '连锁闪电 & 雷劫范围全场', icon: '⚡', color: '#c084fc' }, /* Purple */
    { name: '灵木 (WOOD)', desc: '双抗成长 & 百分比回血盾', icon: '🍃', color: '#4dff88' },
];

const CURRENCIES = [
    { name: '灵约石', path: '石之道', amount: '150/d' },
    { name: '功德', path: '德之道', amount: '100/d' },
    { name: '业力', path: '罪之道', amount: '150/d' },
    { name: '因果', path: '缘之道', amount: '250/d' },
    { name: '鸿蒙', path: '空之道', amount: '100/d' },
];

const HeroMatrix: React.FC = () => {
    return (
        <section className="hero-matrix-section" style={{ padding: '100px 20px', background: 'rgba(15,15,26,0.5)' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>108 始源觉醒矩阵</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
                {HERO_CLASSES.map((hc, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="glass-ui"
                        style={{ padding: '40px', borderRadius: '24px', border: `1px solid ${hc.color}33` }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{hc.icon}</div>
                        <h3 className="brand-font" style={{ color: hc.color, marginBottom: '15px' }}>{hc.name}</h3>
                        <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{hc.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2 className="brand-font" style={{ fontSize: '2rem', marginBottom: '40px' }}>九道循环 · 资产体系</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {CURRENCIES.map((c, i) => (
                        <div key={i} className="glass-ui" style={{ padding: '15px 30px', borderRadius: '50px', border: '1px solid rgba(251,191,36,0.2)' }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{c.name}</span>
                            <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                            <span>{c.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroMatrix;
