import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SettingsOverlay from '../components/SettingsOverlay';

const HERO_V1 = '/hero.png';
const COMBAT_IMG = '/screenshot.png';

const GameUI: React.FC = () => {
    const [queueStatus, setQueueStatus] = useState<'idle' | 'searching' | 'matched'>('idle');
    const [timer, setTimer] = useState(0);
    const [selectedMode, setSelectedMode] = useState('5v5');
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();

    const MODES = [
        { id: '5v5', name: '不朽对垒 (5V5)', desc: '经典竞技' },
        { id: '1v1', name: '圣域决斗 (1V1)', desc: '技术磨砺' },
        { id: '108', name: '百八玄变 (PVE)', desc: '深渊闯关' },
    ];

    const CHAT_LOGS = [
        { user: '炎刃战神', msg: '三缺一，来个辅助！', color: '#fbbf24' },
        { user: '雪影', msg: '刚抽到了凌源的新皮肤，手感炸裂！', color: '#3b82f6' },
        { user: '灵约官方', msg: '今晚 20:00 开启双倍经验活动，准时参加！', color: '#ef4444' },
    ];

    useEffect(() => {
        let interval: any;
        if (queueStatus === 'searching') {
            interval = setInterval(() => setTimer(t => t + 1), 1000);
            if (timer > 5) {
                setQueueStatus('matched');
                clearInterval(interval);
            }
        }
        return () => clearInterval(interval);
    }, [queueStatus, timer]);

    return (
        <div className="game-lobby master-container" style={{ height: '100vh', background: '#000', color: '#fff', overflow: 'hidden', position: 'relative' }}>
            {/* Background Map Preview */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${COMBAT_IMG})`, backgroundSize: 'cover', transform: 'scale(1.1)', filter: 'blur(10px) brightness(0.3)' }}></div>

            {/* Top Bar */}
            <div style={{ position: 'absolute', top: '40px', left: '60px', right: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
                 <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                      <Link to="/camp" className="avatar-logo" style={{ width: '60px', height: '60px', backgroundImage: `url(${HERO_V1})`, borderRadius: '50%', border: '2px solid var(--accent)' }}></Link>
                      <div>
                           <div style={{ fontWeight: '900', fontSize: '1.2rem' }}>不朽战神 · 神王</div>
                           <div style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>LV.120 | 尊贵 VIP 10</div>
                      </div>
                 </div>
                 <div style={{ display: 'flex', gap: '20px' }}>
                      <div className="glass-ui" style={{ padding: '10px 25px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)' }}>
                           <i className="ri-copper-coin-line"></i> 1,280,450
                      </div>
                      <div className="glass-ui" style={{ padding: '10px 25px', borderRadius: '30px', background: 'rgba(251,191,36,0.1)', color: 'var(--accent)' }}>
                           <i className="ri-vip-diamond-line"></i> 8,888
                      </div>
                      <button className="glass-ui" onClick={() => setShowSettings(true)} style={{ padding: '10px', borderRadius: '50%' }}>
                           <i className="ri-settings-4-line"></i>
                      </button>
                 </div>
            </div>

            {/* Central Mode Selector */}
            <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 100, width: '100%' }}>
                 <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '80px' }}>
                      {MODES.map(m => (
                          <div key={m.id} onClick={() => setSelectedMode(m.id)} className={`glass-ui neon-border ${selectedMode === m.id ? 'active-mode' : ''}`} style={{ width: '250px', height: '350px', borderRadius: '30px', padding: '40px', cursor: 'pointer', perspective: '1000px', background: selectedMode === m.id ? 'rgba(251,191,36,0.1)' : 'rgba(255,255,255,0.02)', border: selectedMode === m.id ? '2px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)', transition: '0.3s' }}>
                               <div style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '10px' }}>{m.name}</div>
                               <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{m.desc}</div>
                               <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', textAlign: 'center', opacity: selectedMode === m.id ? 1 : 0 }}>
                                    <div style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>SELECTED</div>
                               </div>
                          </div>
                      ))}
                 </div>

                 {queueStatus === 'idle' && (
                     <button className="glow-btn" onClick={() => setQueueStatus('searching')} style={{ padding: '25px 120px', fontSize: '2rem', borderRadius: '60px' }}>
                        开始匹配 (START)
                     </button>
                 )}

                 {queueStatus === 'searching' && (
                     <div className="glass-ui neon-border" style={{ padding: '30px 80px', borderRadius: '60px', display: 'inline-block' }}>
                          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent)' }}>正在搜寻对手... {timer}s</div>
                          <button onClick={() => setQueueStatus('idle')} style={{ color: '#fff', opacity: 0.3, background: 'none', border: 'none', marginTop: '10px', textDecoration: 'underline', cursor: 'pointer' }}>取消匹配</button>
                     </div>
                 )}

                 {queueStatus === 'matched' && (
                     <div className="reveal visible" style={{ background: 'rgba(251,191,36,0.9)', color: '#000', padding: '40px 100px', borderRadius: '20px', boxShadow: '0 0 100px rgba(251,191,36,0.5)' }}>
                          <h2 className="brand-font" style={{ fontSize: '3rem', marginBottom: '20px' }}>匹配成功！</h2>
                          <button className="glow-btn" style={{ background: '#000', color: '#fff', fontSize: '1.5rem', padding: '15px 60px' }} onClick={() => navigate('/select')}>确认进入</button>
                     </div>
                 )}
            </div>

            {/* Global Chat Overlay */}
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '350px', zIndex: 100 }}>
                 <div className="glass-ui neon-border" style={{ height: '300px', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: '900', color: 'var(--accent)', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>世界聊天 (GLOBAL)</div>
                      <div style={{ flex: 1, overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                           {CHAT_LOGS.map((c, i) => (
                               <div key={i} style={{ fontSize: '0.85rem' }}>
                                    <span style={{ color: c.color, fontWeight: '700' }}>[{c.user}]: </span>
                                    <span style={{ opacity: 0.8 }}>{c.msg}</span>
                               </div>
                           ))}
                      </div>
                      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                           <input type="text" placeholder="输入消息..." style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 15px', borderRadius: '10px', color: '#fff', fontSize: '0.8rem' }} />
                           <button className="glow-btn" style={{ padding: '0 15px', fontSize: '0.8rem' }}>发送</button>
                      </div>
                 </div>
            </div>

            {/* Settings Overlay */}
            {showSettings && <SettingsOverlay onClose={() => setShowSettings(false)} />}
        </div>
    );
};

export default GameUI;
