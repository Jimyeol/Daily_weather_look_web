import Link from "next/link";
import { 
  CloudSun, 
  ThermometerSun, 
  Palette, 
  Shirt, 
  Wind, 
  Layers, 
  LayoutTemplate 
} from "lucide-react";
import { downloadLinks } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-sans)] selection:bg-blue-100">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between z-10">
          <Link href="/" className="font-bold text-xl tracking-tight text-slate-800 flex items-center gap-2">
            <CloudSun className="w-6 h-6 text-blue-500" />
            이날씨엔뭐입지
          </Link>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">기능 소개</a>
            <Link href="/download" className="hover:text-blue-600 transition-colors">앱 다운로드</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100 to-transparent opacity-50 blur-3xl -z-10 rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            스마트 날씨 코디 가이드
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              오늘 뭐 입지?
            </span>
            <br />
            고민을 끝내드립니다
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            실시간 기온과 체감온도에 딱 맞는
            <br className="sm:hidden" /> 최적의 코디를 추천해 드려요!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {downloadLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 !text-white font-semibold text-lg hover:bg-blue-600 hover:!text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                {link.label} 다운로드
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">
            아침마다 옷장 앞에서 고민하는 당신을 위한 <br className="hidden md:block"/>
            <span className="text-blue-600">스마트 날씨 코디 가이드</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            단순히 기온만 보여주는 날씨 앱은 이제 그만! &apos;이날씨엔뭐입지&apos;는 현재 기온은 물론, 바람과 습도를 고려한 <strong className="text-slate-800">체감온도</strong>를 면밀히 분석하여 당신에게 가장 필요한 옷차림을 콕 집어 추천해 드립니다.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">핵심 기능</h2>
            <p className="text-lg text-slate-600">더 이상 날씨 때문에 옷차림을 실패하지 마세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <ThermometerSun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">온도 기반 맞춤형 코디 추천</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                현재 기온과 체감온도에 최적화된 상의, 하의, 외투 조합을 제안합니다.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                💡 &apos;지금 코디&apos;와 &apos;n시간 후 코디&apos;를 한눈에 비교하여 일교차에 완벽하게 대비하세요.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Weather-First UI</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                앱을 켜자마자 배경색만으로 오늘 날씨의 분위기(혹한, 쾌적, 폭염 등)를 직관적으로 파악할 수 있습니다.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                🎨 비, 눈, 흐림 등 기상 상황에 따라 실시간으로 변화하는 감각적인 팔레트!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">나만의 디지털 옷장</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                내가 가지고 있는 옷들을 카테고리별로 설정하고 추천 아이템을 필터링하세요.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                ✨ 추위나 더위를 많이 타시나요? 개인별 민감도 보정으로 초개인화 추천을 제공합니다.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">미세먼지 & 기상 정보 안심 알림</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                미세먼지(PM10/PM2.5) 수치가 나쁠 땐 마스크 착용 알림 카드를 보여드려요.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                🗺️ 지역 검색 기능으로 여행지나 출장지의 날씨와 코디도 미리 확인 가능!
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">컬러 매치 미리보기</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                상/하의 컬러 조합 기능을 통해 옷을 직접 입어보지 않고도 오늘 스타일의 색감을 미리 맞춰볼 수 있습니다.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                👗 오늘 기분에 맞는 완벽한 스타일링을 완성하세요.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <LayoutTemplate className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">편리한 홈 위젯</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                앱을 켜지 않아도 스마트폰 홈 화면에서 현재 온도와 추천 아이템을 바로 확인할 수 있어 1초만에 코디 고민 끝!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">가장 스마트한 날씨 습관의 시작</h2>
          <p className="text-blue-100 text-xl mb-10">지금 바로 무료로 다운로드하고 내일 아침의 여유를 즐기세요!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {downloadLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}에서 시작하기
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-semibold">
            <CloudSun className="w-5 h-5 text-blue-400" />
            이날씨엔뭐입지
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/download" className="hover:text-white transition-colors">다운로드 안내</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-center md:text-left text-sm text-slate-500">
          © {new Date().getFullYear()} Daily Weather Look. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
