import React from 'react';
import { Link } from 'react-router-dom';

const HERO_V1 = '/hero.png';

const NotFoundPage: React.FC = () => {
    return (
        <div className="notfound-container master-container" style={{ height: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="hologram-scan" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
            <div className="avatar-logo" style={{ width: '150px', height: '150px', marginBottom: '40px', backgroundImage: `url(${HERO_V1})`, filter: 'grayscale(1) brightness(0.5)' }}></div>
            
            <h1 className="brand-font" style={{ fontSize: '5rem', color: 'var(--neon-red)', textShadow: '0 0 20px var(--neon-red)', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', letterSpacing: '10px', marginBottom: '40px', color: '#fff', opacity: 0.8 }}>灵契链路中断 (CONNECTION LOST)</h2>
            <p style={{ maxWidth: '500px', opacity: 0.5, lineHeight: '2', marginBottom: '60px' }}>
                由于因果律扰动，您所访问的节点已从圣域矩阵中抹除。<br/>
                请检查您的契约链接并重新建立同步。
            </p>
            
            <Link to="/" className="glow-btn" style={{ padding: '20px 80px', borderRadius: '40px', textDecoration: 'none' }}>
                重连至始源大厅 (RECONNECT)
            </Link>
        </div>
    );
};

export default NotFoundPage;
