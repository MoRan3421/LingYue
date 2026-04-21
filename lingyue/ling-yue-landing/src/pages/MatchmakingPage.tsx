import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const MatchmakingPage: React.FC = () => {
    const navigate = useNavigate();
    const { showToast } = useApp();
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('初始化 EVMGSO-AURA 协议...');
    const [playersFound, setPlayersFound] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPlayersFound(prev => (prev < 9 ? prev + Math.floor(Math.random() * 2) : 9));
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => navigate('/loading'), 1000);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 800);

        const statusTexts = [
            '正在检索 108 位始源觉醒者...',
            '全马 36 区资源同步中...',
            '因果算法匹配最优对手...',
            '正在锁定九界战场：灵曜峡谷',
            '匹配成功！准备觉醒...'
        ];
        
        let textIdx = 0;
        const textTimer = setInterval(() => {
            setStatus(statusTexts[textIdx]);
            textIdx = (textIdx + 1) % statusTexts.length;
        }, 2000);

        return () => {
            clearInterval(timer);
            clearInterval(textTimer);
        };
    }, []);

    return (
        <div className="matchmaking-container master-container" style={{ height: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            
            {/* AURA Radar */}
            <div style={{ position: 'relative', width: '400px', height: '400px', marginBottom: '60px' }}>
                 <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '4px solid rgba(251,191,36,0.1)', animation: 'pulse 2s infinite' }}></div>
                 <div style={{ position: 'absolute', inset: '50px', borderRadius: '50%', border: '2px solid rgba(251,191,36,0.2)' }}></div>
                 <div style={{ position: 'absolute', inset: '100px', borderRadius: '50%', border: '1px solid rgba(251,191,36,0.3)' }}></div>
                 
                 {/* Rotating Scanning Beam */}
                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 50%, rgba(251,191,36,0.2) 100%)', borderRadius: '50%', animation: 'rotate 4s linear infinite' }}></div>
                 
                 {/* Center Icon */}
                 <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <i className="ri-shield-user-fill" style={{ fontSize: '4rem', color: 'var(--accent)', filter: 'drop-shadow(0 0 20px var(--accent))' }}></i>
                 </div>

                 {/* Found Dots */}
                 {Array.from({ length: 9 }).map((_, i) => (
                     <div key={i} style={{ position: 'absolute', top: '20%', left: '30%', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', opacity: playersFound > i ? 1 : 0, transition: '0.3s', transform: `rotate(${i * 40}deg) translate(150px)` }}></div>
                 ))}
            </div>

            <h2 className="brand-font" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>正在搜寻始源战友</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--accent)', opacity: 0.8, marginBottom: '40px' }}>{status}</p>
            
            <div className="glass-ui" style={{ width: '400px', height: '8px', borderRadius: '10px', overflow: 'hidden' }}>
                 <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent)', transition: '0.3s', boxShadow: '0 0 15px var(--accent)' }}></div>
            </div>
            
            <div style={{ marginTop: '30px', fontSize: '0.8rem', opacity: 0.4 }}>已匹配觉醒者：{playersFound + 1} / 10 (EVMGSO-AURA 协议)</div>

            <style>{`
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(251,191,36,0.4); } 70% { box-shadow: 0 0 0 30px rgba(251,191,36,0); } 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } }
            `}</style>
        </div>
    );
};

export default MatchmakingPage;
