import React from 'react';
import { motion } from 'framer-motion';

const ArchivePage: React.FC = () => {
    return (
        <div className="master-container" style={{ padding: '120px 20px', textAlign: 'center' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '50px' }}>始源史册 (SOVEREIGN ARCHIVE)</h1>
            
            <motion.div 
                initial={{ y: 500 }}
                animate={{ y: -1500 }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                style={{ fontSize: '1.5rem', lineHeight: '4', opacity: 0.8 }}
            >
                <h2 className="brand-font" style={{ color: 'var(--secondary)' }}>始源架构师 (SOVEREIGN ARCHITECT)</h2>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>TuanTuanPanda</div>
                
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginTop: '100px' }}>核心策展 (CORE CURATION)</h2>
                <div>DeepLink Kuala Lumpur</div>
                <div>Primordial Foundry</div>
                
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginTop: '100px' }}>因果算法 (AURA ALGORITHM)</h2>
                <div>AURA Entropy Engine</div>
                
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginTop: '100px' }}>特别鳴谢 (SPECIAL THANKS)</h2>
                <div>EdgeOne Team</div>
                <div>Global Awakened Community</div>
                
                <div style={{ marginTop: '200px', fontSize: '1rem', opacity: 0.4 }}>
                    万世无量 · 因果圆满
                    <br />
                    LING YUE V1.0-ORIGIN
                </div>
            </motion.div>
        </div>
    );
};

export default ArchivePage;
