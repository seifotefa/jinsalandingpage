import { useEffect, useState } from 'react';

export default function IntroOverlay({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fallback timeout in case video doesn't call onEnded
    const timer = setTimeout(() => {
      triggerFade();
    }, 6000); // Adjust to match your video length in ms

    return () => clearTimeout(timer);
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
