import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const SocialPage: React.FC = () => {
    const { user, showToast } = useApp();
    const [tab, setTab] = useState('marriage');

    return (
        <div className="social-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>九界道缘 (SOCIAL HUB)</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
                {['marriage', 'mentor', 'clan'].map(t => (
                    <button 
                        key={t}
                        onClick={() => setTab(t)}
                        style={{ padding: '15px 40px', borderRadius: '50px', border: 'none', background: tab === t ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: tab === t ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold', minWidth: '180px' }}
                    >
                        {t === 'marriage' ? '结为道侣 (WEDDING)' : (t === 'mentor' ? '拜师学艺 (ACADEMY)' : '宗门荣耀 (CLAN)')}
                    </button>
                ))}
            </div>

            <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px' }}>
                 
                 {/* Main Active Area */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                      {tab === 'marriage' && (
                          <div style={{ textAlign: 'center' }}>
                               <div style={{ width: '200px', height: '200px', margin: '0 auto 40px' }}>
                                    <Gem3D color="#f472b6" />
                               </div>
                               <h3 className="brand-font" style={{ fontSize: '2rem', marginBottom: '20px' }}>寻求道侣契约</h3>
                               <p style={{ opacity: 0.5, maxWidth: '500px', margin: '0 auto' }}>与心仪的觉醒者签署由于因果律定下的永恒契约，解锁专属夫妻技能：【同心降临】。</p>
                               <button className="glow-btn" onClick={() => showToast('已发布全服寻道启事', 'success')} style={{ marginTop: '40px', padding: '20px 60px', borderRadius: '40px' }}>发起仪式 (INITIATE)</button>
                          </div>
                      )}
                      
                      {tab === 'mentor' && (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                               {[1, 2].map(i => (
                                   <div key={i} className="glass-ui" style={{ padding: '30px', borderRadius: '30px', textAlign: 'center' }}>
                                        <div className="avatar-logo" style={{ width: '80px', height: '80px', margin: '0 auto 20px', backgroundImage: 'url(/hero_3d.png)' }}></div>
                                        <h4 style={{ color: 'var(--accent)' }}>始源太上长老</h4>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.4, margin: '15px 0' }}>修为：归宗大宗师</div>
                                        <button className="btn-outline" style={{ width: '100%', padding: '10px' }}>请求拜师</button>
                                   </div>
                               ))}
                          </div>
                      )}

                      {tab === 'clan' && (
                          <div>
                               <h3 className="brand-font" style={{ fontSize: '2rem', marginBottom: '30px' }}>当前正在进行的宗门战</h3>
                               <div className="glass-ui" style={{ padding: '30px', borderRadius: '20px', borderLeft: '5px solid var(--accent)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                         <span className="brand-font">凌霄宗 (WIN)</span>
                                         <span style={{ opacity: 0.5 }}>VS</span>
                                         <span className="brand-font">地府门 (LOSE)</span>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>战况：凌霄宗弟子正在占领对方主城池。</div>
                               </div>
                          </div>
                      )}
                 </div>

                 {/* Side Metadata */}
                 <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px', background: 'rgba(255,255,255,0.02)' }}>
                      <h4 className="brand-font" style={{ marginBottom: '30px' }}>社交统计</h4>
                      <div style={{ display: 'grid', gap: '20px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.5 }}>道侣契约：</span>
                                <span style={{ color: 'var(--accent)' }}>未激活</span>
                           </div>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.5 }}>师门传承：</span>
                                <span>3 位徒弟</span>
                           </div>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.5 }}>宗门贡献：</span>
                                <span style={{ color: '#fbbf24' }}>14.2k</span>
                           </div>
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default SocialPage;
