import React from 'react';

const LegalPage: React.FC = () => {
    return (
        <div className="master-container" style={{ padding: '120px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '40px' }}>始源条款 (SOVEREIGN TERMS)</h1>
            
            <section className="glass-ui" style={{ padding: '40px', borderRadius: '30px', lineHeight: '1.8' }}>
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginBottom: '20px' }}>1. 契约精神 (Contract Intent)</h2>
                <p>进入灵约 (Ling Yue) 即意味着您同意建立始源契约。任何通过 AURA 系统判定为破坏平衡的行为将被剥夺 9 道资产。</p>
                
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginTop: '40px', marginBottom: '20px' }}>2. 资产所有权 (Asset Ownership)</h2>
                <p>所有九道资产（灵约石、功德等）受因果网保护。始源工作室不对因轮回转生导致的资产丢失负责。</p>
                
                <h2 className="brand-font" style={{ color: 'var(--secondary)', marginTop: '40px', marginBottom: '20px' }}>3. 隐私与数据 (Privacy)</h2>
                <p>您的游戏行为将用于训练 AURA 算法，以实现极致公平。我们不会在未获得授权的情况下将您的魂魄数据同步至三界之外。</p>
            </section>
        </div>
    );
};

export default LegalPage;
