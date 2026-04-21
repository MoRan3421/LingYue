import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const TaskPage: React.FC = () => {
    const { showToast } = useApp();
    const [tab, setTab] = useState('daily');

    const TASKS = [
        { id: 1, title: '每日巡防', desc: '在灵曜峡谷参与 3 场 5V5 对局', reward: '灵约石 x150', status: 'pending' },
        { id: 2, title: '宗门切磋', desc: '与同门弟子组队参与 1 场竞技', reward: '道缘 x150', status: 'done' },
        { id: 3, title: '斩妖除魔', desc: '累计击败推兵线小龙 10 条', reward: '功德 x100', status: 'pending' },
        { id: 4, title: '万龙主宰', desc: '击杀任意终极龙 1 次', reward: '战令经验 +2000', status: 'pending' }
    ];

    return (
        <div className="task-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>始源修行 (DAILY & BATTLE PASS TASKS)</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
                <button onClick={() => setTab('daily')} className="glass-ui" style={{ padding: '15px 40px', borderRadius: '40px', background: tab === 'daily' ? 'var(--accent)' : 'transparent', color: tab === 'daily' ? '#000' : '#fff', border: 'none', fontWeight: 'bold' }}>日常修行</button>
                <button onClick={() => setTab('pass')} className="glass-ui" style={{ padding: '15px 40px', borderRadius: '40px', background: tab === 'pass' ? 'var(--accent)' : 'transparent', color: tab === 'pass' ? '#000' : '#fff', border: 'none', fontWeight: 'bold' }}>战令任务</button>
            </div>

            <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px' }}>
                 <div style={{ display: 'grid', gap: '25px' }}>
                      {TASKS.map(t => (
                          <div key={t.id} className="glass-ui" style={{ padding: '30px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                               <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px' }}>
                                         <Gem3D color="#fbbf24" />
                                    </div>
                                    <div>
                                         <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{t.title}</div>
                                         <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{t.desc}</div>
                                    </div>
                               </div>
                               <div style={{ textAlign: 'right' }}>
                                    <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '10px' }}>奖励：{t.reward}</div>
                                    {t.status === 'done' ? (
                                        <button className="btn-outline" disabled style={{ padding: '10px 30px', borderRadius: '30px', opacity: 0.5 }}>已领取</button>
                                    ) : (
                                        <button className="glow-btn" onClick={() => showToast('任务进度已更新', 'info')} style={{ padding: '10px 30px', borderRadius: '30px' }}>前去完成</button>
                                    )}
                               </div>
                          </div>
                      ))}
                 </div>
            </div>
        </div>
    );
};

export default TaskPage;
