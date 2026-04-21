import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const ClanPage: React.FC = () => {
    const { user, t } = useApp();
    const [tab, setTab] = useState<'SECT' | 'MARRY' | 'MENTOR'>('SECT');

    return (
        <div className="clan-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', letterSpacing: '8px' }}>九大仙门总部 (CLAN HEADQUARTERS)</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
                    {['SECT', 'MARRY', 'MENTOR'].map(t_key => (
                        <button 
                            key={t_key} 
                            onClick={() => setTab(t_key as any)}
                            className="btn-outline"
                            style={{ 
                                padding: '15px 40px', 
                                borderRadius: '30px', 
                                border: tab === t_key ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)',
                                background: tab === t_key ? 'rgba(251,191,36,0.1)' : 'transparent',
                                color: tab === t_key ? 'var(--accent)' : '#fff'
                            }}
                        >
                            {t_key === 'SECT' ? '宗门大殿' : (t_key === 'MARRY' ? '月老红线' : '传承圣殿')}
                        </button>
                    ))}
                </div>
            </header>

            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {tab === 'SECT' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px' }}>
                            <h3 className="brand-font" style={{ marginBottom: '30px' }}>当前宗门：[太初剑域]</h3>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}><span>宗门等级</span><span>LV.10 (至尊)</span></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}><span>当前荣誉</span><span>885,000</span></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}><span>宗门排名</span><span>马来西亚全服第 1</span></div>
                            </div>
                            <button className="glow-btn" style={{ width: '100%', marginTop: '40px', padding: '20px', borderRadius: '15px' }}>参与宗门对垒战</button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                             {['炼丹房', '器械库', '护宗法阵', '远征堂'].map(m => (
                                 <div key={m} className="glass-ui neon-border" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
                                      <i className="ri-building-2-fill" style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '15px', display: 'block' }}></i>
                                      <span style={{ fontWeight: 'bold' }}>{m}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                )}

                {tab === 'MARRY' && (
                    <div className="glass-ui" style={{ padding: '80px', borderRadius: '40px', textAlign: 'center' }}>
                         <div style={{ width: '120px', height: '120px', background: 'rgba(239,68,68,0.1)', borderRadius: '50%', margin: '0 auto 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ef4444' }}>
                              <i className="ri-heart-pulse-fill" style={{ fontSize: '3.5rem', color: '#ef4444' }}></i>
                         </div>
                         <h3 className="brand-font" style={{ fontSize: '2rem', marginBottom: '20px' }}>道侣修仙登记</h3>
                         <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto 40px' }}>
                             与心仪的道侣结为夫妻，开启专属双修技能、共乘双人坐骑，并解锁独特的 3D 婚礼誓言动画。
                         </p>
                         <button className="glow-btn" style={{ padding: '20px 80px', borderRadius: '40px', background: '#ef4444' }}>寻觅道侣</button>
                    </div>
                )}

                {tab === 'MENTOR' && (
                    <div className="glass-ui" style={{ padding: '60px', borderRadius: '30px' }}>
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                              {['亲传弟子', '宗门名师', '薪火相传'].map(m => (
                                  <div key={m} className="glass-ui" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                       <h4 style={{ color: 'var(--accent)', marginBottom: '15px' }}>{m}</h4>
                                       <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>获得师徒专属被动技能，提升 10% 经验获取率。</p>
                                  </div>
                              ))}
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClanPage;
