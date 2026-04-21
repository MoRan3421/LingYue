import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const MailPage: React.FC = () => {
    const { showToast } = useApp();
    const [mails, setMails] = useState([
        { id: 1, title: '全服补偿：系统维护奖励', content: '感谢您对灵约的支持，附赠灵约石 x2000。', rewards: '灵约石 x2000', read: false },
        { id: 2, title: '觉醒贺信：欢迎来到圣域', content: '开启您的始源之路。', rewards: '新手礼包', read: true },
        { id: 3, title: '公会战报：您的公会获得胜利', content: '参与奖励已发放。', rewards: '功德 +50', read: false }
    ]);

    const claim = (id: number) => {
        setMails(prev => prev.filter(m => m.id !== id));
        showToast('领奖成功！资产已入库。', 'success');
    };

    return (
        <div className="mail-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '60px' }}>圣域传书 (MAILBOX)</h2>
            
            <div style={{ maxWidth: '1000px', display: 'grid', gap: '15px' }}>
                {mails.map(m => (
                    <div key={m.id} className="glass-ui neon-border" style={{ padding: '30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                            <i className={m.read ? "ri-mail-open-line" : "ri-mail-unread-fill"} style={{ fontSize: '2rem', color: m.read ? '#666' : 'var(--accent)' }}></i>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{m.title}</h4>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{m.content}</p>
                                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '5px' }}>附件：{m.rewards}</div>
                            </div>
                        </div>
                        <button className="glow-btn" onClick={() => claim(m.id)} style={{ padding: '8px 25px', borderRadius: '10px' }}>一键领取</button>
                    </div>
                ))}
                {mails.length === 0 && <div style={{ textAlign: 'center', opacity: 0.3, marginTop: '100px' }}>暂无未读传书</div>}
            </div>
        </div>
    );
};

export default MailPage;
