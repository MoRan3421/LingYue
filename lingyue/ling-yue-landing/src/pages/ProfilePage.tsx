import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const ProfilePage: React.FC = () => {
    const { user } = useApp();
    const [activeSection, setActiveSection] = useState('status');

    return (
        <div className="profile-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>觉醒者空间 (SOVEREIGN SPACE)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '500px 1fr', gap: '80px' }}>
                 
                 {/* Left: 3D Image & Status */}
                 <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                      <div style={{ width: '300px', height: '300px', margin: '0 auto 40px' }}>
                           <Gem3D color="#fbbf24" />
                      </div>
                      <div className="brand-font" style={{ fontSize: '2rem' }}>修仙大宗师</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--accent)', marginTop: '10px' }}>【称号：万龙之主 · 始源】</div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '40px' }}>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>全服胜率</div>
                                <div style={{ fontWeight: 'bold' }}>82.5%</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>本赛季场次</div>
                                <div style={{ fontWeight: 'bold' }}>512</div>
                           </div>
                           <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4 }}>参团评分</div>
                                <div style={{ fontWeight: 'bold' }}>14.2</div>
                           </div>
                      </div>

                      <div className="glass-ui" style={{ marginTop: '40px', padding: '30px', borderRadius: '25px', textAlign: 'left' }}>
                           <h5 style={{ marginBottom: '15px' }}>无量修行进度：{user.level} / 500</h5>
                           <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                <div style={{ width: '28%', height: '100%', background: 'linear-gradient(to right, #fbbf24, #ef4444)' }}></div>
                           </div>
                      </div>
                 </div>

                 {/* Right: Tabbed Content */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px' }}>
                      <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                           {['status', 'medals', 'collection'].map(s => (
                               <button 
                                 key={s} 
                                 onClick={() => setActiveSection(s)}
                                 className="brand-font" 
                                 style={{ background: 'none', border: 'none', fontSize: '1.2rem', color: activeSection === s ? 'var(--accent)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', letterSpacing: '2px' }}
                               >
                                    {s === 'status' ? '荣誉成就' : (s === 'medals' ? '稀世勋章' : '神装图鉴')}
                               </button>
                           ))}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                           {activeSection === 'medals' ? (
                               Array.from({ length: 12 }).map((_, i) => (
                                   <div key={i} className="glass-ui" style={{ padding: '20px', borderRadius: '20px', textAlign: 'center', filter: i > 3 ? 'grayscale(1)' : 'none', opacity: i > 3 ? 0.3 : 1 }}>
                                        <div style={{ width: '60px', height: '60px', margin: '0 auto 10px' }}>
                                             <Gem3D color="#3b82f6" />
                                        </div>
                                        <div style={{ fontSize: '0.6rem' }}>{['五连绝世', '龙魂主宰', '富可敌国', '宗门之光'][i] || '未知荣光'}</div>
                                   </div>
                               ))
                           ) : (
                               Array.from({ length: 12 }).map((_, i) => (
                                   <div key={i} className="glass-ui" style={{ height: '120px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Gem3D color="#10b981" />
                                   </div>
                               ))
                           )}
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default ProfilePage;
