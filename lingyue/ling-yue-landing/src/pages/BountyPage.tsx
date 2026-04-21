import React from 'react';

const BountyPage: React.FC = () => {
    return (
        <div className="master-container" style={{ padding: '120px 20px' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '40px' }}>始源悬赏 (SOVEREIGN BOUNTY)</h1>
            
            <div className="glass-ui" style={{ padding: '40px', borderRadius: '30px' }}>
                <h2 className="brand-font" style={{ color: 'var(--secondary)' }}>寻找因果漏洞 (FIND THE GLITCH)</h2>
                <p style={{ opacity: 0.6, marginTop: '20px', lineHeight: 1.8 }}>
                    我们珍视每一位觉醒者的洞察力。如果您发现了 AURA 系统的漏洞或 9 道资产的异常跳变，请在此提交悬赏报告。
                </p>
                
                <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>P1: 核心资产溢出</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>奖励: 108,000 灵约石</div>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>P2: AURA 算法欺诈</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>奖励: 52,000 灵约石</div>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>P3: UI/UX 逻辑错误</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>奖励: 1,420 灵约石</div>
                    </div>
                </div>
            </div>
            
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <button className="glow-btn" style={{ padding: '15px 40px', borderRadius: '30px' }}>提交悬赏报告 (SUBMIT)</button>
            </div>
        </div>
    );
};

export default BountyPage;
