import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const LoadingPage: React.FC = () => {
    const navigate = useNavigate();
    const { selectedHero } = useApp();
    const hero = selectedHero || { name: '始源之光', img: '/hero_3d.png', color: '#fbbf24' };

    useEffect(() => {
        const timer = setTimeout(() => navigate('/combat'), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loading-container master-container" style={{ height: '100vh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'linear-gradient(90deg, #3b82f644 0%, #ef444444 100%)' }}></div>
            
            {/* VS Content */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '100px', position: 'relative', zIndex: 10 }}>
                 
                 {/* Blue Team */}
                 <div style={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: '10px' }}>
                      {[hero, ...Array(4).fill({ name: '觉醒队友', img: '/hero_3d.png' })].map((p, i) => (
                          <div key={i} className="glass-ui" style={{ padding: '10px 40px', borderRadius: '10px 40px 40px 10px', display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '4px solid #3b82f6', width: '350px' }}>
                               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover' }}></div>
                               <div style={{ fontSize: '0.9rem' }}>{p.name} <span style={{ opacity: 0.3, fontSize: '0.7rem' }}>[100%]</span></div>
                          </div>
                      ))}
                 </div>

                 <div className="brand-font" style={{ fontSize: '6rem', color: 'var(--accent)', textShadow: '0 0 30px var(--accent)' }}>VS</div>

                 {/* Red Team */}
                 <div style={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: '10px' }}>
                      {Array(5).fill({ name: '荒古敌军', img: '/hero_fire.png' }).map((p, i) => (
                          <div key={i} className="glass-ui" style={{ padding: '10px 40px', borderRadius: '40px 10px 10px 40px', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '20px', borderRight: '4px solid #ef4444', width: '350px' }}>
                               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover' }}></div>
                               <div style={{ fontSize: '0.9rem' }}>{p.name} <span style={{ opacity: 0.3, fontSize: '0.7rem' }}>[88%]</span></div>
                          </div>
                      ))}
                 </div>
            </div>

            <div style={{ padding: '60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div className="hologram-scan" style={{ padding: '5px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', maxWidth: '800px', margin: '0 auto' }}>
                      <div style={{ height: '3px', width: '75%', background: 'var(--accent)', borderRadius: '50px', boxShadow: '0 0 10px var(--accent)' }}></div>
                 </div>
                 <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.5, letterSpacing: '3px' }}>正在同步九界镜像数据 (SYNCHRONIZING NINE REALMS)...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
