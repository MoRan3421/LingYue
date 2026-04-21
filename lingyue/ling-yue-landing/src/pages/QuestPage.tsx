import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const QUESTS = [
    { world: '灵曜', task: '通关灵曜深渊 10层', reward: '始源灵约石 x5000', status: 'available' },
    { world: '悟道', task: '完成悟道林采集任务', reward: '称号：悟道先行者', status: 'available' },
    { world: '无间', task: '击败由于业力而暴走的守护者', reward: '神器碎片 x10', status: 'available' },
    { world: '凌霄', task: '在凌霄竞技场连胜 10场', reward: '至极法翼 · 凌霄', status: 'locked' }
];

const QuestPage: React.FC = () => {
    const { showToast } = useApp();
    const [filter, setFilter] = useState('all');

    return (
        <div className="quest-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>九界修行 (WORLD QUESTS)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                 {QUESTS.map((q, i) => (
                     <div key={i} className="glass-ui neon-border" style={{ padding: '40px', borderRadius: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: q.status === 'locked' ? 0.4 : 1 }}>
                          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                               <div style={{ width: '60px', height: '60px' }}>
                                    <Gem3D color={q.world === '灵曜' ? '#fbbf24' : '#3b82f6'} />
                               </div>
                               <div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.5, color: 'var(--accent)' }}>[{q.world}界副本]</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}>{q.task}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '10px' }}>奖励：{q.reward}</div>
                               </div>
                          </div>
                          
                          <button 
                            className="glow-btn" 
                            onClick={() => showToast(`已接取任务：${q.task}`, 'success')}
                            disabled={q.status === 'locked'}
                            style={{ padding: '15px 40px', borderRadius: '40px', fontSize: '0.9rem' }}
                          >
                               {q.status === 'locked' ? '尚未解锁' : '接取任务'}
                          </button>
                     </div>
                 ))}
            </div>

            <div className="glass-ui" style={{ marginTop: '80px', padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                 <h3 className="brand-font" style={{ fontSize: '2rem', marginBottom: '20px' }}>穿梭九界，证道永恒</h3>
                 <p style={{ opacity: 0.5, maxWidth: '600px', margin: '0 auto' }}>完成九界所有主线修行，即可获得终极称号【无量无尽】，并解锁全服唯一坐骑【万龙神驹】。</p>
            </div>
        </div>
    );
};

export default QuestPage;
