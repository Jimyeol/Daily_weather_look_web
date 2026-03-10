export const siteConfig = {
  appNameKo: "이날씨엔뭐입지",
  appNameEn: "Daily Weather Look",
  description:
    "오늘 뭐 입지? 실시간 기온과 체감온도에 딱 맞는 최적의 코디를 추천해 드려요!",
  domain: "https://weather-daily-look.web.app",
  playStoreUrl: "#",
  appStoreUrl: "#",
  contactEmail: "crewoongcrewoong@gmail.com",
  privacyEffectiveDate: "2026-03-10",
  termsEffectiveDate: "2026-03-10",
} as const;

export const downloadLinks = [
  { label: "Google Play", href: siteConfig.playStoreUrl },
  { label: "App Store", href: siteConfig.appStoreUrl },
] as const;

export const featureHighlights = [
  "온도 기반 맞춤형 코디 추천",
  "날씨를 색으로 읽는 Weather-First UI",
  "나만의 디지털 옷장 설정",
  "미세먼지 및 기상 정보 안내",
  "컬러 매치 미리보기",
  "편리한 홈 위젯 지원",
] as const;

export const quickFacts = [
  { label: "추천 기준", value: "기온 · 체감온도 · 습도 · 바람" },
  { label: "핵심 경험", value: "오늘 뭐 입지 고민을 완벽하게 해결" },
  { label: "지원 플랫폼", value: "Android · iPhone" },
] as const;
