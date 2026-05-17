export default function CeoCaricature() {
  return (
    <svg
      viewBox="0 0 360 480"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <defs>
        <radialGradient id="cc-skin" cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#FDD0A0" />
          <stop offset="50%"  stopColor="#F5AE6A" />
          <stop offset="100%" stopColor="#D88030" />
        </radialGradient>
        <radialGradient id="cc-skin2" cx="40%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#F8C088" />
          <stop offset="100%" stopColor="#D07828" />
        </radialGradient>
        <radialGradient id="cc-ear" cx="50%" cy="38%" r="58%">
          <stop offset="0%"   stopColor="#F0A860" />
          <stop offset="100%" stopColor="#C87030" />
        </radialGradient>
        <radialGradient id="cc-cheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#DE6050" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#DE6050" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cc-iris-l" cx="38%" cy="32%" r="62%">
          <stop offset="0%"   stopColor="#5C3C1A" />
          <stop offset="100%" stopColor="#120804" />
        </radialGradient>
        <radialGradient id="cc-iris-r" cx="38%" cy="32%" r="62%">
          <stop offset="0%"   stopColor="#5C3C1A" />
          <stop offset="100%" stopColor="#120804" />
        </radialGradient>
        <radialGradient id="cc-bg" cx="50%" cy="42%" r="58%">
          <stop offset="0%"   stopColor="#EDF4EF" />
          <stop offset="100%" stopColor="#D8EAE0" />
        </radialGradient>
        <linearGradient id="cc-suit-l" x1="100%" y1="0%" x2="0%" y2="80%">
          <stop offset="0%"   stopColor="#80838C" />
          <stop offset="100%" stopColor="#5E6168" />
        </linearGradient>
        <linearGradient id="cc-suit-r" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%"   stopColor="#8C8F98" />
          <stop offset="100%" stopColor="#6A6D74" />
        </linearGradient>
        <radialGradient id="cc-bottle" cx="30%" cy="25%" r="70%">
          <stop offset="0%"   stopColor="#6AAEE8" />
          <stop offset="100%" stopColor="#3A70B8" />
        </radialGradient>
        <filter id="cc-soft">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* ── Background ── */}
      <rect width="360" height="480" fill="url(#cc-bg)" />
      {/* Soft halo behind head */}
      <ellipse cx="180" cy="175" rx="148" ry="152" fill="white" opacity="0.42" />

      {/* ══════════════ BODY ══════════════ */}

      {/* Suit left panel */}
      <path d="M 180 272 L 90 300 L 42 480 L 180 480 Z" fill="url(#cc-suit-l)" />
      {/* Suit right panel */}
      <path d="M 180 272 L 270 300 L 318 480 L 180 480 Z" fill="url(#cc-suit-r)" />

      {/* Houndstooth texture lines – left */}
      <line x1="148" y1="300" x2="130" y2="480" stroke="#545860" strokeWidth="1" opacity="0.28" />
      <line x1="130" y1="318" x2="110" y2="480" stroke="#545860" strokeWidth="1" opacity="0.28" />
      <line x1="112" y1="340" x2="88"  y2="480" stroke="#545860" strokeWidth="1" opacity="0.22" />
      <line x1="155" y1="298" x2="138" y2="480" stroke="#7A7D84" strokeWidth="0.7" opacity="0.18" />
      <line x1="138" y1="316" x2="120" y2="480" stroke="#7A7D84" strokeWidth="0.7" opacity="0.18" />
      {/* Houndstooth texture lines – right */}
      <line x1="212" y1="300" x2="230" y2="480" stroke="#606368" strokeWidth="1" opacity="0.28" />
      <line x1="230" y1="318" x2="250" y2="480" stroke="#606368" strokeWidth="1" opacity="0.28" />
      <line x1="248" y1="340" x2="272" y2="480" stroke="#606368" strokeWidth="1" opacity="0.22" />

      {/* White shirt front */}
      <path d="M 155 282 L 180 272 L 205 282 L 197 480 L 163 480 Z" fill="#F4F4F0" />

      {/* Left lapel */}
      <path d="M 90 300 L 142 280 L 132 400 L 52 435 Z"   fill="#686C73" />
      <path d="M 140 282 L 145 280 L 137 364 L 132 364 Z" fill="#7E8188" />
      {/* Right lapel */}
      <path d="M 270 300 L 218 280 L 228 400 L 308 435 Z" fill="#747880" />
      <path d="M 220 282 L 215 280 L 223 364 L 228 364 Z" fill="#8A8D94" />

      {/* Tie */}
      <path d="M 173 278 L 180 270 L 187 278 L 183 362 L 180 368 L 177 362 Z" fill="#7A4E18" />
      <path d="M 174 276 L 180 268 L 186 276 L 180 287 Z" fill="#906025" />
      <line x1="179" y1="295" x2="180" y2="356" stroke="#52320A" strokeWidth="1" opacity="0.45" />

      {/* Right arm – holding bottle */}
      <path d="M 256 316 L 302 348 L 296 363 L 248 332 Z" fill="#747880" />
      {/* Cuff */}
      <rect x="294" y="352" width="22" height="12" rx="3" fill="#E8E8E4" />
      {/* Hand */}
      <ellipse cx="305" cy="366" rx="17" ry="11" fill="#F0A858" />
      <path d="M 292 358 Q 306 352 318 359 Q 323 368 318 378 Q 306 384 292 376 Z" fill="#E09848" />
      {/* Knuckle lines */}
      <path d="M 295 360 Q 300 356 306 358" stroke="#C07830" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M 304 357 Q 310 354 315 357" stroke="#C07830" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55" />

      {/* MEG 맑음수 bottle */}
      <rect x="315" y="328" width="30" height="58" rx="7" fill="url(#cc-bottle)" />
      <rect x="315" y="328" width="11" height="58" rx="7 0 0 7" fill="#6AAEE8" opacity="0.55" />
      <rect x="320" y="318" width="20" height="14" rx="5" fill="#3A70B8" />
      <path d="M 331 318 L 347 305 L 353 311 L 345 320 L 333 320 Z" fill="#2C5EA4" />
      <circle cx="354" cy="308" r="4" fill="#1E4888" />
      {/* Label */}
      <rect x="317" y="342" width="26" height="34" rx="2" fill="white" opacity="0.94" />
      <rect x="317" y="342" width="26" height="10" rx="2 2 0 0" fill="#3A70B8" />
      <text x="330" y="350" fontSize="6"   textAnchor="middle" fill="white"   fontWeight="bold" fontFamily="sans-serif">MEG</text>
      <text x="330" y="361" fontSize="5.5" textAnchor="middle" fill="#1b4332" fontWeight="bold" fontFamily="sans-serif">맑음수</text>
      <text x="330" y="370" fontSize="3.5" textAnchor="middle" fill="#888"    fontFamily="sans-serif">NATURAL EM</text>
      <rect x="317" y="372" width="26" height="4" rx="0 0 2 2" fill="#3A70B8" opacity="0.5" />

      {/* ══════════════ NECK ══════════════ */}
      <path d="M 163 245 Q 162 272 168 280 L 180 284 L 192 280 Q 198 272 197 245 Z"
            fill="url(#cc-skin2)" />
      {/* Neck shadow line */}
      <path d="M 163 258 Q 165 276 168 280" stroke="#C07828" strokeWidth="1" fill="none" opacity="0.3" />

      {/* ══════════════ HEAD ══════════════ */}
      {/* Under-chin shadow */}
      <ellipse cx="180" cy="268" rx="70" ry="20" fill="#B06020" opacity="0.12" filter="url(#cc-soft)" />

      {/* Head base – round, full face */}
      <ellipse cx="180" cy="158" rx="98" ry="106" fill="url(#cc-skin)" />

      {/* Jaw extension – chubby cheek/jaw (characteristic) */}
      <path d="M 84 182
               Q 72 228 104 258
               Q 140 278 180 280
               Q 220 278 256 258
               Q 288 228 276 182"
            fill="url(#cc-skin)" />

      {/* ══════════════ HAIR ══════════════ */}
      {/* Main hair shape – short Korean cut */}
      <path d="
        M 86 142
        Q 90  52 180 46
        Q 270 52 274 142
        Q 268 66 180 60
        Q  92 66  86 142 Z
      " fill="#1A1A1A" />
      {/* Side taper – left */}
      <path d="M 86 142 Q 83 158 84 174 Q 86 146 93 124 Z" fill="#161616" />
      {/* Side taper – right */}
      <path d="M 274 142 Q 277 158 276 174 Q 274 146 267 124 Z" fill="#161616" />
      {/* Hair shine */}
      <path d="M 162 53 Q 180 48 204 51" stroke="#383838" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Sideburn – left */}
      <path d="M 86 162 Q 86 178 88 190 Q 90 178 90 162 Z" fill="#1A1A1A" opacity="0.7" />
      {/* Sideburn – right */}
      <path d="M 274 162 Q 274 178 272 190 Q 270 178 270 162 Z" fill="#1A1A1A" opacity="0.7" />

      {/* ══════════════ EARS ══════════════ */}
      {/* Left ear */}
      <ellipse cx="83"  cy="168" rx="13" ry="20" fill="url(#cc-ear)" />
      <ellipse cx="86"  cy="168" rx="7"  ry="13" fill="#C07030" opacity="0.35" />
      <path d="M 84 152 Q 90 168 84 184 Q 88 168 84 152 Z" fill="#A85E28" opacity="0.28" />
      {/* Right ear */}
      <ellipse cx="277" cy="168" rx="13" ry="20" fill="url(#cc-ear)" />
      <ellipse cx="274" cy="168" rx="7"  ry="13" fill="#C07030" opacity="0.35" />
      <path d="M 276 152 Q 270 168 276 184 Q 272 168 276 152 Z" fill="#A85E28" opacity="0.28" />

      {/* ══════════════ EYEBROWS ══════════════ */}
      {/* Left – natural thick brow, slight arch */}
      <path d="M 124 122 Q 146 111 168 118" stroke="#1A1A1A" strokeWidth="6.5" fill="none" strokeLinecap="round" />
      <path d="M 125 124 Q 146 113 168 120" stroke="#0A0A0A"  strokeWidth="3"   fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Right */}
      <path d="M 192 118 Q 214 111 236 122" stroke="#1A1A1A" strokeWidth="6.5" fill="none" strokeLinecap="round" />
      <path d="M 192 120 Q 214 113 235 124" stroke="#0A0A0A"  strokeWidth="3"   fill="none" strokeLinecap="round" opacity="0.4" />

      {/* ══════════════ EYES (slightly squinted – big smile) ══════════════ */}
      {/* Subtle eye socket depth */}
      <ellipse cx="146" cy="146" rx="24" ry="16" fill="#D08030" opacity="0.1" />
      <ellipse cx="214" cy="146" rx="24" ry="16" fill="#D08030" opacity="0.1" />

      {/* LEFT EYE */}
      <ellipse cx="146" cy="146" rx="21" ry="14" fill="white" />
      <circle  cx="146" cy="147" r="11"           fill="url(#cc-iris-l)" />
      <circle  cx="146" cy="147" r="6.5"          fill="#080604" />
      <circle  cx="149.5" cy="143" r="3.8"        fill="white" opacity="0.9" />
      <circle  cx="142"   cy="151" r="1.6"        fill="white" opacity="0.38" />
      {/* Upper lid – natural crease, slightly heavy */}
      <path d="M 125 138 Q 146 127 167 138" stroke="#1C1C1C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Lid crease (Asian double lid / mono hint) */}
      <path d="M 127 140 Q 146 132 165 140" stroke="#3A2010" strokeWidth="1"   fill="none" strokeLinecap="round" opacity="0.35" />
      {/* Lower lid puff – smile pushes cheek up */}
      <path d="M 126 158 Q 146 166 166 158" stroke="#C88040" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Inner corner shadow */}
      <path d="M 126 143 Q 128 147 126 151" stroke="#A86028" strokeWidth="1.2" fill="none" opacity="0.3" />

      {/* RIGHT EYE */}
      <ellipse cx="214" cy="146" rx="21" ry="14" fill="white" />
      <circle  cx="214" cy="147" r="11"           fill="url(#cc-iris-r)" />
      <circle  cx="214" cy="147" r="6.5"          fill="#080604" />
      <circle  cx="217.5" cy="143" r="3.8"        fill="white" opacity="0.9" />
      <circle  cx="210"   cy="151" r="1.6"        fill="white" opacity="0.38" />
      {/* Upper lid */}
      <path d="M 193 138 Q 214 127 235 138" stroke="#1C1C1C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 195 140 Q 214 132 233 140" stroke="#3A2010" strokeWidth="1"   fill="none" strokeLinecap="round" opacity="0.35" />
      {/* Lower lid puff */}
      <path d="M 194 158 Q 214 166 234 158" stroke="#C88040" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Inner corner */}
      <path d="M 234 143 Q 232 147 234 151" stroke="#A86028" strokeWidth="1.2" fill="none" opacity="0.3" />

      {/* ══════════════ NOSE (broad, flat) ══════════════ */}
      {/* Bridge sides – subtle */}
      <path d="M 180 156 Q 175 174 172 184" stroke="#C07828" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 180 156 Q 185 174 188 184" stroke="#C07828" strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Nose tip – broad */}
      <ellipse cx="180" cy="188" rx="17" ry="10" fill="#E09448" opacity="0.45" />
      {/* Nostril base line */}
      <path d="M 162 190 Q 168 198 180 196 Q 192 198 198 190"
            stroke="#B06828" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Nostrils */}
      <ellipse cx="168" cy="193" rx="7.5" ry="4.5" fill="#9A5820" opacity="0.55" />
      <ellipse cx="192" cy="193" rx="7.5" ry="4.5" fill="#9A5820" opacity="0.55" />

      {/* ══════════════ SMILE ══════════════ */}
      {/* Mouth cavity */}
      <path d="M 130 214
               Q 180 260 230 214
               Q 218 242 180 250
               Q 142 242 130 214 Z"
            fill="#8A3418" />
      {/* Upper teeth */}
      <path d="M 135 218 Q 180 256 225 218 Q 180 238 135 218 Z" fill="#F8F6F4" />
      {/* Tooth dividers – natural, subtle */}
      <line x1="157" y1="220" x2="155" y2="234" stroke="#E4E2E0" strokeWidth="1.2" opacity="0.8" />
      <line x1="180" y1="221" x2="180" y2="236" stroke="#E4E2E0" strokeWidth="1.2" opacity="0.8" />
      <line x1="203" y1="220" x2="205" y2="234" stroke="#E4E2E0" strokeWidth="1.2" opacity="0.8" />
      {/* Lower teeth */}
      <path d="M 141 232 Q 180 250 219 232 Q 180 252 141 232 Z" fill="#EEECEA" opacity="0.5" />
      {/* Upper lip */}
      <path d="M 130 214 Q 156 206 180 210 Q 204 206 230 214"
            stroke="#9C4226" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cupid's bow subtle */}
      <path d="M 166 210 Q 180 206 194 210" stroke="#B85033" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Lower lip volume */}
      <path d="M 135 222 Q 180 262 225 222 Q 180 266 135 222 Z" fill="#CC6848" opacity="0.28" />
      {/* Nasolabial folds – prominent (cheeks pushing up) */}
      <path d="M 130 210 Q 117 228 120 250" stroke="#C07830" strokeWidth="2"   fill="none" strokeLinecap="round" opacity="0.42" />
      <path d="M 230 210 Q 243 228 240 250" stroke="#C07830" strokeWidth="2"   fill="none" strokeLinecap="round" opacity="0.42" />
      {/* Corner dimples */}
      <circle cx="130" cy="215" r="3" fill="#D07838" opacity="0.3" />
      <circle cx="230" cy="215" r="3" fill="#D07838" opacity="0.3" />

      {/* ══════════════ CHEEKS (round, full – pushed up by smile) ══════════════ */}
      <ellipse cx="106" cy="204" rx="34" ry="26" fill="url(#cc-cheek)" />
      <ellipse cx="254" cy="204" rx="34" ry="26" fill="url(#cc-cheek)" />
      {/* Cheek volume highlight */}
      <ellipse cx="108" cy="196" rx="20" ry="14" fill="#F0C090" opacity="0.12" />
      <ellipse cx="252" cy="196" rx="20" ry="14" fill="#F0C090" opacity="0.12" />

      {/* ══════════════ CHIN / JAW shadow ══════════════ */}
      <ellipse cx="180" cy="264" rx="56" ry="16" fill="#B06020" opacity="0.1" />

      {/* ══════════════ COLLAR ══════════════ */}
      {/* Left collar point */}
      <path d="M 166 278 L 180 288 L 158 314 L 150 306 Z" fill="#F0F0EC" />
      <path d="M 164 280 L 178 288 L 160 308" stroke="#D0D0CC" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Right collar point */}
      <path d="M 194 278 L 180 288 L 202 314 L 210 306 Z" fill="#E8E8E4" />

      {/* ══════════════ MEG lapel pin ══════════════ */}
      <circle cx="108" cy="322" r="5.5" fill="#1B4332" />
      <circle cx="108" cy="322" r="3"   fill="#4ADE80" />
      <circle cx="108" cy="322" r="1.2" fill="white" opacity="0.6" />

    </svg>
  );
}
