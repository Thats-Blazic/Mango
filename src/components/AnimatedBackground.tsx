
import { useEffect, useCallback } from 'react';

const AnimatedBackground = () => {
  const createFirefly = useCallback(() => {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    document.body.appendChild(firefly);
    firefly.style.left = `${Math.random() * window.innerWidth}px`;
    firefly.style.top = `${Math.random() * window.innerHeight}px`;
    firefly.style.animationDuration = `${Math.random() * 4 + 4}s`;
    firefly.style.width = `${Math.random() * 4 + 2}px`;
    firefly.style.height = firefly.style.width;
    setTimeout(() => firefly.remove(), 6000);
  }, []);

  useEffect(() => {
    const fireflyInterval = setInterval(createFirefly, 300);
    return () => clearInterval(fireflyInterval);
  }, [createFirefly]);

  return (
    <>
      <style>{`
        .firefly {
          position: absolute;
          background: #2ce0e0;
          border-radius: 50%;
          box-shadow: 
            0 0 10px #2ce0e0,
            0 0 20px #2ce0e0,
            0 0 30px #2ce0e0;
          animation: float 6s infinite ease-in-out;
          pointer-events: none;
          opacity: 0;
          z-index: 10;
        }

        @keyframes float {
          0% { 
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% { 
            transform: translate(
              ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px,
              ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
