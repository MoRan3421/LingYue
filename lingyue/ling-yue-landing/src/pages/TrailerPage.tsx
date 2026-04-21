import React from 'react';
import { motion } from 'framer-motion';

const TrailerPage: React.FC = () => {
    return (
        <div className="master-container" style={{ padding: '120px 20px', textAlign: 'center' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '40px' }}>始源预告 (OFFICIAL TRAILER)</h1>
            
            <div className="glass-ui" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', aspectRatio: '16/9', borderRadius: '40px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                {/* Mock Video Player */}
                <div style={{ position: 'absolute', inset: 0, background: 'url(/landing_hero.png) no-repeat center/cover', opacity: 0.5 }}></div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <motion.div 
                        whileHover={{ scale: 1.2 }}
                        style={{ width: '100px', height: '100px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 50px var(--accent)' }}
                    >
                        <i className="ri-play-fill" style={{ fontSize: '3rem', color: '#000' }}></i>
                    </motion.div>
                    <h3 className="brand-font" style={{ marginTop: '30px', letterSpacing: '10px' }}>即将觉醒 (COMING SOON)</h3>
                </div>
            </div>
            
            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div className="glass-ui" style={{ padding: '20px' }}>
                    <h4>3A 视觉重塑</h4>
                    <p style={{ opacity: 0.4, fontSize: '0.8rem' }}>Cinematic Overhaul</p>
                </div>
                <div className="glass-ui" style={{ padding: '20px' }}>
                    <h4>AURA 公平系统</h4>
                    <p style={{ opacity: 0.4, fontSize: '0.8rem' }}>Fairplay Engine</p>
                </div>
                <div className="glass-ui" style={{ padding: '20px' }}>
                    <h4>吉隆坡仙都</h4>
                    <p style={{ opacity: 0.4, fontSize: '0.8rem' }}>World Building</p>
                </div>
            </div>
        </div>
    );
};

export default TrailerPage;
