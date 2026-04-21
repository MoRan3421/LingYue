import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Scene3D from '../components/Scene3D';

const HEROES = [
    { id: '1', name: '始源之光 · 灵源', role: 'Mid', color: '#fbbf24', img: '/hero_3d.png', desc: '召唤之主，万法由心。' },
    { id: '2', name: '不灭赤炎 · 炎刃', role: 'Top', color: '#ef4444', img: '/hero_fire.png', desc: '赤炎焚世，刀见青天。' },
    { id: '3', name: '永恒冻结 · 雪影', role: 'Mid', img: '/hero_ice.png', color: '#3b82f6', desc: '极寒所至，万物皆尘。' },
    { id: '4', name: '虚空圣盾 · 泰坦', role: 'Top', color: '#a855f7', img: '/heroes_pack2.png', offset: 0, desc: '虚空之御，稳如泰山。' },
    { id: '5', name: '青莲仙子 · 洛神', role: 'Support', color: '#10b981', img: '/heroes_pack2.png', offset: 33.33, desc: '青莲济世，洛水流香。' },
    { id: '6', name: '暗影灵狼 · 瞬', role: 'Jungle', color: '#6366f1', img: '/heroes_pack2.png', offset: 66.66, desc: '林间掠过，瞬息白骨。' }
];

const LANES = [
    { id: 'Top', name: '对抗路 (TOP)', icon: 'ri-landscape-line' },
    { id: 'Jungle', name: '打野位 (JGL)', icon: 'ri-mickey-line' },
    { id: 'Mid', name: '中路位 (MID)', icon: 'ri-bubble-chart-line' },
    { id: 'Bot', name: '发育路 (BOT)', icon: 'ri-money-cny-circle-line' },
    { id: 'Support', name: '游走路 (SUP)', icon: 'ri-shield-user-line' }
];

const HeroSelect: React.FC = () => {
    const { user, setSelectedHero, showToast } = useApp();
    const [selectedLane, setSelectedLane] = useState(LANES[1].id);
    const [selectedHero, setSelectedHeroState] = useState(HEROES[5]);
    const navigate = useNavigate();

    const filteredHeroes = HEROES.filter(h => h.role === selectedLane);

    useEffect(() => {
        if (filteredHeroes.length > 0 && !filteredHeroes.find(h => h.id === selectedHero.id)) {
            setSelectedHeroState(filteredHeroes[0]);
        }
    }, [selectedLane]);

    const handleConfirm = () => {
        setSelectedHero(selectedHero as any);
        showToast(`分路 [${selectedLane}] 已锁定。属性加成：+${user.evolutionStage}% (皮肤${user.evolutionStage}阶)`, 'success');
        navigate('/loading');
    };

    return (
        <div className="hero-select-container master-container" style={{ height: '100vh', background: '#000', color: '#fff', display: 'grid', gridTemplateColumns: '400px 1fr 350px', overflow: 'hidden' }}>
            
            {/* Left: Lanes & Reputation */}
            <div className="glass-ui" style={{ padding: '60px 30px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 <div style={{ marginBottom: '40px' }}>
                      <div className="brand-font" style={{ color: 'var(--accent)', fontSize: '1rem' }}>信誉等级：{user.reputation}</div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', marginTop: '10px' }}>
                           <div style={{ width: `${user.reputation}%`, height: '100%', background: user.reputation > 90 ? '#10b981' : '#ef4444' }}></div>
                      </div>
                 </div>

                 <h4 className="brand-font" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '20px' }}>职业分路锁定</h4>
                 {LANES.map(l => (
                     <div 
                        key={l.id} 
                        onClick={() => setSelectedLane(l.id)}
                        style={{ 
                            padding: '18px 25px', 
                            borderRadius: '20px', 
                            cursor: 'pointer', 
                            background: selectedLane === l.id ? 'rgba(251,191,36,0.1)' : 'transparent',
                            border: `1px solid ${selectedLane === l.id ? 'var(--accent)' : 'transparent'}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            transition: '0.3s'
                        }}
                     >
                          <i className={l.icon} style={{ fontSize: '1.5rem', color: selectedLane === l.id ? 'var(--accent)' : '#fff' }}></i>
                          <span style={{ fontSize: '1rem', opacity: selectedLane === l.id ? 1 : 0.4 }}>{l.name}</span>
                     </div>
                 ))}
            </div>

            {/* Center: 3D Preview (Stage 1-36 Evolution) */}
            <div style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                      <Scene3D playerPos={{ x: 400, y: 300 }} heroImg={selectedHero.img} />
                 </div>
                 
                 <div style={{ position: 'absolute', top: '40px', left: '0', right: '0', textAlign: 'center', zIndex: 10 }}>
                      <div className="glass-ui neon-border" style={{ padding: '10px 40px', borderRadius: '50px', display: 'inline-block' }}>
                           <span style={{ opacity: 0.5 }}>当前皮肤阶级：</span>
                           <span className="brand-font" style={{ color: 'var(--accent)' }}>第 {user.evolutionStage} 阶 / 共 36 阶</span>
                      </div>
                 </div>

                 <div style={{ position: 'absolute', bottom: '100px', left: '0', right: '0', textAlign: 'center', zIndex: 10 }}>
                      <h2 className="brand-font" style={{ fontSize: '5rem', color: selectedHero.color, textShadow: '0 0 50px rgba(0,0,0,0.8)' }}>{selectedHero.name}</h2>
                      <p style={{ fontSize: '1.2rem', opacity: 0.6, letterSpacing: '4px' }}>{selectedHero.desc}</p>
                      <button className="glow-btn" onClick={handleConfirm} style={{ marginTop: '40px', padding: '20px 100px', borderRadius: '40px', fontSize: '1.5rem' }}>锁定契约</button>
                 </div>
            </div>

            {/* Right: Hero Pool (108 Matrix Simulation) */}
            <div className="glass-ui" style={{ padding: '60px 20px', borderLeft: '1px solid rgba(255,255,255,0.05)', overflowY: 'auto' }}>
                 <h4 className="brand-font" style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '30px', textAlign: 'center' }}>108 位英雄契约阵</h4>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                      {filteredHeroes.map(h => (
                          <div 
                            key={h.id} 
                            onClick={() => setSelectedHeroState(h)}
                            className={`glass-ui ${selectedHero.id === h.id ? 'neon-border' : ''}`}
                            style={{ padding: '15px', borderRadius: '15px', cursor: 'pointer', textAlign: 'center', border: selectedHero.id === h.id ? `2px solid ${h.color}` : '1px solid rgba(255,255,255,0.05)', transition: '0.3s' }}
                          >
                               <div style={{ width: '80px', height: '80px', margin: '0 auto 15px', borderRadius: '50%', backgroundImage: `url(${h.img})`, backgroundSize: 'offset' in h ? '300% 100%' : 'cover', backgroundPosition: 'offset' in h ? `${h.offset}% 0` : 'center' }}></div>
                               <div style={{ fontSize: '0.8rem' }}>{h.name}</div>
                          </div>
                      ))}
                 </div>
                 <div style={{ marginTop: '40px', textAlign: 'center', opacity: 0.2, fontSize: '0.7rem' }}>
                      更多英雄契约解锁中... (108/108)
                 </div>
            </div>
        </div>
    );
};

export default HeroSelect;
