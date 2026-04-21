import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const HERO_3D = '/hero_3d.png';
const HERO_FIRE = '/hero_fire.png';
const HERO_ICE = '/hero_ice.png';

const HEROES_DATA = [
    { 
        id: 'ling_yuan', 
        name: '始源之光 · 灵源', 
        role: '3D至尊位 (Legend)', 
        img: HERO_3D, 
        skills: ['因果斩', '源力冲击', '时空涅槃'], 
        desc: '掌控圣域矩阵核心的3D灵力英雄。',
        quotes: {
            pick: '“因果律已锁定，我的契约即是真理。”',
            ability: '“源力，爆发！”',
            death: '“矩阵...重启中...”'
        }
    },
    { 
        id: 'ignis', 
        name: '不灭赤炎 · 炎刃', 
        role: '爆发位 (Assassin)', 
        img: HERO_FIRE, 
        skills: ['业火斩', '瞬身闪', '红莲地狱'], 
        desc: '以焚天烈焰洗礼一切罪孽的复仇之刃。',
        quotes: {
            pick: '“感受这来自灰烬的咆哮吧。”',
            ability: '“焦炭，才是你们的归宿。”',
            death: '“火焰...永不熄灭。”'
        }
    },
    { 
        id: 'glacia', 
        name: '永恒冻结 · 雪影', 
        role: '控制位 (Mage)', 
        img: HERO_ICE, 
        skills: ['凝霜箭', '冰柱喷泉', '永恒冻结'], 
        desc: '极北寒霜的化身，掌控绝对零度的冰封女王。',
        quotes: {
            pick: '“世界的喧嚣，将在寒冬中平息。”',
            ability: '“冻结吧！”',
            death: '“雪...化了...”'
        }
    }
];

const WikiPage: React.FC = () => {
    const { t } = useApp();
    const [selectedHero, setSelectedHero] = useState(HEROES_DATA[0]);

    return (
        <div className="wiki-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 500px', gap: '100px', maxWidth: '1600px', margin: '0 auto' }}>
                 {/* Hero Cinematic Display */}
                 <div className="glass-ui neon-border" style={{ borderRadius: '40px', padding: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                      <div className="hologram-scan" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
                      <div className="avatar-logo" style={{ width: '250px', height: '250px', margin: '0 auto 40px', backgroundImage: `url(${selectedHero.img})`, filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))' }}></div>
                      <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '10px' }}>{selectedHero.name}</h2>
                      <div style={{ fontSize: '1.2rem', opacity: 0.5, letterSpacing: '5px', marginBottom: '40px' }}>{selectedHero.role}</div>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                           {selectedHero.skills.map((s, i) => (
                               <div key={i} className="glass-ui" style={{ padding: '15px 30px', borderRadius: '15px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</div>
                           ))}
                      </div>

                      {/* Hero Voice Over Display */}
                      <div className="glass-ui" style={{ padding: '20px', borderRadius: '20px', background: 'rgba(255,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
                           <p style={{ fontStyle: 'italic', opacity: 0.8, color: 'var(--accent)' }}>{selectedHero.quotes.pick}</p>
                           <p style={{ fontSize: '0.7rem', opacity: 0.3, marginTop: '10px' }}>VOICE: LING YUE OFFICIAL CV</p>
                      </div>
                 </div>

                 {/* Hero Selection Matrix */}
                 <div>
                      <h3 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '40px', opacity: 0.6 }}>矩阵档案 (THE ARCHIVES)</h3>
                      <div style={{ display: 'grid', gap: '20px' }}>
                           {HEROES_DATA.map(h => (
                               <div key={h.id} onClick={() => setSelectedHero(h)} style={{ display: 'flex', gap: '30px', alignItems: 'center', padding: '30px', borderRadius: '30px', background: selectedHero.id === h.id ? 'rgba(255,255,255,0.05)' : 'transparent', border: `1px solid ${selectedHero.id === h.id ? 'var(--accent)' : 'rgba(255,255,255,0.05)'}`, cursor: 'pointer', transition: '0.3s' }}>
                                    <div className="avatar-logo" style={{ width: '60px', height: '60px', backgroundImage: `url(${h.img})` }}></div>
                                    <div>
                                         <h4 style={{ fontSize: '1.2rem' }}>{h.name}</h4>
                                         <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{h.desc}</p>
                                    </div>
                               </div>
                           ))}
                      </div>
                      
                      <div style={{ marginTop: '60px', padding: '40px', borderRadius: '30px', background: 'rgba(251,191,36,0.02)', border: '1px dashed rgba(251,191,36,0.2)' }}>
                           <h4 style={{ color: 'var(--accent)', marginBottom: '20px' }}>觉醒台词 (VOICE SCRIPTS)</h4>
                           <ul style={{ fontSize: '0.9rem', opacity: 0.6, listStyle: 'none', display: 'grid', gap: '15px' }}>
                                <li>战斗中：{selectedHero.quotes.ability}</li>
                                <li>阵亡后：{selectedHero.quotes.death}</li>
                           </ul>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default WikiPage;
