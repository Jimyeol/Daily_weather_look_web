import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

const faqItems = [
  {
    question: "현재 위치 기반 날씨 조회가 되지 않아요.",
    answer:
      "인터넷 연결 상태와 기기의 위치 서비스, 앱의 위치 접근 권한을 먼저 확인해 주세요. 위치 권한이 허용되지 않았거나 일시적으로 위치를 확인하지 못하면 현재 위치 기반 조회가 제한될 수 있으며, 이 경우 지역 검색으로도 이용할 수 있습니다.",
  },
  {
    question: "위치 권한을 다시 변경하고 싶어요.",
    answer:
      "기기의 설정에서 앱별 위치 권한을 다시 변경할 수 있습니다. 위치 권한 상태에 따라 현재 위치 기반 날씨 조회 기능 사용 범위가 달라질 수 있습니다.",
  },
  {
    question: "광고 제거 구매가 진행되지 않아요.",
    answer:
      "네트워크 연결이 불안정하거나 App Store 또는 Google Play 결제 상태에 일시적인 문제가 있을 때 구매가 지연될 수 있습니다. 잠시 후 다시 시도해 보시고, 이미 결제가 완료되었다면 구매 복원도 함께 확인해 주세요.",
  },
  {
    question: "광고 제거 구매 복원은 어떻게 하나요?",
    answer:
      "앱 내 광고 제거 관련 화면에서 구매 복원 기능을 이용해 주세요. 동일한 Apple ID 또는 Google 계정으로 이전에 구매한 항목이라면 복원이 가능하며, 복원이 되지 않으면 문의 이메일로 알려주시면 확인을 도와드리겠습니다.",
  },
  {
    question: "날씨 정보가 불러와지지 않아요.",
    answer:
      "먼저 인터넷 연결 상태를 확인해 주세요. 일시적인 네트워크 문제나 외부 날씨 데이터 제공처 응답 지연으로 정보가 늦게 표시될 수 있으니 잠시 후 다시 시도해 보시는 것도 좋습니다.",
  },
  {
    question: "위젯 정보가 바로 갱신되지 않아요.",
    answer:
      "위젯은 iOS 또는 Android의 시스템 정책에 따라 즉시 갱신되지 않을 수 있습니다. 앱을 한 번 실행해 최신 정보를 불러온 뒤 잠시 기다려 주시면 반영되는 경우가 많습니다.",
  },
  {
    question: "날씨 알림이 오지 않아요.",
    answer:
      "앱 내 알림 설정이 켜져 있는지와 기기의 알림 허용 상태를 함께 확인해 주세요. 절전 모드, 배터리 최적화, 네트워크 상태, 시스템 알림 설정에 따라 알림 수신이 지연되거나 제한될 수 있습니다.",
  },
  {
    question: "지역 검색 결과가 기대와 달라요.",
    answer:
      "검색어가 비슷한 다른 지역으로 연결되거나 행정구역 표기 방식에 따라 결과가 다르게 보일 수 있습니다. 지역명에 시·군·구를 함께 입력해 보시고, 결과가 계속 다르면 문의 메일로 알려주시면 확인하겠습니다.",
  },
] as const;

const supportTopics = [
  "날씨 조회 오류",
  "위치 권한 관련 문제",
  "위젯 표시 문제",
  "푸시 알림 문제",
  "인앱결제 및 구매 복원 문의",
  "앱 사용 중 오류 제보",
] as const;

export const metadata: Metadata = {
  title: `${siteConfig.appNameKo} 고객지원`,
  description:
    "이날씨엔뭐입지 고객지원 페이지입니다. 문의 이메일, FAQ, 인앱결제 및 위치 권한, 위젯, 알림 관련 지원 정보를 확인할 수 있습니다.",
};

export default function SupportPage() {
  return (
    <main className="document-shell">
      <Link href="/" className="text-link">
        홈으로
      </Link>
      <h1>이날씨엔뭐입지 고객지원</h1>
      <p>
        {siteConfig.appNameKo} 이용 중 불편을 겪으셨거나 궁금한 점이 있다면 아래
        안내를 통해 언제든지 문의해 주세요. 실시간 날씨, 체감온도, 강수 정보
        기반 코디 추천 기능 이용 중 발생한 문제를 iOS와 Android 환경에서
        확인해 드립니다.
      </p>

      <section>
        <h2>문의 방법</h2>
        <div className="summary-card">
          <dl>
            <div>
              <dt>문의 이메일</dt>
              <dd>{siteConfig.contactEmail}</dd>
            </div>
            <div>
              <dt>메일 보내기</dt>
              <dd>
                <a
                  className="text-link"
                  href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                    `${siteConfig.appNameKo} 문의`,
                  )}`}
                >
                  이메일로 문의하기
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ul className="document-list">
          <li>
            문의 시 기기 모델, 운영체제 버전(iOS 또는 Android), 앱 버전, 문제
            상황을 함께 보내주시면 더 빠른 지원이 가능합니다.
          </li>
          <li>문의하신 내용은 영업일 기준 2~3일 이내 답변드릴 예정입니다.</li>
        </ul>
      </section>

      <section>
        <h2>자주 묻는 질문</h2>
        <div className="summary-grid">
          {faqItems.map((item) => (
            <article key={item.question} className="summary-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>지원 가능 항목</h2>
        <p>
          아래와 같은 문제는 고객지원으로 도와드릴 수 있습니다. 문제가
          반복되거나 해결되지 않으면 이메일로 상세 내용을 보내 주세요.
        </p>
        <ul className="document-list">
          {supportTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>정책 링크</h2>
        <div className="summary-grid">
          <article className="summary-card">
            <h3>개인정보처리방침</h3>
            <p>개인정보 처리 항목과 이용 목적, 외부 서비스 이용 내용을 확인할 수 있습니다.</p>
            <p>
              <a
                className="text-link"
                href="https://weather-daily-look.web.app/privacy"
                target="_blank"
                rel="noreferrer"
              >
                개인정보처리방침 보기
              </a>
            </p>
          </article>
          <article className="summary-card">
            <h3>이용약관</h3>
            <p>서비스 이용 조건과 책임 범위, 이용 시 유의사항을 확인할 수 있습니다.</p>
            <p>
              <a
                className="text-link"
                href="https://weather-daily-look.web.app/terms"
                target="_blank"
                rel="noreferrer"
              >
                이용약관 보기
              </a>
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>문의 안내</h2>
        <p>
          추가 도움이 필요하시면 {siteConfig.contactEmail}로 문의해 주세요.
          {siteConfig.appNameKo}를 이용해 주셔서 감사합니다.
        </p>
      </section>
    </main>
  );
}
