import React from 'react';

const AdminDashboard: React.FC = () => {
    const metrics = [
        { label: 'AURA 累计算力', value: '1,024 TFlops', trend: '+12%' },
        { label: '全服业力中值', value: '0.0082', trend: 'STABLE' },
        { label: '当前在线位面', value: '1,240', trend: '+450' }
    ];

    const [activeTab, setActiveTab] = React.useState('metrics');
    const [logs, setLogs] = React.useState<string[]>(["[AUTH] Master Sovereign TuanTuan Logged In"]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newLogs = [
                `[AURA] Entropy calculated: ${(Math.random() * 0.01).toFixed(4)}`,
                `[SQL] Asset sync successful for User_${Math.floor(Math.random() * 1000)}`,
                `[BATTLE] New session started in "Jungle Square"`
            ];
            setLogs(prev => [newLogs[Math.floor(Math.random() * 3)], ...prev.slice(0, 50)]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="master-container" style={{ padding: '120px 20px' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', marginBottom: '40px' }}>管理监控中枢 (ADMIN CORE)</h1>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                <button onClick={() => setActiveTab('metrics')} className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px', background: activeTab === 'metrics' ? 'var(--accent)' : 'var(--glass)' }}>性能指标</button>
                <button onClick={() => setActiveTab('logs')} className="glow-btn" style={{ padding: '10px 30px', borderRadius: '10px', background: activeTab === 'logs' ? 'var(--accent)' : 'var(--glass)' }}>系统日志 (REAL-TIME)</button>
            </div>

            {activeTab === 'metrics' ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {metrics.map((m, i) => (
                        <div key={i} className="glass-ui" style={{ padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--accent)' }}>
                            <div style={{ opacity: 0.5, fontSize: '0.8rem' }}>{m.label}</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', margin: '15px 0' }}>{m.value}</div>
                            <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>趋势: {m.trend}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="glass-ui" style={{ padding: '30px', borderRadius: '20px', height: '500px', overflowY: 'auto', textAlign: 'left', fontFamily: 'monospace', background: '#000' }}>
                    {logs.map((log, i) => (
                        <div key={i} style={{ marginBottom: '10px', color: log.includes('AURA') ? 'var(--accent)' : '#10b981' }}>
                            <span style={{ opacity: 0.3 }}>{new Date().toLocaleTimeString()}</span> {log}
                        </div>
                    ))}
                </div>
            )}
            
            <div className="glass-ui" style={{ marginTop: '50px', padding: '40px', borderRadius: '30px' }}>
                <h2 className="brand-font" style={{ color: 'var(--secondary)' }}>源初指令集 (PRIME COMMANDS)</h2>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    <button className="glow-btn" style={{ padding: '12px 40px', borderRadius: '10px' }}>全服维护公告</button>
                    <button className="glow-btn" style={{ padding: '12px 40px', borderRadius: '10px', background: 'var(--secondary)' }}>重置 AURA 算力</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
