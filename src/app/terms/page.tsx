import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `이용약관 | ${siteConfig.appNameEn}`,
  description: `${siteConfig.appNameEn} 이용약관`,
};

export default function TermsPage() {
  return (
    <main className="document-shell">
      <Link href="/" className="text-link">
        홈으로
      </Link>
      <h1>이용약관</h1>
      <p>
        본 약관은 {siteConfig.appNameKo} 이용과 관련하여 서비스 제공 조건,
        책임 범위, 이용자의 유의사항을 정리한 것입니다.
      </p>
      <section>
        <h2>1. 서비스 목적</h2>
        <p>본 서비스는 날씨 데이터를 바탕으로 의류 선택을 돕는 참고 정보를 제공합니다.</p>
      </section>
      <section>
        <h2>2. 서비스 내용</h2>
        <ul className="document-list">
          <li>현재 위치 또는 검색 지역의 날씨 정보 제공</li>
          <li>체감온도, 강수, 예보를 반영한 코디 추천</li>
          <li>위젯, 지역 검색, 컬러 매치 등 부가 기능 제공</li>
        </ul>
      </section>
      <section>
        <h2>3. 이용자의 유의사항</h2>
        <ul className="document-list">
          <li>서비스의 추천은 참고용 정보이며, 실제 체감은 개인차와 환경에 따라 달라질 수 있습니다.</li>
          <li>외부 API 상태 또는 네트워크 환경에 따라 일부 정보가 지연되거나 정확도가 달라질 수 있습니다.</li>
          <li>이용자는 기기 권한과 설정을 직접 관리해야 하며, 권한 거부 시 일부 기능이 제한될 수 있습니다.</li>
        </ul>
      </section>
      <section>
        <h2>4. 책임의 한계</h2>
        <p>
          운영자는 서비스 장애를 줄이기 위해 노력하지만, 외부 데이터 제공처의
          오류, 통신 장애, 단말기 환경 차이로 인해 발생하는 손해에 대해 법령이
          허용하는 범위 내에서 책임이 제한될 수 있습니다.
        </p>
      </section>
      <section>
        <h2>5. 약관의 변경</h2>
        <p>
          약관이 변경될 경우 웹사이트 또는 서비스 내 공지를 통해 반영하며,
          중요한 변경은 시행일과 함께 안내합니다.
        </p>
      </section>
      <section>
        <h2>6. 문의</h2>
        <div className="summary-card">
          <dl>
            <div>
              <dt>시행일</dt>
              <dd>{siteConfig.termsEffectiveDate}</dd>
            </div>
            <div>
              <dt>문의처 이메일</dt>
              <dd>{siteConfig.contactEmail}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
