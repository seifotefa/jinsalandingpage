import { useEffect, useState } from 'react';

export default function IntroOverlay({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented, show play button or handle fallback
          console.error('Autoplay prevented:', error);
        });
      }
    }
  }, []);

  const triggerFade = () => {
    setFadeOut(true);
    setTimeout(() => {
      onFinish();
    }, 1000); // Match fade duration
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        src="/animation.mp4"
        autoPlay
        muted
        playsInline
        onEnded={triggerFade}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
