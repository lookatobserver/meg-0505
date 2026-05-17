export const products = [
  {
    slug: "deodorizer",
    badge: "최고 평점",
    name: "친환경 무소음 탈취기",
    shortDesc: "미생물분해로 99% 원인 제거",
    price: "₩139,000",
    image: "/black01.png",
    longDesc:
      "자연수케어 발포세라믹 미니 탈취기. 발포 세라믹 증발체와 미생물 분해 기술을 결합해 유해 화학물질 없이 냄새의 근본 원인을 제거합니다. KC 인증 어댑터를 사용하며 무소음으로 조용히 작동합니다.",
    specs: [
      { label: "제품명", value: "자연수케어 발포세라믹 미니 탈취기" },
      { label: "사이즈", value: "287mm × 117mm × 226mm" },
      { label: "입력", value: "5V, 최대 5W, 0.18A" },
      { label: "어댑터", value: "KC인증품 · Input 220V / Output 5V" },
      { label: "본체 재질", value: "ABS" },
      { label: "물통 재질", value: "GPPS + Silicon" },
      { label: "물통 용량", value: "1.3L (겨울 7일 / 여름 10일 사용 가능)" },
      { label: "증발체", value: "발포 세라믹 Ø93 × H128" },
    ],
    features: [
      { title: "발포 세라믹 증발 기술", desc: "발포 세라믹 소재가 액체를 고르게 증발시켜 탈취 성분을 공간 전체에 효율적으로 퍼뜨립니다." },
      { title: "무소음 작동", desc: "팬이나 모터 없이 자연 증발 방식으로 작동해 완전한 무소음을 실현합니다." },
      { title: "KC 인증 안전 설계", desc: "국내 KC 인증 어댑터를 사용하여 전기 안전성이 검증된 제품입니다." },
    ],
    detailImage: "/spec.jpg",
  },
  {
    slug: "santal-mist",
    badge: "신상품",
    name: "맑음수",
    shortDesc: "100% 자연 유래 EM | 미국 FDA 등록",
    price: "₩9,900",
    image: "/water01.png",
    longDesc:
      "유익균을 배합으로 완성한 살아있는 탈취 솔루션. 자연이 만든 유익균이 냄새 유발 균을 직접 분해하고 환경까지 케어합니다. 화학 성분 없이 100% 자연 유래 EM 성분만으로 만들어진 미국 FDA 등록 제품입니다.",
    specs: [
      { label: "주요 성분", value: "100% 자연 유래 EM" },
      { label: "인증", value: "미국 FDA 등록" },
      { label: "타입", value: "천연 미생물 제제 (휘산형)" },
      { label: "알코올", value: "프리" },
      { label: "파라벤", value: "프리" },
      { label: "합성 향료", value: "무첨가" },
    ],
    features: [
      { title: "살아있는 유익균 배합", desc: "4종의 유익균이 살아있는 상태로 배합되어 탁월한 탈취 효과를 발휘합니다." },
      { title: "미국 FDA 등록 성분", desc: "미국 FDA에 등록된 안전한 성분만을 사용합니다." },
      { title: "냄새 근본 분해", desc: "유익균이 냄새 유발 균과 유해 물질을 직접 분해하여 재발을 방지합니다." },
    ],
    bacteria: [
      {
        name: "유산균",
        latin: "Lactic Acid Bacteria",
        desc: "악취 유발 세균을 억제하고, 안정된 미생물 환경을 조성합니다.",
        color: "#4fc3f7",
      },
      {
        name: "락토바실러스",
        latin: "Lactobacillus",
        desc: "유기산을 통해 세균·곰팡이를 억제하고 부패를 방지합니다.",
        color: "#f48fb1",
      },
      {
        name: "비피더스균",
        latin: "Bifidobacterium",
        desc: "유해균을 억제하고 탈취 환경의 미세균 균형을 유지합니다.",
        color: "#ffcc80",
      },
      {
        name: "바실러스균",
        latin: "Bacillus",
        desc: "냄새 유발 물질(단백질, 유기물 등) 분해에 탁월한 효과를 발휘합니다.",
        color: "#a5d6a7",
      },
    ],
    detailImage: "/water01.jpg",
  },
  {
    slug: "oud-herb",
    badge: "베스트셀러",
    name: "Oud & Herb",
    shortDesc: "다크 레진, 세이지, 타임",
    price: "₩76,000",
    image: "/product3.png",
    longDesc:
      "진한 우드 레진과 허브의 대담한 조화. 희귀 아가우드 추출물이 깊은 베이스를 만들고, 세이지와 타임이 신선하고 균형 잡힌 향을 더합니다. 명상과 집중을 돕는 공간 향으로도 탁월합니다.",
    specs: [
      { label: "용량", value: "50ml" },
      { label: "주요 성분", value: "아가우드, 세이지, 타임" },
      { label: "지속력", value: "10~14시간" },
      { label: "타입", value: "보태니컬 퍼퓸" },
      { label: "알코올", value: "프리" },
      { label: "파라벤", value: "프리" },
    ],
    features: [
      { title: "프리미엄 우드", desc: "희귀 아가우드 추출물이 깊고 풍부한 베이스를 만듭니다." },
      { title: "허브 복합체", desc: "세이지와 타임이 신선하고 균형 잡힌 향을 더합니다." },
      { title: "고농축 포뮬러", desc: "소량으로도 풍부한 향을 오래 유지합니다." },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}
