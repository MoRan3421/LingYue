import React, { useState } from 'react';

interface SettingsProps {
    onClose: () => void;
}

const SettingsOverlay: React.FC<SettingsProps> = ({ onClose }) => {
    const [graphics, setGraphics] = useState('HIGH');
    const [fps, setFps] = useState(true);

    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(20px)' }}>
             <div className="glass-ui neon-border" style={{ width: '600px', padding: '50px', borderRadius: '30px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                       <h2 className="brand-font" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>系统设置 (SYSTEM)</h2>
                       <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}>×</button>
                  </div>

                  <div style={{ display: 'grid', gap: '30px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>画质等级 (GRAPHICS)</span>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                 {['LOW', 'MED', 'HIGH', 'ULTRA'].map(g => (
                                     <button key={g} onClick={() => setGraphics(g)} style={{ padding: '8px 20px', borderRadius: '10px', background: graphics === g ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: graphics === g ? '#000' : '#fff', border: 'none', fontWeight: '900', transition: '0.3s' }}>{g}</button>
                                 ))}
                            </div>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>高帧率模式 (FPS BOOST)</span>
                            <button onClick={() => setFps(!fps)} style={{ width: '60px', height: '30px', borderRadius: '30px', background: fps ? 'var(--accent)' : '#333', position: 'relative', border: 'none' }}>
                                <div style={{ position: 'absolute', top: '5px', left: fps ? '35px' : '5px', width: '20px', height: '20px', background: '#fff', borderRadius: '50%', transition: '0.3s' }}></div>
                            </button>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>音效音量 (E-SOUND)</span>
                            <input type="range" style={{ accentColor: 'var(--accent)', width: '200px' }} />
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>语言切换 (LANGUAGE)</span>
                            <button className="btn-outline" style={{ padding: '10px 30px' }}>简体中文 / English</button>
                       </div>
                  </div>

                  <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                       <button className="glow-btn" style={{ flex: 1, padding: '15px' }} onClick={onClose}>保存并退出</button>
                       <button className="btn-outline" style={{ flex: 1, padding: '15px' }} onClick={onClose}>取消更改</button>
                  </div>
                  
                  <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.7rem', opacity: 0.3 }}>
                      VERSION 1.0-ORIGIN (IMMORTAL) | ENGINE: TUARI-CORE V2
                  </div>
             </div>
        </div>
    );
};

export default SettingsOverlay;
