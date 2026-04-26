import { useEffect, useRef, useState } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/ganesh-mantra.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 bg-kumkum text-white px-4 py-2 rounded-full shadow-lg text-sm"
      >
        {playing ? "🔇 Mute" : "🔊 Play Music"}
      </button>
    </>
  );
}