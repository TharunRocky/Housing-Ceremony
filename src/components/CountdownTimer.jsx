import { useEffect, useMemo, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

function getTimeRemaining(target) {
  const total = target.getTime() - Date.now();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

const Block = ({ value, label, teluguLabel }) => (
  <div
    className="
      relative
      flex flex-col items-center justify-center
      rounded-sm
      bg-sand/70
      px-3 py-5 sm:px-6 sm:py-7
      outline outline-1 outline-offset-[6px] outline-gold/40
      shadow-[0_2px_0_0_rgba(139,30,15,0.06)]
    "
  >
    {/* Number */}
    <span className="
      font-display
      text-4xl sm:text-5xl lg:text-6xl
      font-semibold
      tabular-nums
      text-kumkum
      leading-none
    ">
      {pad(value)}
    </span>

    {/* Label */}
    <span className="
      mt-3
      font-body
      text-[10px] sm:text-xs
      uppercase
      tracking-[0.28em]
      text-ink/70
    ">
      {label}
    </span>

    {/* Telugu */}
    <span className="
      mt-1
      font-telugu
      text-xs sm:text-sm
      text-ink/60
    ">
      {teluguLabel}
    </span>
  </div>
);

export default function CountdownTimer({ target }) {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [time, setTime] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

 if (time.total <= 0) {
  return (
    <div className="
      rounded-sm
      bg-sand/70
      px-6 py-8
      outline outline-1 outline-offset-[6px] outline-gold/40
      text-center
    ">
      <p className="font-telugu text-xl text-kumkum">
        శుభం భూయాత్
      </p>
      <p className="mt-2 font-display italic text-lg text-ink">
        The auspicious day is here. Welcome home.
      </p>
    </div>
  );
}

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5">
      <Block value={time.days} label="Days" teluguLabel="రోజులు" />
      <Block value={time.hours} label="Hours" teluguLabel="గంటలు" />
      <Block value={time.minutes} label="Minutes" teluguLabel="నిమిషాలు" />
      <Block value={time.seconds} label="Seconds" teluguLabel="సెకన్లు" />
    </div>
  );
}