import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import AudioEngine, { AudioVisualizer } from './components/AudioEngine';
import SovereignClock from './components/SovereignClock';

// Pages - PORTAL ONLY (No Combat Assets)
import LandingPage from './pages/LandingPage';
import DownloadPage from './pages/DownloadPage';
import MallPage from './pages/MallPage';
import SettingsPage from './pages/SettingsPage';
import ArchivePage from './pages/ArchivePage';
import CampPage from './pages/CampPage';
import VIPPage from './pages/VIPPage';
import ProfilePage from './pages/ProfilePage';
import LegalPage from './pages/LegalPage';
import AdminDashboard from './pages/AdminDashboard';
import LeaderboardPage from './pages/LeaderboardPage';
import ArtifactsPage from './pages/ArtifactsPage';
import TrailerPage from './pages/TrailerPage';
import BountyPage from './pages/BountyPage';
import LoginPage from './pages/LoginPage';
import DiscordPage from './pages/DiscordPage';
import SovereignPanel from './pages/SovereignPanel';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const titles: Record<string, string> = {
            '/': '灵约：始源门户 | 全量3A竞技分发中心',
            '/legal': '法务合规 | 4+年龄许可认证',
            '/profile': '觉醒空间 | 修仙个人主页预览',
            '/mall': '九界大藏 | 货币限定商城预览',
            '/camp': '灵约营地 | 始源社区中枢'
        };
        document.title = titles[location.pathname] || '灵约 (Ling Yue)';
        const loader = document.getElementById('root-loader');
        if (loader) loader.style.display = 'none';
    }, [location]);

    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

const Navigation: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAudioEnabled, setAudioEnabled, isLoggedIn, user, logout } = useApp();

    return (
        <>
            <header className="glass-ui" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', zIndex: 1000, borderBottom: '1px solid rgba(251,191,36,0.1)' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                      <div className="avatar-logo" style={{ width: '30px', height: '30px', backgroundImage: 'url(/hero_3d.png)' }}></div>
                  <h1 className="brand-font" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>灵约·始源门户</h1>
                 </div>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div onClick={() => setAudioEnabled(!isAudioEnabled)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                           <AudioVisualizer />
                           <i className={isAudioEnabled ? "ri-volume-up-line" : "ri-volume-mute-line"} style={{ fontSize: '1.2rem', color: isAudioEnabled ? 'var(--accent)' : '#fff' }}></i>
                      </div>
                      <SovereignClock />
                      <nav style={{ display: 'flex', gap: '25px', fontSize: '1rem', fontWeight: 'bold' }}>
                           <Link to="/" style={{ color: location.pathname === '/' ? 'var(--accent)' : '#fff', textDecoration: 'none' }}>首页 (UTAMA)</Link>
                           <Link to="/camp" style={{ color: location.pathname === '/camp' ? 'var(--accent)' : '#fff', textDecoration: 'none' }}>营地 (KEM)</Link>
                           <Link to="/mall" style={{ color: location.pathname === '/mall' ? 'var(--accent)' : '#fff', textDecoration: 'none' }}>商城 (GEDUNG)</Link>
                           <Link to="/legal" style={{ color: location.pathname === '/legal' ? 'var(--accent)' : '#fff', textDecoration: 'none' }}>法务 (LEGAL)</Link>
                      </nav>
                      {isLoggedIn ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                              <Link to="/profile" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
                                  <i className="ri-user-heart-line"></i> {user?.username}
                              </Link>
                              <button onClick={logout} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
                                  <i className="ri-logout-box-r-line"></i>
                              </button>
                          </div>
                      ) : (
                          <button className="glow-btn" onClick={() => navigate('/login')} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '0.9rem' }}>登录营地 (LOGIN)</button>
                      )}
                      <button className="glow-btn" onClick={() => navigate('/download')} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '0.9rem', background: 'var(--secondary)' }}>正在决战 (PLAY)</button>
                 </div>
            </header>

            <div className="mobile-bottom-nav">
                 <Link to="/" style={{ color: location.pathname === '/' ? 'var(--accent)' : '#fff', fontSize: '1rem' }}><i className="ri-home-heart-line"></i></Link>
                 <Link to="/camp" style={{ color: location.pathname === '/camp' ? 'var(--accent)' : '#fff', fontSize: '1rem' }}><i className="ri-community-line"></i></Link>
                 <Link to="/mall" style={{ color: location.pathname === '/mall' ? 'var(--accent)' : '#fff', fontSize: '1rem' }}><i className="ri-treasure-map-line"></i></Link>
                 <Link to="/legal" style={{ color: location.pathname === '/legal' ? 'var(--accent)' : '#fff', fontSize: '1rem' }}><i className="ri-shield-line"></i></Link>
            </div>
        </>
    );
};

const App: React.FC = () => {
    return (
        <div style={{ position: 'relative' }}>
            <AudioEngine />
            <Navigation />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
                    <Route path="/camp" element={<PageWrapper><CampPage /></PageWrapper>} />
                    <Route path="/mall" element={<PageWrapper><MallPage /></PageWrapper>} />
                    <Route path="/archive" element={<PageWrapper><ArchivePage /></PageWrapper>} />
                    <Route path="/legal" element={<PageWrapper><LegalPage /></PageWrapper>} />
                    <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
                    <Route path="/profile" element={<PageWrapper><ProfilePage /></PageWrapper>} />
                    <Route path="/vip" element={<PageWrapper><VIPPage /></PageWrapper>} />
                    <Route path="/rank" element={<PageWrapper><LeaderboardPage /></PageWrapper>} />
                    <Route path="/artifacts" element={<PageWrapper><ArtifactsPage /></PageWrapper>} />
                    <Route path="/trailer" element={<PageWrapper><TrailerPage /></PageWrapper>} />
                    <Route path="/bounty" element={<PageWrapper><BountyPage /></PageWrapper>} />
                    <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
                    <Route path="/discord" element={<PageWrapper><DiscordPage /></PageWrapper>} />
                    <Route path="/sovereign" element={<PageWrapper><SovereignPanel /></PageWrapper>} />
                    <Route path="/download" element={<PageWrapper><DownloadPage /></PageWrapper>} />
                    <Route path="/settings" element={<PageWrapper><SettingsPage /></PageWrapper>} />
                    <Route path="*" element={<PageWrapper><LandingPage /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default App;
