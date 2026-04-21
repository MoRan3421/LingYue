import React from 'react';
import { motion } from 'framer-motion';

const DiscordPage: React.FC = () => {
    return (
        <div className="master-container" style={{ padding: '120px 20px', textAlign: 'center' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '50px' }}>觉醒者公会 (DISCORD GUILD)</h1>
            
            <div className="glass-ui" style={{ display: 'inline-block', padding: '60px', borderRadius: '40px', maxWidth: '600px' }}>
                <div style={{ fontSize: '5rem', marginBottom: '30px', color: '#5865F2' }}>
                    <i className="ri-discord-fill"></i>
                </div>
                <h2 className="brand-font">加入全球觉醒者社区</h2>
                <p style={{ opacity: 0.6, margin: '20px 0', lineHeight: 1.8 }}>
                    在 Discord 中与 108,000+ 位觉醒者交流，实时获取 AURA 系统的因果预警，
                    参与限时“桃园结义”社交活动。
                </p>
                <div style={{ marginTop: '40px' }}>
                    <a href="https://discord.gg/lingyue" target="_blank" rel="noreferrer" className="glow-btn" style={{ padding: '20px 60px', borderRadius: '30px', background: '#5865F2', display: 'inline-block', textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>
                        立即加入公会 (JOIN GUILD)
                    </a>
                </div>
            </div>
            
            <div style={{ marginTop: '60px', opacity: 0.4 }}>
                <p>团团熊猫 (TuanTuan Bot) 已入驻，实时因果监测开启中...</p>
            </div>
        </div>
    );
};

export default DiscordPage;
