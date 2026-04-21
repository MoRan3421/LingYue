import React from 'react';
import { motion } from 'framer-motion';

const ArtifactsPage: React.FC = () => {
    const artifacts = [
        { name: '双塔秘钥 (PETRONAS KEY)', desc: '打开吉隆坡仙城深层位面的唯一凭证。', color: 'var(--accent)' },
        { name: '始源榴莲 (DURIAN AGUNG)', desc: '服用后可瞬间恢复 1420 点业力，并获得永久“芳香”Buff。', color: '#fbbf24' },
        { name: '马六甲定海神针', desc: '镇守因果海流，确保 AURA 熵值处于极致公平。', color: 'var(--secondary)' },
        { name: '犀鸟羽冠', desc: '穿戴后可跨越界域缝隙，无视地形障碍。', color: '#ec4899' },
    ];

    return (
        <div className="master-container" style={{ padding: '120px 20px' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', textAlign: 'center', marginBottom: '60px' }}>始源珍宝 (SOVEREIGN ARTIFACTS)</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {artifacts.map((a, i) => (
                    <motion.div 
                        key={i}
                        className="glass-ui"
                        whileHover={{ scale: 1.05 }}
                        style={{ padding: '40px', borderRadius: '30px', textAlign: 'center', borderTop: `4px solid ${a.color}` }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏺</div>
                        <h3 className="brand-font" style={{ color: a.color }}>{a.name}</h3>
                        <p style={{ opacity: 0.6, marginTop: '15px', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ArtifactsPage;
