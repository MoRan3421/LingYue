import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const { login } = useApp();

    const handleLogin = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (data.success) {
                login(username, data.token);
                navigate('/profile');
            } else {
                setMsg(data.message);
            }
        } catch (e) {
            setMsg('无法连接服务器');
        }
    };

    return (
        <div className="master-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-ui" 
                style={{ padding: '50px', borderRadius: '30px', width: '100%', maxWidth: '400px', textAlign: 'center' }}
            >
                <h1 className="brand-font" style={{ color: 'var(--accent)', marginBottom: '30px' }}>登录营地 (CAMP LOGIN)</h1>
                
                <input 
                    type="text" 
                    placeholder="请输入道号" 
                    className="glass-ui"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '15px', marginBottom: '20px', border: 'none', color: '#fff' }}
                />
                
                <input 
                    type="password" 
                    placeholder="请输入密文" 
                    className="glass-ui"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '15px', marginBottom: '20px', border: 'none', color: '#fff' }}
                />
                
                {msg && <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '20px' }}>{msg}</div>}

                <button 
                    onClick={handleLogin}
                    className="glow-btn"
                    style={{ width: '100%', padding: '15px', borderRadius: '15px' }}
                >
                    步入仙城
                </button>
                
                <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.4 }}>架构师默认: TuanTuan / panda123</p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
