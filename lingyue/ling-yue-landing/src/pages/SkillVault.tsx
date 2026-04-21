import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Gem3D from '../components/Gem3D';

const SkillVault: React.FC = () => {
    const { showToast } = useApp();
    const [activeCategory, setActiveCategory] = useState('marriage');

    const SKILLS = {
        marriage: [
            { name: '连理共生', desc: '道侣在场时，受到的伤害由双方平摊，并获得 20% 减伤。', effect: 'LIFELINK' },
            { name: '比翼双飞', desc: '瞬间传送到道侣身边，并获得 1.5 秒无敌。', effect: 'TELEPORT' }
        ],
        disciple: [
            { name: '薪火相传', desc: '师父溢出的经验值的 50% 将直接拨付给徒弟。', effect: 'EXP_BUFF' },
            { name: '授业解惑', desc: '师父可远程通过投影指导徒弟释放一次强力觉醒技。', effect: 'ULT_ASSIST' }
        ],
        clan: [
            { name: '宗门圣盾', desc: '宗门战专属：召唤一座持续 5 秒的圣盾，阻挡所有敌机。', effect: 'SHIELD' },
            { name: '万众一心', desc: '全宗门成员获得始源攻击力提升，层数叠加无上限。', effect: 'STACK_ATK' }
        ]
    };

    return (
        <div className="skill-vault-container master-container" style={{ minHeight: '100vh', background: '#050510', color: '#fff', padding: '120px 80px' }}>
            <h2 className="brand-font" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '60px' }}>社会秘籍 (SOVEREIGN SKILLS VAULT)</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: '80px' }}>
                 
                 {/* Skill Cards */}
                 <div style={{ display: 'grid', gap: '30px' }}>
                      {(SKILLS as any)[activeCategory].map((s: any, i: number) => (
                          <div key={i} className="glass-ui neon-border" style={{ padding: '40px', borderRadius: '30px', display: 'flex', gap: '40px', alignItems: 'center' }}>
                               <div style={{ width: '100px', height: '100px' }}>
                                    <Gem3D color={activeCategory === 'marriage' ? '#ec4899' : '#3b82f6'} />
                               </div>
                               <div>
                                    <h4 className="brand-font" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{s.name}</h4>
                                    <p style={{ opacity: 0.6, fontSize: '1rem', marginTop: '10px', lineHeight: '1.6' }}>{s.desc}</p>
                                    <div style={{ marginTop: '20px', fontSize: '0.7rem', color: '#10b981' }}>技能解析：{s.effect}</div>
                               </div>
                          </div>
                      ))}
                 </div>

                 {/* Category Selection */}
                 <div className="glass-ui" style={{ padding: '60px', borderRadius: '40px', height: 'fit-content' }}>
                      <h4 className="brand-font" style={{ marginBottom: '30px' }}>技能类别</h4>
                      <div style={{ display: 'grid', gap: '20px' }}>
                           <button onClick={() => setActiveCategory('marriage')} className="glow-btn" style={{ padding: '20px', borderRadius: '30px', background: activeCategory === 'marriage' ? '#ec4899' : 'transparent', color: '#fff', border: '1px solid #ec4899' }}>道侣专属技能 (MARRIAGE)</button>
                           <button onClick={() => setActiveCategory('disciple')} className="glow-btn" style={{ padding: '20px', borderRadius: '30px', background: activeCategory === 'disciple' ? '#3b82f6' : 'transparent', color: '#fff', border: '1px solid #3b82f6' }}>师徒传承技能 (MASTERY)</button>
                           <button onClick={() => setActiveCategory('clan')} className="glow-btn" style={{ padding: '20px', borderRadius: '30px', background: activeCategory === 'clan' ? '#fbbf24' : 'transparent', color: '#fff', border: '1px solid #fbbf24' }}>宗门团队技能 (CLAN)</button>
                      </div>

                      <div style={{ marginTop: '60px', padding: '30px', borderRadius: '25px', background: 'rgba(255,255,255,0.03)', textAlign: 'center' }}>
                           <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>当前已领悟</div>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12 / 108</div>
                           <p style={{ fontSize: '0.7rem', opacity: 0.3, marginTop: '10px' }}>通过提升社会阶级与修行等级解锁更多秘籍</p>
                      </div>
                 </div>

            </div>
        </div>
    );
};

export default SkillVault;
