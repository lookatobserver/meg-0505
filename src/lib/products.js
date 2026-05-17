export const products = [
  {
    slug: "deodorizer",
    badge: "최고 평점",
    name: "친환경 무소음 탈취기",
    shortDesc: "미생물분해로 99% 원인 제거",
    price: "₩139,000",
    image: "/black01.png",
    longDesc:
      "MEG 친환경 무소음 탈취기는 유해 화학물질 없이 미생물 분해 기술로 냄새의 근본 원인을 제거합니다. 소음 없이 조용히 작동하며, 지속적인 공기 정화로 쾌적한 환경을 유지합니다.",
    specs: [
      { label: "탈취 방식", value: "미생물 분해 기술" },
      { label: "탈취율", value: "99% 원인 제거" },
      { label: "작동 소음", value: "무소음 (0dB)" },
      { label: "적용 면적", value: "최대 33㎡" },
      { label: "소비 전력", value: "5W" },
      { label: "제품 소재", value: "ABS / 강화유리" },
    ],
    features: [
      { title: "무소음 작동", desc: "기계적 소음 없이 조용하게 공기를 정화합니다." },
      { title: "친환경 성분", desc: "유해 화학물질 없이 미생물 분해 방식으로 작동합니다." },
      { title: "지속적 효과", desc: "냄새의 원인 물질을 분해해 재발을 방지합니다." },
    ],
  },
  {
    slug: "santal-mist",
    badge: "신상품",
    name: "맑음수",
    shortDesc: "100% 자연 유래 EM | 미국 FDA 등록",
    price: "₩9,900",
    image: "/water01.png",
    longDesc:
      "100% 자연 유래 EM(유용미생물) 기술로 만든 맑음수. 미국 FDA 등록 성분으로 안전하게 검증되었으며, 자연의 힘으로 냄새와 유해균을 근본적으로 제거합니다.",
    specs: [
      { label: "주요 성분", value: "100% 자연 유래 EM" },
      { label: "인증", value: "미국 FDA 등록" },
      { label: "타입", value: "천연 미생물 제제" },
      { label: "알코올", value: "프리" },
      { label: "파라벤", value: "프리" },
      { label: "합성 향료", value: "무첨가" },
    ],
    features: [
      { title: "100% 자연 유래", desc: "화학 성분 없이 자연 유래 EM 성분만을 사용합니다." },
      { title: "미국 FDA 등록", desc: "미국 FDA에 등록된 성분으로 안전성이 검증되었습니다." },
      { title: "근본적 제거", desc: "유용미생물이 냄새와 유해균의 원인을 근본적으로 제거합니다." },
    ],
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
