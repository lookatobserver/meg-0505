export default function CeoCaricature({ width = 300, height = 420 }) {
  return (
    <svg
      viewBox="0 0 300 420"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="bgCircle" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#d4ede0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f8f8f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="skinBase" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fad4a8" />
          <stop offset="100%" stopColor="#e8a870" />
        </radialGradient>
        <radialGradient id="cheekL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8705a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e8705a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cheekR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8705a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e8705a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="suitL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#606368" />
          <stop offset="100%" stopColor="#737780" />
        </linearGradient>
        <linearGradient id="suitR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#737780" />
          <stop offset="100%" stopColor="#818589" />
        </linearGradient>
        <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a85c5" />
          <stop offset="100%" stopColor="#6aaee8" />
        </linearGradient>
      </defs>

      {/* ── Background glow ── */}
      <ellipse cx="150" cy="230" rx="145" ry="175" fill="url(#bgCircle)" />

      {/* ── SUIT BODY ── */}
      {/* Left half */}
      <path d="M 150 298 L 82 312 L 28 420 L 150 420 Z" fill="url(#suitL)" />
      {/* Right half */}
      <path d="M 150 298 L 218 312 L 272 420 L 150 420 Z" fill="url(#suitR)" />

      {/* Suit texture (herringbone hint) */}
      {[0,1,2,3,4].map(i => (
        <line key={`sl${i}`} x1={75-i*10} y1={330+i*18} x2={130-i*8} y2={420} stroke="#565a5f" strokeWidth="1" opacity="0.35" />
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={`sr${i}`} x1={225+i*10} y1={330+i*18} x2={170+i*8} y2={420} stroke="#6a6e73" strokeWidth="1" opacity="0.35" />
      ))}

      {/* White shirt panel */}
      <path d="M 136 298 L 150 306 L 164 298 L 158 420 L 142 420 Z" fill="#f5f5f3" />

      {/* Left lapel */}
      <path d="M 82 312 L 120 302 L 130 368 L 55 395 Z" fill="#676b70" />
      {/* Left lapel highlight */}
      <path d="M 116 304 L 120 302 L 128 350 L 118 352 Z" fill="#7a7e84" />

      {/* Right lapel */}
      <path d="M 218 312 L 180 302 L 170 368 L 245 395 Z" fill="#757980" />
      {/* Right lapel highlight */}
      <path d="M 184 304 L 180 302 L 172 350 L 182 352 Z" fill="#868a90" />

      {/* Tie */}
      <path d="M 144 300 L 150 294 L 156 300 L 152 362 L 150 368 L 148 362 Z" fill="#7a4e18" />
      {/* Tie knot */}
      <path d="M 145 298 L 150 292 L 155 298 L 150 308 Z" fill="#8f5e22" />
      {/* Tie pattern lines */}
      <line x1="148" y1="312" x2="149" y2="358" stroke="#5a3a10" strokeWidth="0.8" opacity="0.5" />

      {/* ── RIGHT ARM + BOTTLE ── */}
      {/* Upper arm */}
      <path d="M 205 320 L 258 352 L 252 368 L 196 336 Z" fill="#757980" />
      {/* Sleeve cuff */}
      <path d="M 250 360 L 268 370 L 264 382 L 246 372 Z" fill="#f0f0ee" />
      {/* Hand */}
      <ellipse cx="270" cy="374" rx="16" ry="11" fill="#ebb880" />
      {/* Fingers curling around bottle */}
      <path d="M 258 366 Q 270 360 280 367 Q 285 376 280 385 Q 270 390 258 383 Z" fill="#e0a868" />
      {/* Finger lines */}
      <line x1="261" y1="368" x2="260" y2="382" stroke="#c89050" strokeWidth="0.8" opacity="0.6" />
      <line x1="268" y1="364" x2="268" y2="379" stroke="#c89050" strokeWidth="0.8" opacity="0.6" />
      <line x1="275" y1="365" x2="276" y2="381" stroke="#c89050" strokeWidth="0.8" opacity="0.6" />

      {/* BOTTLE — 맑음수 spray */}
      {/* Bottle body */}
      <rect x="278" y="334" width="28" height="56" rx="7" fill="url(#bottleGrad)" />
      {/* Bottle body shine */}
      <rect x="280" y="338" width="8" height="44" rx="4" fill="white" opacity="0.18" />
      {/* Bottle neck */}
      <rect x="282" y="324" width="20" height="14" rx="4" fill="#4078b8" />
      {/* Trigger guard */}
      <path d="M 292 324 L 308 312 L 314 318 L 308 326 L 298 326 Z" fill="#3568a5" />
      {/* Nozzle */}
      <circle cx="315" cy="315" r="3.5" fill="#2a5890" />
      {/* White label */}
      <rect x="280" y="346" width="22" height="32" rx="2" fill="white" opacity="0.93" />
      {/* Label content */}
      <text x="291" y="358" fontSize="5.8" textAnchor="middle" fill="#1b4332" fontWeight="bold" fontFamily="'Apple SD Gothic Neo', sans-serif">맑음수</text>
      <rect x="280" y="362" width="22" height="1.5" fill="#2d6a4f" opacity="0.5" />
      <text x="291" y="371" fontSize="4" textAnchor="middle" fill="#4a8a6a" fontFamily="sans-serif">MEG</text>
      {/* Bottom color band */}
      <rect x="280" y="374" width="22" height="4" rx="0 0 2 2" fill="#3a7abf" opacity="0.6" />

      {/* ── NECK ── */}
      <path d="M 132 250 Q 132 292 138 298 L 150 302 L 162 298 Q 168 292 168 250 Z" fill="#ebb880" />
      {/* Neck shadow */}
      <path d="M 132 268 Q 135 288 138 298 L 132 268 Z" fill="#d4966a" opacity="0.4" />

      {/* ── HEAD ── */}
      {/* Jaw / lower face */}
      <ellipse cx="150" cy="210" rx="92" ry="60" fill="url(#skinBase)" />
      {/* Main head oval */}
      <ellipse cx="150" cy="148" rx="94" ry="106" fill="url(#skinBase)" />

      {/* ── HAIR ── */}
      {/* Main hair mass */}
      <path d="
        M 58 120
        Q 62 50 150 44
        Q 238 50 242 120
        Q 238 68 150 60
        Q 62 68 58 120 Z
      " fill="#111" />
      {/* Hair depth - side left */}
      <path d="M 58 120 Q 55 135 56 150 Q 58 128 64 110 Z" fill="#0a0a0a" />
      {/* Hair depth - side right */}
      <path d="M 242 120 Q 245 135 244 150 Q 242 128 236 110 Z" fill="#0a0a0a" />
      {/* Slight hair part */}
      <path d="M 150 44 Q 152 56 153 68" stroke="#333" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* ── EARS ── */}
      {/* Left */}
      <ellipse cx="56" cy="168" rx="13" ry="19" fill="#e0a870" />
      <path d="M 56 152 Q 62 168 56 184 Q 60 168 56 152 Z" fill="#c88858" opacity="0.5" />
      {/* Right */}
      <ellipse cx="244" cy="168" rx="13" ry="19" fill="#e0a870" />
      <path d="M 244 152 Q 238 168 244 184 Q 240 168 244 152 Z" fill="#c88858" opacity="0.5" />

      {/* ── FACE FEATURES ── */}

      {/* Eyebrows — thick, slightly arched */}
      <path d="M 95 115 Q 117 104 137 112" stroke="#151515" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M 163 112 Q 183 104 205 115" stroke="#151515" strokeWidth="5.5" fill="none" strokeLinecap="round" />

      {/* ── EYES ── warm, smiling */}
      {/* Left eye white */}
      <ellipse cx="116" cy="136" rx="18" ry="14" fill="white" />
      {/* Left iris */}
      <circle cx="116" cy="137" r="9.5" fill="#3a2515" />
      {/* Left pupil */}
      <circle cx="116" cy="137" r="5.5" fill="#0d0d0d" />
      {/* Left shine */}
      <circle cx="119.5" cy="133.5" r="3" fill="white" />
      <circle cx="112" cy="140" r="1.5" fill="white" opacity="0.5" />
      {/* Left upper eyelid (smiling) */}
      <path d="M 98 128 Q 116 118 134 128" stroke="#1a1a1a" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      {/* Left smiling crease */}
      <path d="M 98 146 Q 116 154 134 146" stroke="#c88858" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Left eye bag (friendly) */}
      <path d="M 100 144 Q 116 152 132 144" stroke="#d4906a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* Right eye white */}
      <ellipse cx="184" cy="136" rx="18" ry="14" fill="white" />
      {/* Right iris */}
      <circle cx="184" cy="137" r="9.5" fill="#3a2515" />
      {/* Right pupil */}
      <circle cx="184" cy="137" r="5.5" fill="#0d0d0d" />
      {/* Right shine */}
      <circle cx="187.5" cy="133.5" r="3" fill="white" />
      <circle cx="180" cy="140" r="1.5" fill="white" opacity="0.5" />
      {/* Right upper eyelid */}
      <path d="M 166 128 Q 184 118 202 128" stroke="#1a1a1a" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      {/* Right smiling crease */}
      <path d="M 166 146 Q 184 154 202 146" stroke="#c88858" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* ── NOSE ── */}
      {/* Bridge */}
      <path d="M 150 148 Q 146 162 143 174" stroke="#c88858" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* Tip */}
      <ellipse cx="150" cy="175" rx="13" ry="9" fill="#dea070" />
      {/* Nostrils */}
      <ellipse cx="140" cy="178" rx="5.5" ry="4" fill="#c07848" opacity="0.7" />
      <ellipse cx="160" cy="178" rx="5.5" ry="4" fill="#c07848" opacity="0.7" />

      {/* ── SMILE ── wide, warm, teeth showing */}
      {/* Mouth opening */}
      <path d="M 108 202 Q 150 240 192 202 Q 180 225 150 232 Q 120 225 108 202 Z" fill="#b05838" />
      {/* Upper teeth row */}
      <path d="M 112 206 Q 150 238 188 206 Q 150 224 112 206 Z" fill="white" />
      {/* Tooth separators */}
      <line x1="132" y1="208" x2="130" y2="222" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="150" y1="209" x2="150" y2="224" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="168" y1="208" x2="170" y2="222" stroke="#e0e0e0" strokeWidth="1" />
      {/* Lower teeth */}
      <path d="M 118 218 Q 150 232 182 218 Q 150 238 118 218 Z" fill="#f0f0f0" opacity="0.7" />
      {/* Upper lip */}
      <path d="M 108 202 Q 130 196 150 200 Q 170 196 192 202" stroke="#b86840" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Lower lip */}
      <path d="M 112 210 Q 150 244 188 210 Q 150 254 112 210 Z" fill="#d08060" opacity="0.5" />
      {/* Smile nasolabial folds */}
      <path d="M 108 195 Q 100 210 104 228" stroke="#c88858" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M 192 195 Q 200 210 196 228" stroke="#c88858" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* ── CHEEKS (round, full) ── */}
      <ellipse cx="88" cy="192" rx="28" ry="22" fill="url(#cheekL)" />
      <ellipse cx="212" cy="192" rx="28" ry="22" fill="url(#cheekR)" />

      {/* ── CHIN / JAW ── full, rounded */}
      <ellipse cx="150" cy="248" rx="46" ry="20" fill="#e0a068" opacity="0.5" />

      {/* ── COLLAR ── */}
      {/* White shirt collar points */}
      <path d="M 132 252 L 150 264 L 136 290 L 130 285 Z" fill="#f0f0ee" />
      <path d="M 168 252 L 150 264 L 164 290 L 170 285 Z" fill="#e8e8e6" />

      {/* ── NAME BADGE (optional subtle touch) ── */}
      {/* Small green accent dot on lapel */}
      <circle cx="118" cy="318" r="4" fill="#2d6a4f" opacity="0.8" />
      <circle cx="118" cy="318" r="2" fill="#4ade80" opacity="0.6" />

    </svg>
  );
}
