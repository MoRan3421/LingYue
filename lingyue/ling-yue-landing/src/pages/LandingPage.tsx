import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

import HeroMatrix from '../components/HeroMatrix';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { initializeAudio } = useApp();
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#050510', color: '#fff', overflowX: 'hidden' }}>
            
            <AnimatePresence>
                {showSplash && (
                    <motion.div 
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#050510', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
                    >
                        <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                            transition={{ duration: 1.5, times: [0, 0.7, 1] }}
                            className="brand-font" 
                            style={{ fontSize: '12rem', color: 'var(--accent)', filter: 'drop-shadow(0 0 50px var(--accent))' }}
                        >
                            灵约
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 0.4 }} 
                            transition={{ delay: 1 }}
                            style={{ letterSpacing: '15px' }}
                        >
                            ORIGIN STUDIO
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="landing-container master-container">
                {/* --- HERO SECTION --- */}
                <header style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', textAlign: 'center' }}>
                    <motion.h1 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="massive-title"
                    >
                        灵约
                    </motion.h1>
                    <motion.p className="sub-title" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}>LING YUE: WU LIANG WU JIN</motion.p>
                    
                    <div style={{ marginTop: '80px', display: 'flex', gap: '30px' }}>
                        <button 
                            className="glow-btn" 
                            onClick={() => { initializeAudio(); navigate('/download'); }}
                            style={{ padding: '25px 80px', borderRadius: '50px', fontSize: '1.5rem' }}
                        >
                            立即下载 (PLAY NOW)
                        </button>
                        <button 
                            className="btn-outline" 
                            onClick={() => navigate('/camp')}
                            style={{ padding: '25px 80px', borderRadius: '50px', fontSize: '1.5rem' }}
                        >
                            灵约营地 (VISIT CAMP)
                        </button>
                    </div>

                    <div style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.3 }}>
                        * 本游戏对局（决战）部分仅限原生客户端运行，请通过【立即下载】获取 PC/Android/iOS 版本。
                    </div>
                </header>

                <HeroMatrix />

                {/* --- LORE SECTION (KL IMMORTAL CITY) --- */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>吉隆坡仙城 (IMMORTAL KL)</h2>
                    <h4 style={{ opacity: 0.4, letterSpacing: '5px' }}>KOTA KAYANGAN KUALA LUMPUR</h4>
                    <p style={{ maxWidth: '800px', margin: '30px auto', opacity: 0.6, fontSize: '1.2rem', lineHeight: 2 }}>
                        Di celah rekahan dimensi Menara Berkembar Petronas, kuasa Primordial telah menyusun semula realiti. Kumpul 'Durian Agung', tunggang 'Burung Enggang', dan capai 'Nine Paths Ritual' di tengah-tengah Selat Melaka.
                    </p>
                    <div className="glass-ui" style={{ display: 'inline-block', padding: '20px 40px', borderRadius: '50px', border: '1px solid var(--accent)' }}>
                       Worldview: Mitologi Malaysia · Alam Semesta Primordial
                    </div>
                </section>

                {/* --- CAMP PROMOTION --- */}
                <section style={{ padding: '80px', textAlign: 'center', background: 'rgba(251,191,36,0.02)' }}>
                    <h2 className="brand-font" style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--accent)' }}>灵约营地 · 始源社区</h2>
                    <p style={{ opacity: 0.4, marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                        灵约营地是觉醒者们的精神家园。在这里，您可以查看全英雄进化图谱、研究 525 种龙魂共鸣战术、结交同道中人，更有 S1 赛季专属礼包限量发放。
                    </p>
                    <button className="glow-btn" onClick={() => navigate('/camp')} style={{ padding: '15px 40px', borderRadius: '20px' }}>
                        进入灵约营地 (CAMP HUB)
                    </button>
                </section>

                <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.2 }}>
                    © 2026 灵约团队 | 始源永恒 | MCMC 4+ 认证 | 粤ICP备10825401号
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
