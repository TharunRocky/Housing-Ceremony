import CountdownTimer from "@/components/CountdownTimer";
import { Kalasham, Toran, Mandala, Om } from "@/components/Decor";
import { MapPin, Calendar, Clock, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";



function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.play();
    else audioRef.current.pause();
    setPlaying(!playing);
  };

  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.volume = 0.3;

  let wasPlaying = false;

  const handleHide = () => {
    if (!audio.paused) {
      wasPlaying = true;
      audio.pause();
    } else {
      wasPlaying = false;
    }
  };

  const handleShow = () => {
    if (wasPlaying) {
      audio.play().catch(() => {});
    }
  };

  // Most reliable combo
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) handleHide();
    else handleShow();
  });

  window.addEventListener("pagehide", handleHide); // mobile + minimize
  window.addEventListener("pageshow", handleShow);

  return () => {
    document.removeEventListener("visibilitychange", handleHide);
    window.removeEventListener("pagehide", handleHide);
    window.removeEventListener("pageshow", handleShow);
  };
}, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 bg-kumkum text-white px-4 py-2 rounded-full shadow-lg text-sm"
      >
        {playing ? "🔇 Mute" : "🔊 Music"}
      </button>
    </>
  );
}

// Placeholder ceremony details — easily editable
const CEREMONY = {
  dateISO: "2026-04-30T07:30:00+05:30",

  dateLabel: "Thursday, 30 April 2026",
  teluguDateLabel: "గురువారం, 30 ఏప్రిల్ 2026",

  timeLabel: "7:30 AM (Muhurtham)",
  teluguTimeLabel: "ఉదయం 7:30 (ముహూర్తం)",

  family: "Korupolu Family",
  teluguFamily: "కోరుపోలు కుటుంబం",

  addressLines: [
    "Flat 301, Poojitha Sree Jayadev Arcade",
    "Laxmipuram, Vepagunta",
    "Visakhapatnam – 530047",
  ],

   muhurthamISO: "2026-04-30T19:30:00+05:30",

  muhurtham: {
    date: "Thursday, 30 April 2026",
    time: "7:30 PM",
    telugu: "గురువారం సాయంత్రం 7:30",
  },

  lunch: {
    date: "Friday, 1 May 2026",
    time: "12:30 PM",
    telugu: "శుక్రవారం మధ్యాహ్నం 12:30",
  },

  venue: {
    lines: [
      "Flat 301, Poojitha Sree Jayadev Arcade",
      "Laxmipuram, Vepagunta",
      "Visakhapatnam – 530047",
    ],
  },

  teluguAddressLine:
    "ఫ్లాట్ 301, పూజిత శ్రీ జయదేవ్ ఆర్కేడ్, లక్ష్మీపురం, వేపగుంట, విశాఖపట్నం - 530047",

  mapsLink: "https://maps.app.goo.gl/dhsvArXETprmWKpA9",
};

const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1899.5564705922038!2d83.19892986561302!3d17.78638837378874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396657ca936659%3A0xdd7ff36a959cb72b!2s6-63%2C%20Port%20Colony%2C%20MES%20Layout%2C%20Chintalagraharam%2C%20Vepagunta%2C%20Lakshmi%20Puram%2C%20Andhra%20Pradesh%20530047!5e0!3m2!1sen!2sin!4v1777174059521!5m2!1sen!2sin";
const SectionDivider = ({ children }) => (
  <div className="flex items-center justify-center my-12 sm:my-16">
    <span className="h-px w-16 sm:w-24 bg-gold/50" />
    <span className="mx-4 font-telugu text-base text-kumkum">{children}</span>
    <span className="h-px w-16 sm:w-24 bg-gold/50" />
  </div>
);

export default function GruhaPraveshamPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink paper-grain">

      <BackgroundMusic />



        {/* DETAILS */}
     
      
      {/* Mango toran */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 sm:h-28 lg:h-32 overflow-hidden animate-fade-in z-0">
        <Toran className="absolute -top-1 left-0 w-full h-full" />
      </div>

      {/* Mandalas */}
      <Mandala className="pointer-events-none absolute -left-24 top-[60%] w-72 text-kumkum/15 animate-slow-spin" />
      <Mandala className="pointer-events-none absolute -right-24 top-[15%] w-64 text-gold/30 animate-slow-spin" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 pb-20">

        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

           <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">

    {/* Ganesh */}
    <img
      src="ganesh.png"
      alt="ganesha"
      className="w-20 mb-4 opacity-80"
    />

    {/* Blessing */}
    <p className="font-body uppercase tracking-[0.35em] text-xs text-kumkum/80">
      With the blessings of our elders
    </p>

    {/* Family */}
    <h3 className="mt-2 font-display text-xl text-ink">
      {CEREMONY.family}
    </h3>

    {/* Spacer */}
    <div className="h-6" />
    </div>

          {/* Left */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
            <div className="relative">
              <Kalasham className="w-44 sm:w-52 lg:w-60 drop-shadow-[0_8px_18px_rgba(139,30,15,0.18)] animate-flicker" />
              <div className="absolute -inset-6 -z-10 rounded-full bg-turmeric/25 blur-2xl" />
            </div>

            <p className="mt-6 font-body uppercase tracking-[0.4em] text-xs text-kumkum/80 flex items-center gap-3">
              <Sparkles className="w-3 h-3" />
              శుభాకాంక్షలతో
              <Sparkles className="w-3 h-3" />
            </p>

            <h1 className="mt-3 font-telugu text-5xl sm:text-6xl lg:text-7xl text-kumkum leading-[1.05]">
              గృహప్రవేశం
            </h1>

            <h2 className="mt-2 font-display italic text-3xl sm:text-4xl lg:text-5xl text-ink/90">
              Gruha Pravesham
            </h2>

            <p className="mt-4 font-body text-base sm:text-lg text-ink/70 max-w-md">
              An auspicious housewarming ceremony — a humble invitation to bless
              our new home with your presence.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "180ms" }}>
            <div className="relative bg-paper/95 p-8 sm:p-10 lg:p-12 outline outline-1 outline-offset-[8px] outline-gold/40 shadow-[0_30px_60px_-30px_rgba(139,30,15,0.25)]">
              
              <Om className="absolute top-6 right-6 w-7 h-7 text-kumkum/70" />

              <p className="font-telugu text-base text-kumkum/90">
                మీ అమూల్యమైన ఆశీర్వాదం కోసం…
              </p>

              <p className="mt-2 font-display italic text-lg sm:text-xl text-ink/80">
                With folded hands and a hopeful heart,
                <br />
                <span className="text-kumkum not-italic font-semibold">
                  {CEREMONY.family}
                </span>{" "}
                warmly invites you.
              </p>

              <div className="gold-divider my-8" />

              <p className="font-body text-xs uppercase tracking-[0.32em] text-ink/60 mb-4">
                Ceremony begins in
              </p>

              <CountdownTimer target={CEREMONY.muhurthamISO} />

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
                <div className="flex items-center gap-2 text-ink/80">
                  <Calendar className="w-4 h-4 text-kumkum" />
                  <span className="font-display">{CEREMONY.muhurtham.date}</span>
                </div>

                <div className="flex items-center gap-2 text-ink/80">
                  <Clock className="w-4 h-4 text-kumkum" />
                  <span className="font-display">{CEREMONY.muhurtham.time}</span>
                </div>
              </div>

            </div>
          </div>

        </section>

        <SectionDivider>శుభం</SectionDivider>

        {/* WELCOME */}
        <section className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="font-telugu text-2xl sm:text-3xl text-kumkum leading-relaxed">
            మా క్రొత్త ఇంటికి స్వాగతం
          </p>

          <p className="mt-4 font-display italic text-xl sm:text-2xl text-ink">
            “May this house be filled with laughter, light, and the soft scent of jasmine.”
          </p>

          <p className="mt-6 font-body text-base sm:text-lg text-ink/75 leading-relaxed">
            With Lord Ganesha’s blessings and the love of family and friends,
            we invite you to share in this sacred moment as we step into our new home.
            Your presence will be the most cherished blessing of all.
          </p>
        </section>

        <SectionDivider>వివరాలు</SectionDivider>

        {/* DETAILS + MAP */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          <div className="bg-paper/95 p-8 sm:p-10 outline outline-1 outline-offset-[8px] outline-gold/40 shadow-[0_30px_60px_-30px_rgba(139,30,15,0.25)] flex flex-col">
            
            <p className="font-body uppercase tracking-[0.32em] text-xs text-kumkum">
              The Invitation
            </p>

            <h3 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
              Save the Date
            </h3>

            <p className="mt-1 font-telugu text-lg text-ink/70">
              తేదీని గుర్తుంచుకోండి
            </p>

            <div className="mt-7 space-y-6">

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-kumkum/10 text-kumkum">
                  <Calendar className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-display text-lg">{CEREMONY.dateLabel}</p>
                  <p className="font-telugu text-sm text-ink/70">
                    {CEREMONY.teluguDateLabel}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-kumkum/10 text-kumkum">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-display text-lg">{CEREMONY.timeLabel}</p>
                  <p className="font-telugu text-sm text-ink/70">
                    {CEREMONY.teluguTimeLabel}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-kumkum/10 text-kumkum">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  {CEREMONY.addressLines.map((line, i) => (
                    <p key={i} className="font-display text-base">{line}</p>
                  ))}
                  <p className="mt-1 font-telugu text-sm text-ink/70">
                    {CEREMONY.teluguAddressLine}
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="relative min-h-[360px] outline outline-1 outline-offset-[8px] outline-gold/40 shadow-[0_30px_60px_-30px_rgba(139,30,15,0.25)] overflow-hidden bg-paper">
            <iframe
              src={mapsEmbedSrc}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </section> */}

         <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4 pb-16">

        {/* MUHURTHAM */}
        <div className="bg-paper/80 backdrop-blur-md border border-gold/20 rounded-xl p-6 text-center shadow">
          <Calendar className="mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">MUHURTHAM</h3>

          <p>{CEREMONY.muhurtham.date}</p>
          <p className="text-2xl mt-2 font-bold">
            {CEREMONY.muhurtham.time}
          </p>
          <p className="text-sm opacity-70 mt-1">
            {CEREMONY.muhurtham.telugu}
          </p>
        </div>

        {/* LUNCH */}
        <div className="bbg-paper/80 backdrop-blur-md border border-gold/20 rounded-xl p-6 text-center shadow">
          <Clock className="mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">LUNCH</h3>

          <p>{CEREMONY.lunch.date}</p>
          <p className="text-2xl mt-2 font-bold">
            {CEREMONY.lunch.time}
          </p>
          <p className="text-sm opacity-70 mt-1">
            {CEREMONY.lunch.telugu}
          </p>
        </div>

        {/* VENUE */}
        <div className="bg-paper/80 backdrop-blur-md border border-gold/20 rounded-xl p-6 text-center shadow">
          <MapPin className="mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">VENUE</h3>

          {CEREMONY.venue.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

      </section>

      <section>

      <div className="mt-6 border rounded-xl overflow-hidden shadow-sm">
          <iframe
            src={mapsEmbedSrc}
            className="w-full h-[300px]"
            loading="lazy"
          />
        </div>

        {/* BUTTON */}
        <a
          href="https://maps.app.goo.gl/dhsvArXETprmWKpA9"
          target="_blank"
          className="inline-block mt-4 bg-kumkum text-white px-6 py-3 rounded-full shadow"
        >
          📍 Get Directions
        </a>

        </section>

      {/* <section className="text-center pb-10">
        <p className="text-lg">We warmly invite you and your family</p>
        <p className="mt-2 font-semibold">{CEREMONY.family}</p>
      </section> */}

      
        <SectionDivider>ధన్యవాదములు</SectionDivider>

        {/* ✅ CLOSING / FOOTER */}
        <section className="relative max-w-3xl mx-auto text-center pb-6">
          
          <Mandala className="mx-auto w-32 sm:w-40 text-kumkum/60 animate-slow-spin" />

          <p className="mt-6 font-telugu text-2xl text-kumkum">
            మీ రాక మాకు ఆశీర్వాదం.
          </p>

          <p className="mt-2 font-display italic text-xl text-ink">
            Your presence is our blessing.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.32em] text-ink/60">
            WITH LOVE & GRATITUDE
          </p>

          <p className="mt-3 font-display text-lg text-kumkum">
            — {CEREMONY.family}
          </p>

          <p className="font-telugu text-sm text-ink/70">
            — {CEREMONY.teluguFamily}
          </p>
          </section>
        

      </div>
    </main>
  );
}