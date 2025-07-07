import { useEffect } from 'react';

export default function Waitlist() {
  useEffect(() => {
    // Only add the stylesheet once
    if (!document.querySelector('link[href="https://www.waitforit.me/wfiEmbedStyles.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://www.waitforit.me/wfiEmbedStyles.css';
      document.head.appendChild(link);
    }

    // Only add the script once
    if (!document.querySelector('script[src="https://www.waitforit.me/waitlistV3.bundle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.waitforit.me/waitlistV3.bundle.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="waitlist"
      className="min-h-screen flex items-center justify-center w-full bg-[#f6f3fd] overflow-x-hidden"
    >
      <div className="w-full max-w-sm mx-auto text-center rounded-2xl shadow-xl border border-[#ede9fe] bg-white/90 px-4 sm:px-6 md:px-8 pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-5 text-gray-900">
          Join the Future of Proof.
        </h2>

        <div
          id="waitforit-embed"
          data-project-id="e02c9c61-b660-48d4-8e86-13ef0569957b"
          className="mb-6"
        />
        
        <div className="text-gray-500 space-y-2">
          <p className="text-base">Launching soon. Get early access and updates.</p>
          <p className="text-sm">We'll never spam or sell your data.</p>
        </div>
      </div>
    </section>
  );
}
