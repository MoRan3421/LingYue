import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const RedeemPage: React.FC = () => {
    const [code, setCode] = useState('');
    const { showToast } = useApp();

    const handleRedeem = () => {
        if (code === 'LINGYUE2026') {
            showToast('尊享码兑换成功！灵约石 x8888, 功德 x100 已入库。', 'success');
        } else {
            showToast('无效的因果密钥。', 'error');
        }
    };

    return (
        <div className="redeem-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-ui neon-border" style={{ padding: '60px', borderRadius: '40px', maxWidth: '600px', width: '100%', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                 <h2 className="brand-font" style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '10px' }}>兑换中心 (REDEEM)</h2>
                 <p style={{ opacity: 0.5, marginBottom: '40px' }}>请输入因果密钥，领取始源贺礼。</p>
                 
                 <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="ENTER CD-KEY"
                    style={{ width: '100%', padding: '20px', borderRadius: '15px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent)', textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px', outline: 'none' }}
                 />

                 <button className="glow-btn" onClick={handleRedeem} style={{ width: '100%', padding: '20px', borderRadius: '15px', fontSize: '1.2rem' }}>激活密钥</button>
                 
                 <div style={{ marginTop: '30px', fontSize: '0.75rem', opacity: 0.3 }}>关注官方 FB 获取最新“归宗补给”密钥</div>
            </div>
        </div>
    );
};

export default RedeemPage;
