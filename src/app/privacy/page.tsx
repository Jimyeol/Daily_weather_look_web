import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${siteConfig.appNameEn}`,
  description: `${siteConfig.appNameEn} 개인정보처리방침`,
};

export default function PrivacyPage() {
  return (
    <main className="document-shell">
      <Link href="/" className="text-link">
        홈으로
      </Link>
      <h1>개인정보처리방침</h1>
      <p>
        {siteConfig.appNameKo}는 위치 기반 날씨 조회, 코디 추천, 위젯 표시,
        광고 제공, 오류 분석에 필요한 범위 내에서만 정보를 처리합니다.
      </p>
      <section>
        <h2>핵심 요약</h2>
        <div className="summary-grid">
          <article className="summary-card">
            <h3>위치정보</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>현재 위치 좌표</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>지역 날씨 조회</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>기기 권한 사용, 조회 시 활용</dd>
              </div>
            </dl>
          </article>
          <article className="summary-card">
            <h3>검색/설정 정보</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>검색 지역, 민감도, 옷장, 위젯 설정, 카드 순서</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>개인화 추천 및 UI 유지</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>기기 로컬 저장소</dd>
              </div>
            </dl>
          </article>
          <article className="summary-card">
            <h3>오류/통계</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>앱 사용 정보, 기기 정보, 오류 로그</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>품질 개선, 장애 분석</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>Firebase</dd>
              </div>
            </dl>
          </article>
          <article className="summary-card">
            <h3>광고 및 외부 API</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>광고 식별자, 광고 반응 데이터, 날씨/대기질 요청 정보</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>광고 제공 및 날씨 서비스 제공</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>AdMob, 기상청, Open-Meteo</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
      <section>
        <h2>1. 수집 또는 처리하는 정보</h2>
        <h3>1) 위치정보</h3>
        <p>
          현재 위치 기반 날씨 조회를 위해 위치 좌표를 사용합니다.
        </p>
        <h3>2) 사용자가 직접 입력 또는 선택하는 정보</h3>
        <ul className="document-list">
          <li>마지막 검색 지역</li>
          <li>보유 옷장 항목 및 권장 온도 범위</li>
          <li>추위/더위 민감도</li>
          <li>위젯 스타일 및 텍스트 설정</li>
          <li>홈 카드 순서 등 개인화 설정</li>
        </ul>
        <h3>3) 자동 수집될 수 있는 정보</h3>
        <ul className="document-list">
          <li>Firebase Analytics를 통한 앱 이용 정보</li>
          <li>Firebase Crashlytics를 통한 오류 로그, 기기 및 운영체제 정보</li>
          <li>AdMob을 통한 광고 노출 및 광고 식별 관련 정보</li>
        </ul>
      </section>
      <section>
        <h2>2. 이용 목적</h2>
        <ul className="document-list">
          <li>현재 위치 또는 검색 지역의 날씨 및 대기질 조회</li>
          <li>온도 기반 코디 추천 및 위젯 표시</li>
          <li>앱 설정 유지와 사용자 맞춤 추천</li>
          <li>광고 제공</li>
          <li>앱 성능 개선, 오류 분석, 안정성 확보</li>
        </ul>
      </section>
      <section>
        <h2>3. 보관 및 처리 방식</h2>
        <ul className="document-list">
          <li>
            앱 설정과 개인화 데이터는 기기 내부 SharedPreferences 및 위젯 공유
            저장소에 저장됩니다.
          </li>
          <li>
            별도 회원가입, 계정 시스템, 자체 서버 DB에 사용자 계정을 저장하지
            않습니다.
          </li>
          <li>
            Firebase Analytics, Crashlytics, AdMob 관련 데이터는 각 서비스
            제공자의 정책에 따라 처리될 수 있습니다.
          </li>
          <li>
            위치 좌표는 날씨 및 주소 조회에 활용되며, 별도의 사용자 계정
            데이터베이스에 축적하지 않습니다.
          </li>
        </ul>
      </section>
      <section>
        <h2>4. 외부 서비스 및 제3자 처리</h2>
        <div className="document-table-wrap">
          <table className="document-table">
            <thead>
              <tr>
                <th>서비스</th>
                <th>이용 목적</th>
                <th>정책 링크</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase Analytics</td>
                <td>앱 이용 통계 분석</td>
                <td>
                  <a
                    className="text-link"
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>Google Firebase Crashlytics</td>
                <td>오류 로그 및 안정성 분석</td>
                <td>
                  <a
                    className="text-link"
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>Google AdMob</td>
                <td>광고 제공 및 광고 성과 측정</td>
                <td>
                  <a
                    className="text-link"
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>기상청 단기예보/초단기실황 API</td>
                <td>날씨 정보 조회</td>
                <td>
                  <a
                    className="text-link"
                    href="https://www.data.go.kr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>Open-Meteo Air Quality API</td>
                <td>미세먼지 및 대기질 정보 조회</td>
                <td>
                  <a
                    className="text-link"
                    href="https://open-meteo.com/en/features#terms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          주소 변환 기능은 기기 운영체제에서 제공하는 지오코딩 서비스에 의존할
          수 있습니다.
        </p>
      </section>
      <section>
        <h2>5. 이용자 권리</h2>
        <ul className="document-list">
          <li>위치 권한은 거부할 수 있으며, 거부 시 일부 기능이 제한될 수 있습니다.</li>
          <li>
            보유 옷장, 검색 지역, 위젯 설정 등은 앱 내에서 직접 수정 또는 삭제할
            수 있습니다.
          </li>
          <li>광고 식별자 및 권한 설정은 기기 운영체제 설정에서 관리할 수 있습니다.</li>
          <li>앱 삭제 시 기기 내부에 저장된 로컬 데이터는 함께 삭제될 수 있습니다.</li>
        </ul>
      </section>
      <section>
        <h2>6. 추가 고지</h2>
        <div className="summary-card">
          <dl>
            <div>
              <dt>앱 명칭</dt>
              <dd>{siteConfig.appNameKo}</dd>
            </div>
            <div>
              <dt>아동 대상 여부</dt>
              <dd>본 앱은 만 14세 미만 아동을 주요 대상으로 하지 않습니다.</dd>
            </div>
            <div>
              <dt>시행일</dt>
              <dd>{siteConfig.privacyEffectiveDate}</dd>
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
