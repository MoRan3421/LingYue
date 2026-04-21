import React from 'react';
import { motion } from 'framer-motion';

const DownloadPage: React.FC = () => {
    const platforms = [
        { name: 'Windows (PC)', size: '1.2GB', icon: 'ri-windows-fill', note: '开启 4K 144Hz 视觉极致' },
        { name: 'Android (APK)', size: '250MB', icon: 'ri-android-fill', note: '极致性能优化，支持老旧设备' },
        { name: 'iOS (AppStore)', size: '280MB', icon: 'ri-apple-fill', note: 'Metal 驱动，极致功耗控制' }
    ];

    return (
        <div className="master-container" style={{ padding: '120px 20px', textAlign: 'center' }}>
            <h1 className="brand-font" style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '20px' }}>始源降临 (DISTRIBUTION)</h1>
            <p className="sub-title" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '80px' }}>选择您的位面，开启不朽传承</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                {platforms.map((p, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="glass-ui"
                        style={{ padding: '60px 40px', borderRadius: '40px', borderTop: '2px solid var(--accent)', textAlign: 'center' }}
                    >
                        <i className={p.icon} style={{ fontSize: '5rem', color: 'var(--accent)', marginBottom: '30px', display: 'block' }}></i>
                        <h2 className="brand-font" style={{ fontSize: '2rem' }}>{p.name}</h2>
                        <div style={{ margin: '20px 0', opacity: 0.6 }}>体积: {p.size}</div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '40px', minHeight: '40px' }}>{p.note}</p>
                        
                        <button className="glow-btn" style={{ width: '100%', padding: '20px', borderRadius: '15px' }}>
                            立即下载 (DOWNLOAD)
                        </button>
                    </motion.div>
                ))}
            </div>
            
            <div style={{ marginTop: '100px', padding: '40px', background: 'rgba(251,191,36,0.05)', borderRadius: '20px', border: '1px solid rgba(251,191,36,0.1)' }}>
                <h3 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>为什么选择《灵约》？</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', opacity: 0.7 }}>
                    <div>● 全平台数据互通</div>
                    <div>● 极致 250MB RAM 占用</div>
                    <div>● AURA 因果公平算法</div>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;
