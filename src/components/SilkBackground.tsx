import { useEffect, useRef } from 'react';

const SilkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawSilk = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      gradient.addColorStop(0, 'rgba(160, 85, 247, 0.1)'); // Primary purple
      gradient.addColorStop(0.5, 'rgba(192, 132, 252, 0.05)'); // Accent purple
      gradient.addColorStop(1, 'rgba(34, 35, 47, 0.8)'); // Dark background
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing silk waves
      const waves = 3;
      for (let w = 0; w < waves; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(160, 85, 247, ${0.1 - w * 0.02})`;
        ctx.lineWidth = 2 - w * 0.3;
        
        for (let x = 0; x <= width; x += 10) {
          const y = height / 2 + 
            Math.sin((x + time * 2) * 0.01 + w * 2) * 50 * (1 + w * 0.5) +
            Math.sin((x + time * 1.5) * 0.005 + w * 1.5) * 30 * (1 + w * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Add floating particles with silk effect
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const x = (i * width / particleCount + time * 0.5) % width;
        const y = height / 2 + 
          Math.sin(x * 0.01 + time * 0.01 + i) * 100 +
          Math.sin(x * 0.005 + time * 0.008 + i * 0.5) * 50;
        
        const size = 2 + Math.sin(time * 0.02 + i) * 1;
        const opacity = 0.3 + Math.sin(time * 0.015 + i * 0.7) * 0.2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${opacity})`;
        ctx.fill();
      }

      // Add silk threads
      for (let t = 0; t < 5; t++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(160, 85, 247, 0.08)`;
        ctx.lineWidth = 1;
        
        const startX = (t * width / 5 + time * 0.3) % width;
        const startY = height * 0.3;
        const endX = ((t + 2) * width / 5 + time * 0.2) % width;
        const endY = height * 0.7;
        
        // Curved silk thread
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(
          (startX + endX) / 2 + Math.sin(time * 0.01 + t) * 100,
          (startY + endY) / 2 + Math.cos(time * 0.008 + t) * 50,
          endX, endY
        );
        ctx.stroke();
      }

      time += 1;
      animationId = requestAnimationFrame(drawSilk);
    };

    drawSilk();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'transparent',
        zIndex: 1,
      }}
    />
  );
};

export default SilkBackground;