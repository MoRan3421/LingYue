import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

const AudioEngine: React.FC = () => {
    const { isAudioEnabled } = useApp();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (isAudioEnabled) {
             if (audioRef.current) {
                 audioRef.current.play().catch(e => console.log("Audio play blocked", e));
             }
        } else {
             if (audioRef.current) {
                 audioRef.current.pause();
             }
        }
    }, [isAudioEnabled]);

    return (
        <div style={{ display: 'none' }}>
            <audio 
              ref={audioRef}
              loop 
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for high-fidelity OST
            />
        </div>
    );
};

export const AudioVisualizer: React.FC = () => {
    const { isAudioEnabled } = useApp();
    
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '20px', opacity: isAudioEnabled ? 1 : 0.3 }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div 
                  key={i} 
                  style={{ 
                    width: '3px', 
                    background: 'var(--accent)', 
                    height: '100%',
                    animation: isAudioEnabled ? `audio-bar 1s infinite ease-in-out ${i * 0.1}s` : 'none'
                  }}
                ></div>
            ))}
            <style>{`
                @keyframes audio-bar {
                    0%, 100% { height: 30%; }
                    50% { height: 100%; }
                }
            `}</style>
        </div>
    );
};

export default AudioEngine;
