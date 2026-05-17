export default function CeoCaricature() {
  const OL = "#111111";   // outline
  const OW = 3;           // outline width

  return (
    <svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "auto" }}>

      {/* ── Background circle ── */}
      <circle cx="200" cy="215" r="192" fill="#2d6a4f" />
      <circle cx="200" cy="215" r="192" fill="none" stroke="#1b4332" strokeWidth="4" />

      {/* ── DESK ── */}
      <rect x="10"  y="340" width="380" height="18" rx="6" fill="#ddd4b0" stroke={OL} strokeWidth={OW} />
      <rect x="22"  y="354" width="356" height="50" rx="3" fill="#ccc2a0" stroke={OL} strokeWidth={OW} />

      {/* ── MEG bottle on desk ── */}
      {/* Body */}
      <rect x="308" y="294" width="28" height="50" rx="6" fill="#4f8ecb" stroke={OL} strokeWidth="2.5" />
      <rect x="308" y="294" width="10" height="50" rx="6 0 0 6" fill="#5fa0e0" />
      {/* Neck */}
      <rect x="313" y="284" width="18" height="14" rx="4" fill="#3e7ab8" stroke={OL} strokeWidth="2" />
      {/* Trigger */}
      <path d="M 323 284 L 337 272 L 343 278 L 337 286 L 326 286 Z" fill="#3268a0" stroke={OL} strokeWidth="2" />
      <circle cx="344" cy="275" r="3.5" fill="#245888" stroke={OL} strokeWidth="1.5" />
      {/* Label */}
      <rect x="310" y="306" width="22" height="28" rx="2" fill="white" />
      <rect x="310" y="306" width="22" height="8"  rx="2 2 0 0" fill="#3e7ab8" />
      <text x="321" y="313" fontSize="5.5" textAnchor="middle" fill="white"    fontWeight="bold" fontFamily="sans-serif">MEG</text>
      <text x="321" y="323" fontSize="5"   textAnchor="middle" fill="#1b4332"  fontWeight="bold" fontFamily="sans-serif">맑음수</text>
      <text x="321" y="330" fontSize="3.8" textAnchor="middle" fill="#888"     fontFamily="sans-serif">NATURAL EM</text>

      {/* ── HANDS (clasped on desk) ── */}
      <ellipse cx="172" cy="342" rx="42" ry="14" fill="#f5b070" stroke={OL} strokeWidth={OW} />
      <ellipse cx="228" cy="342" rx="42" ry="14" fill="#eda060" stroke={OL} strokeWidth={OW} />
      <ellipse cx="200" cy="340" rx="48" ry="13" fill="#f2a868" stroke={OL} strokeWidth={OW} />
      {/* Knuckle lines */}
      <path d="M 166 332 Q 178 326 190 330" stroke="#c07838" strokeWidth="2"   fill="none" strokeLinecap="round" />
      <path d="M 210 330 Q 222 326 234 332" stroke="#c07838" strokeWidth="2"   fill="none" strokeLinecap="round" />
      <path d="M 178 338 Q 200 330 222 338" stroke="#c07838" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── SUIT BODY ── */}
      {/* Left */}
      <path d="M 200 264 L 112 290 L 65 420 L 200 420 Z" fill="#71747a" stroke={OL} strokeWidth={OW} />
      {/* Right */}
      <path d="M 200 264 L 288 290 L 335 420 L 200 420 Z" fill="#7e8188" stroke={OL} strokeWidth={OW} />
      {/* Herringbone texture */}
      {[0,1,2,3].map(i => (
        <line key={`tl${i}`} x1={128-i*14} y1={308+i*20} x2={148-i*10} y2={420} stroke="#5c5f64" strokeWidth="1.2" opacity="0.45" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={`tr${i}`} x1={272+i*14} y1={308+i*20} x2={252+i*10} y2={420} stroke="#6a6d74" strokeWidth="1.2" opacity="0.45" />
      ))}

      {/* ── SHIRT / CHEST ── */}
      <path d="M 160 278 L 200 268 L 240 278 L 232 420 L 168 420 Z" fill="#f4f4f0" stroke={OL} strokeWidth={OW} />

      {/* ── LAPELS ── */}
      {/* Left lapel */}
      <path d="M 112 290 L 154 276 L 146 385 L 72 408 Z" fill="#64676c" stroke={OL} strokeWidth={OW} />
      <path d="M 151 278 L 156 276 L 150 348 L 146 348 Z" fill="#797c82" />
      {/* Right lapel */}
      <path d="M 288 290 L 246 276 L 254 385 L 328 408 Z" fill="#72757c" stroke={OL} strokeWidth={OW} />
      <path d="M 249 278 L 244 276 L 250 348 L 254 348 Z" fill="#868990" />

      {/* ── TIE ── */}
      <path d="M 191 272 L 200 264 L 209 272 L 205 360 L 200 367 L 195 360 Z" fill="#7a4c14" stroke={OL} strokeWidth="2.5" />
      <path d="M 192 270 L 200 262 L 208 270 L 200 282 Z" fill="#8f5e20" stroke={OL} strokeWidth="2" />
      <line x1="198" y1="290" x2="199" y2="355" stroke="#52320c" strokeWidth="1.2" opacity="0.55" />

      {/* ── NECK ── */}
      <path d="M 178 232 L 178 268 Q 186 276 200 274 Q 214 276 222 268 L 222 232 Z"
            fill="#f5b070" stroke={OL} strokeWidth={OW} />

      {/* ── HEAD (white halo → outline separation from bg) ── */}
      <ellipse cx="200" cy="148" rx="108" ry="116" fill="white" />
      {/* Head fill */}
      <ellipse cx="200" cy="148" rx="104" ry="112" fill="#f5b070" stroke={OL} strokeWidth={OW} />

      {/* Full jaw / chubby cheek mass */}
      <path d="M 96 172 Q 84 224 126 254 Q 160 272 200 274 Q 240 272 274 254 Q 316 224 304 172"
            fill="#f5b070" stroke={OL} strokeWidth={OW} />

      {/* ── HAIR ── */}
      <path d="M 98 128 Q 104 50 200 44 Q 296 50 302 128 Q 296 66 200 58 Q 104 66 98 128 Z"
            fill="#151515" stroke="#0a0a0a" strokeWidth="2.5" />
      <path d="M 98 128 Q 95 146 96 164 Q 98 136 106 114 Z" fill="#151515" />
      <path d="M 302 128 Q 305 146 304 164 Q 302 136 294 114 Z" fill="#151515" />
      {/* Hair shine line */}
      <path d="M 172 50 Q 192 45 215 48" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />

      {/* ── EARS ── */}
      <ellipse cx="97"  cy="164" rx="14" ry="20" fill="#eda060" stroke={OL} strokeWidth={OW} />
      <path d="M 98 147 Q 105 164 98 181 Q 103 164 98 147 Z" fill="#c87a40" opacity="0.5" />
      <ellipse cx="303" cy="164" rx="14" ry="20" fill="#eda060" stroke={OL} strokeWidth={OW} />
      <path d="M 302 147 Q 295 164 302 181 Q 297 164 302 147 Z" fill="#c87a40" opacity="0.5" />

      {/* ── EYEBROWS ── thick, warm */}
      <path d="M 134 110 Q 158 99  180 108" stroke="#111" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M 220 108 Q 242 99  266 110" stroke="#111" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* ── EYES ── */}
      {/* Left */}
      <ellipse cx="158" cy="136" rx="23" ry="18" fill="white" stroke={OL} strokeWidth="2.5" />
      <circle  cx="158" cy="137" r="12"           fill="#3a2010" />
      <circle  cx="158" cy="137" r="7"            fill="#0a0a0a" />
      <circle  cx="162" cy="132" r="4.5"          fill="white" />
      <circle  cx="154" cy="142" r="2"            fill="white" opacity="0.55" />
      <path d="M 135 126 Q 158 115 181 126" stroke={OL} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 137 152 Q 158 161 179 152" stroke="#d08840" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Right */}
      <ellipse cx="242" cy="136" rx="23" ry="18" fill="white" stroke={OL} strokeWidth="2.5" />
      <circle  cx="242" cy="137" r="12"           fill="#3a2010" />
      <circle  cx="242" cy="137" r="7"            fill="#0a0a0a" />
      <circle  cx="246" cy="132" r="4.5"          fill="white" />
      <circle  cx="238" cy="142" r="2"            fill="white" opacity="0.55" />
      <path d="M 219 126 Q 242 115 265 126" stroke={OL} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 221 152 Q 242 161 263 152" stroke="#d08840" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ── NOSE ── simple, broad */}
      <path d="M 200 155 Q 195 172 190 180 Q 200 186 210 180 Q 205 172 200 155 Z"
            fill="#e09848" stroke="#c07838" strokeWidth="1.5" />
      <ellipse cx="190" cy="183" rx="7" ry="4.5" fill="#b86030" opacity="0.75" />
      <ellipse cx="210" cy="183" rx="7" ry="4.5" fill="#b86030" opacity="0.75" />

      {/* ── SMILE ── big, warm, teeth */}
      {/* Mouth opening */}
      <path d="M 144 206 Q 200 256 256 206 Q 244 234 200 246 Q 156 234 144 206 Z"
            fill="#9c3e28" stroke={OL} strokeWidth="2.5" />
      {/* Teeth */}
      <path d="M 149 210 Q 200 252 251 210 Q 200 232 149 210 Z" fill="white" />
      <line x1="174" y1="212" x2="172" y2="230" stroke="#ddd" strokeWidth="1.5" />
      <line x1="200" y1="213" x2="200" y2="231" stroke="#ddd" strokeWidth="1.5" />
      <line x1="226" y1="212" x2="228" y2="230" stroke="#ddd" strokeWidth="1.5" />
      {/* Lower teeth */}
      <path d="M 155 226 Q 200 244 245 226 Q 200 246 155 226 Z" fill="#efefef" opacity="0.65" />
      {/* Upper lip */}
      <path d="M 144 206 Q 172 197 200 201 Q 228 197 256 206" stroke="#b84e30" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Lower lip volume */}
      <path d="M 150 215 Q 200 258 250 215 Q 200 260 150 215 Z" fill="#d87050" opacity="0.4" />
      {/* Nasolabial folds */}
      <path d="M 144 202 Q 133 218 138 237" stroke="#d08840" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M 256 202 Q 267 218 262 237" stroke="#d08840" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── CHEEKS ── */}
      <ellipse cx="114" cy="196" rx="34" ry="25" fill="#e06858" opacity="0.28" />
      <ellipse cx="286" cy="196" rx="34" ry="25" fill="#e06858" opacity="0.28" />

      {/* ── COLLAR ── */}
      <path d="M 180 270 L 200 280 L 168 308 L 160 300 Z" fill="#f0f0ee" stroke={OL} strokeWidth="2" />
      <path d="M 220 270 L 200 280 L 232 308 L 240 300 Z" fill="#e8e8e6" stroke={OL} strokeWidth="2" />

      {/* ── SPARKLE ACCENTS (like example style) ── */}
      <line x1="80"  y1="106" x2="90"  y2="112" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="74"  y1="120" x2="86"  y2="121" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="80"  y1="135" x2="89"  y2="130" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="320" y1="106" x2="310" y2="112" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="326" y1="120" x2="314" y2="121" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="320" y1="135" x2="311" y2="130" stroke="#ffd04a" strokeWidth="3.5" strokeLinecap="round" />

      {/* ── MEG GREEN DOT on lapel ── */}
      <circle cx="122" cy="320" r="5.5" fill="#1b4332" stroke={OL} strokeWidth="1.5" />
      <circle cx="122" cy="320" r="3"   fill="#4ade80" />

    </svg>
  );
}
