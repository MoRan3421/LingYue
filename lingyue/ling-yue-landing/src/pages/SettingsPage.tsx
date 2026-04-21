import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const SettingsPage: React.FC = () => {
    const { showToast } = useApp();
    const [fps, setFps] = useState(120);
    const [quality, setQuality] = useState('ULTIMATE');
    const [rayTracing, setRayTracing] = useState(true);

    return (
        <div className="settings-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>觉醒配置 (PERFORMANCE TUNER)</h2>
            
            <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                 
                 {/* Graphics Settings */}
                 <div style={{ display: 'grid', gap: '40px' }}>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>渲染帧率上限 (FPS LIMIT)</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>开启 120 FPS 原生模式可获得极致丝滑的博弈体验。</div>
                           </div>
                           <div style={{ display: 'flex', gap: '10px' }}>
                                {[30, 60, 90, 120].map(f => (
                                    <button 
                                      key={f} 
                                      onClick={() => setFps(f)}
                                      className="glass-ui" 
                                      style={{ padding: '15px 25px', borderRadius: '15px', background: fps === f ? 'var(--accent)' : 'transparent', color: fps === f ? '#000' : '#fff', border: 'none', fontWeight: 'bold' }}
                                    >
                                         {f}
                                    </button>
                                ))}
                           </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>始源画质等级 (QUALITY)</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>ULTIMATE 档位将开启电影级全局光照与高精 Mesh。</div>
                           </div>
                           <select 
                             value={quality} 
                             onChange={(e) => setQuality(e.target.value)}
                             className="glass-ui" 
                             style={{ padding: '15px 30px', borderRadius: '15px', color: '#fff', border: 'none' }}
                           >
                                <option value="LOW">流畅 (STABLE)</option>
                                <option value="HIGH">高清 (SHARP)</option>
                                <option value="ULTIMATE">始源 (ULTIMATE)</option>
                           </select>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>硬件加速光线追踪 (RAY TRACING)</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>实时拟真九界能量流动反射，建议 RTX 30系列及以上开启。</div>
                           </div>
                           <button 
                             onClick={() => setRayTracing(!rayTracing)}
                             className="glow-btn" 
                             style={{ padding: '15px 40px', borderRadius: '30px', background: rayTracing ? '#10b981' : 'rgba(255,255,255,0.1)', color: rayTracing ? '#000' : '#fff' }}
                           >
                                {rayTracing ? '已开启' : '已关闭'}
                           </button>
                      </div>

                 </div>

                 <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', textAlign: 'center' }}>
                      <button className="glow-btn" onClick={() => showToast('配置已保存，引擎将在下次重启后生效', 'success')} style={{ padding: '20px 80px', borderRadius: '50px', fontSize: '1.2rem' }}>
                           应用配置 (APPLY)
                      </button>
                      <div style={{ marginTop: '20px', fontSize: '0.7rem', opacity: 0.3 }}>
                           当前设备：Native Win64/Android-Sovereign-Aura | 引擎版本：V1.0-ORIGIN-COMPLETE
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default SettingsPage;
