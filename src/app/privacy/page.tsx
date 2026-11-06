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
        {siteConfig.appNameKo}는 위치 기반 날씨 조회, 코디 추천, 사진 옷장,
        위젯 표시, 지역 검색, 날씨 알림, 이용 통계 및 오류 분석을 위해 아래
        정보를 처리합니다. 현재 앱에서는 광고 표시와 AdMob 초기화가 비활성화되어
        있습니다.
      </p>
      <section>
        <h2>핵심 요약</h2>
        <div className="summary-grid">
          <article className="summary-card">
            <h3>위치정보</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>현재 위치 또는 선택한 지역의 좌표</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>날씨·대기질·자외선 조회, 주소 변환, 위젯 갱신</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>
                  기기 저장소, 기상청·한국환경공단(에어코리아)·Open-Meteo·Kakao
                  Local·운영체제 지오코딩
                </dd>
              </div>
            </dl>
          </article>
          <article className="summary-card">
            <h3>검색/설정 정보</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>
                  즐겨찾기, 최근 선택 지역, 옷장·민감도·위젯·알림 설정, 외출
                  기준 설문 답변
                </dd>
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
            <h3>옷 사진(사진 옷장)</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>
                  직접 찍거나 고른 옷 사진, 옷의 종류·색·무늬·이름, 저장한
                  코디와 옷장 달력 기록
                </dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>배경 지우기, 옷 종류·색·무늬 인식, 내 옷으로 코디 추천</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>기기 로컬 저장소(사진은 기기 밖으로 보내지 않음)</dd>
              </div>
            </dl>
          </article>
          <article className="summary-card">
            <h3>오류/통계</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>앱 이용·기기 정보, 설치 식별자, 대략적 위치, 오류 로그</dd>
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
            <h3>주소·장소 검색</h3>
            <dl>
              <div>
                <dt>처리 항목</dt>
                <dd>입력한 검색어, 요청 시 IP 주소 등 통신 정보</dd>
              </div>
              <div>
                <dt>목적</dt>
                <dd>지역·도로명·주소·장소 검색 결과 제공</dd>
              </div>
              <div>
                <dt>보관 위치/주체</dt>
                <dd>Kakao Local, 운영체제 지오코딩</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
      <section>
        <h2>1. 수집 또는 처리하는 정보</h2>
        <h3>1) 위치정보</h3>
        <p>
          위치 권한을 허용하면 현재 위치 좌표를 사용하며, 지역을 검색하거나
          즐겨찾기를 선택하면 해당 지역 좌표를 사용합니다. 기상청에는 좌표를
          변환한 예보 격자값을, Open-Meteo에는 소수점 네 자리의 위도·경도를
          전송하여 날씨·자외선을 조회합니다. 미세먼지는 가장 가까운 측정소의
          값을 쓰기 위해 소수점 네 자리의 위도·경도를 Kakao Local의 좌표계
          변환 API에 보내 측정소 검색용 좌표(TM)로 바꾸고, 그 좌표를
          한국환경공단 에어코리아(공공데이터포털)에 보내 근처 측정소와 실시간
          측정값·대기질 예보를 조회합니다. 주소 표시는 운영체제의
          지오코딩 서비스에 좌표를 전달하여 처리할 수 있습니다. Android에서
          위젯 현재 위치 자동 갱신을 사용하는 경우에는 백그라운드 위치 권한이
          필요합니다.
        </p>
        <h3>2) 사용자가 직접 입력 또는 선택하는 정보</h3>
        <ul className="document-list">
          <li>
            즐겨찾기 최대 5개의 이름, 태그(집·회사 등), 좌표, 주소·지역명,
            선택한 방문 시간대, 표시 순서
          </li>
          <li>
            최근 선택한 검색 결과 최대 5개의 장소·지역명, 주소, 좌표와 관련
            검색어, 마지막 검색 지역 및 마지막 날씨 조회 위치
          </li>
          <li>보유 옷장 선택, 직접 추가한 항목의 이름·분류 및 권장 온도 범위</li>
          <li>코디 성별 선택, 추위/더위 민감도 및 강도</li>
          <li>위젯 스타일 및 텍스트 설정</li>
          <li>홈 카드 순서 등 개인화 설정</li>
          <li>
            날씨 알림 종류와 받을 시각, 외출 기준 설문 답변(자주 하는 활동,
            편한 시간대, 추위·더위 한계, 미세먼지·비 기준, 반려견 크기 등)
          </li>
        </ul>
        <p>
          날씨 알림은 기기에서 직접 예약하는 로컬 알림입니다. 알림을 위해
          별도 서버나 푸시 토큰을 사용하지 않으며, 알림 설정과 외출 기준
          답변은 기기 안에만 저장합니다. 이용 통계에는 설문 완료 여부와
          건너뛴 질문 수, 알림 종류별 켜짐 여부만 포함되고 답변 내용은
          포함되지 않습니다.
        </p>
        <p>
          지역 검색에서는 입력 중인 검색어도 Kakao Local의 주소 검색·장소
          검색 API에 전송하여 결과를 불러옵니다. 이 검색 요청에는 현재 GPS
          좌표를 함께 넣지 않습니다(미세먼지 측정소 조회를 위한 좌표계 변환은
          위 1)에서 설명한 별도 요청입니다). Kakao 검색을 사용할 수 없으면
          운영체제의
          지오코딩 서비스에 검색어를 전달하여 검색하고, 결과 좌표로 주소를
          확인할 수 있습니다.
        </p>
        <h3>3) 옷 사진과 옷 인식 데이터</h3>
        <p>
          사진 옷장에서 옷을 찍거나 앨범에서 고를 때에만 카메라·사진 접근
          권한을 요청합니다. 고른 사진의 배경 지우기는 기기 안에서 처리하며
          (iOS는 Apple Vision, Android는 Google Play 서비스의 ML Kit 기기 내
          처리), 옷의 종류·색·무늬 인식도 기기 안의 모델로 처리합니다. 옷
          사진, 인식 결과, 이름, 저장한 코디와 옷장 달력 기록은 기기 내부
          저장소에만 보관하며 운영자 서버나 외부 서비스로 보내지 않습니다.
        </p>
        <p>
          옷 종류 인식에 쓰는 모델 파일(약 40MB, 학습된 데이터 파일)은 앱
          용량을 줄이기 위해 앱에 넣지 않고, 사용자가 동의한 경우에만 처음 한
          번 GitHub(GitHub Releases)에서 HTTPS로 내려받습니다. 이때 사진이나
          개인 정보는 보내지 않으며, 파일을 받는 과정에서 GitHub에 IP 주소 등
          통신 정보가 전달됩니다. 받은 파일은 무결성(SHA-256)을 확인한 뒤
          기기에 저장합니다. 다운로드 주소는 Firebase Remote Config로 바뀔 수
          있습니다. 받지 않기를 선택해도 옷장은 그대로 쓸 수 있으며, 이때는
          옷 종류를 직접 고릅니다. 이용 통계에는 사진 옷장 기능을 썼는지와
          같은 사용 여부만 기록되고 사진이나 옷의 이름·색 등 내용은 포함되지
          않습니다.
        </p>
        <h3>4) 자동 수집되는 정보</h3>
        <ul className="document-list">
          <li>
            Firebase Analytics: 앱 실행·화면 조회·세션 등 이용 정보, 앱·기기·
            운영체제 정보, 앱 인스턴스 식별자 및 IP 주소에서 추정한 대략적 위치
          </li>
          <li>
            Firebase Crashlytics: 오류 내용·스택 추적·오류 당시 앱 상태,
            기기·운영체제 정보, Crashlytics 설치 UUID 및 Firebase 설치 ID.
            Analytics와 함께 오류 직전의 이용 기록을 처리하며, 연관 SDK는
            세션·진단 정보를 처리합니다.
          </li>
          <li>
            Firebase Remote Config: 업데이트 안내, 공지사항, 옷 인식 모델
            다운로드 주소 등 앱 설정을 받기 위해 Firebase 설치 ID와 앱·기기
            정보를 처리합니다.
          </li>
          <li>외부 API 요청 시 서비스 제공자에게 전달되는 IP 주소 등 통신 정보</li>
        </ul>
        <p>
          통계·오류 정보는 앱 인스턴스·설치 또는 기기 식별자와 연결되어
          처리될 수 있습니다. Android에서는 운영체제 설정에 따라 광고 ID가
          수집될 수 있으며, 앱에서 Analytics 광고 ID 수집을 비활성화하지
          않습니다. iOS에서도 IDFV(공급업체 식별자) 수집을 비활성화하지
          않으며, IDFA(광고 식별자) 접근은 SDK 구성과 운영체제의 추적 권한
          제한을 따릅니다. 현재 광고 표시가 비활성화되어 있어도 통계·오류
          SDK의 식별자 수집까지 중단되는 것은 아닙니다.
        </p>
      </section>
      <section>
        <h2>2. 이용 목적</h2>
        <ul className="document-list">
          <li>주소·장소 검색과 현재 위치 또는 선택 지역의 날씨·대기질·자외선 조회</li>
          <li>내일 옷차림·계절 변화·비 소식·러닝 등 날씨 알림 예약</li>
          <li>외출 기준에 맞춘 산책·러닝·등산 등 활동 시간 추천</li>
          <li>온도 기반 코디 추천 및 위젯 표시</li>
          <li>옷 사진 정리(배경 지우기), 옷 종류·색·무늬 인식, 내 옷으로 코디 추천</li>
          <li>업데이트 안내와 공지사항 표시</li>
          <li>앱 설정 유지와 사용자 맞춤 추천</li>
          <li>앱 성능 개선, 오류 분석, 안정성 확보</li>
        </ul>
      </section>
      <section>
        <h2>3. 보관 및 처리 방식</h2>
        <ul className="document-list">
          <li>
            즐겨찾기, 최근 선택한 검색 결과, 마지막 검색·날씨 위치, 옷장과
            개인화 설정, 옷 사진과 인식 결과, 저장한 코디와 옷장 달력 기록,
            내려받은 옷 인식 모델 파일은 기기 내부 저장소에 저장합니다. 위젯 표시 정보는
            위젯 공유 저장소에도 저장하며, 날씨·예보·대기질 결과와 조회 위치·
            저장 시각은 캐시로 보관하여 재조회와 오프라인 표시에 사용합니다.
          </li>
          <li>
            별도 회원가입, 계정 시스템, 자체 서버 DB에 사용자 계정을 저장하지
            않습니다.
          </li>
          <li>
            로컬 설정은 변경·삭제하거나 앱 데이터를 정리할 때까지 남을 수
            있습니다. 캐시는 갱신되거나 개수 제한에 따라 교체되며, 유효 시간이
            지난 결과를 사용하지 않는 것과 저장 파일의 즉시 삭제는 다릅니다.
          </li>
          <li>
            외부로 전송된 검색어·좌표·통계·오류 정보 및 요청 로그는 각
            제공자의 정책과 서비스 설정에 따라 보관·처리됩니다. Open-Meteo는
            좌표가 포함될 수 있는 API 요청 로그를 90일 후 삭제한다고
            안내합니다. Firebase Crashlytics는 오류 기록과 관련 식별자를
            90일간 보관한 뒤 삭제 절차를 시작하며, Analytics 보관 기간은
            서비스 설정과 정책을 따릅니다. 앱 삭제가 외부 서비스에 이미
            전송된 정보의 삭제를 의미하지는 않습니다.
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
                <td>이용 정보·식별자·대략적 위치를 통한 통계 분석</td>
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
                <td>설치 식별자·오류·세션·진단 정보를 통한 안정성 분석</td>
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
                <td>Google Firebase Remote Config</td>
                <td>설치 식별자를 통한 업데이트 안내·공지사항·앱 설정 수신</td>
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
                <td>GitHub(GitHub Releases)</td>
                <td>
                  동의한 경우 옷 인식 모델 파일 다운로드(사진·개인 정보는 보내지
                  않음, IP 주소 등 통신 정보만 전달)
                </td>
                <td>
                  <a
                    className="text-link"
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>Kakao Local</td>
                <td>
                  입력한 검색어를 통한 주소·장소 검색, 좌표계 변환(미세먼지
                  측정소 조회)
                </td>
                <td>
                  <a
                    className="text-link"
                    href="https://www.kakao.com/policy/privacy?lang=ko"
                    target="_blank"
                    rel="noreferrer"
                  >
                    개인정보처리방침
                  </a>
                  {" · "}
                  <a
                    className="text-link"
                    href="https://developers.kakao.com/docs/ko/local/dev-guide"
                    target="_blank"
                    rel="noreferrer"
                  >
                    API 안내
                  </a>
                </td>
              </tr>
              <tr>
                <td>기상청·공공데이터포털</td>
                <td>예보 격자값·조회 시점으로 날씨 조회</td>
                <td>
                  <a
                    className="text-link"
                    href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>한국환경공단 에어코리아(공공데이터포털)</td>
                <td>변환한 좌표(TM)로 근처 측정소·실시간 미세먼지·대기질 예보 조회</td>
                <td>
                  <a
                    className="text-link"
                    href="https://www.data.go.kr/data/15073861/openapi.do"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>Open-Meteo</td>
                <td>좌표를 통한 자외선·과거 기온 조회</td>
                <td>
                  <a
                    className="text-link"
                    href="https://open-meteo.com/en/terms#privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    링크
                  </a>
                </td>
              </tr>
              <tr>
                <td>운영체제 지오코딩(Apple·Android 제공 서비스)</td>
                <td>검색어·좌표를 통한 주소와 지역명 변환</td>
                <td>
                  <a
                    className="text-link"
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apple
                  </a>
                  {" · "}
                  <a
                    className="text-link"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          위 서비스는 네트워크 요청 또는 SDK를 통해 정보를 전달받습니다.
          운영체제의 지오코딩 제공자는 기기 환경에 따라 다를 수 있으며,
          데이터의 보관·처리 지역과 권리 행사 방법은 각 제공자의 정책을
          확인해 주세요.
        </p>
      </section>
      <section>
        <h2>5. 이용자 권리</h2>
        <ul className="document-list">
          <li>
            기기 설정에서 위치 권한을 변경·철회할 수 있습니다. 현재 위치
            기능을 사용하지 않고 지역 검색으로 날씨를 조회할 수도 있습니다.
          </li>
          <li>
            즐겨찾기는 편집 화면에서 수정·삭제할 수 있으며, 검색 화면의 최근
            검색은 개별 삭제 또는 모두 지우기를 사용할 수 있습니다.
          </li>
          <li>
            직접 추가한 옷장 항목과 사진 옷장의 옷 사진, 저장한 코디, 옷장
            달력 기록은 앱에서 수정·삭제할 수 있습니다. 카메라·사진 권한은 기기
            설정에서 변경·철회할 수 있고, 옷 인식 모델은 받지 않기를 선택할 수
            있습니다. 기본 옷장 항목의
            사용 여부, 코디 성별·민감도·위젯 설정은 앱에서 변경할 수 있습니다.
          </li>
          <li>
            광고 식별자와 관련 권한은 운영체제가 제공하는 설정에서 관리할 수
            있습니다. 앱을 완전히 삭제하거나 운영체제의 앱 데이터 삭제 기능을
            사용하면 로컬 데이터를 정리할 수 있으며, 백업·복원 및 위젯 공유
            저장소 처리는 운영체제 정책을 따릅니다.
          </li>
          <li>
            현재 앱에는 통계·오류 수집을 끄거나 이미 전송된 SDK 데이터를
            삭제하는 별도 메뉴가 없습니다. 로컬 항목 삭제나 위치 권한 철회는
            외부에 이미 전송된 정보를 삭제하지 않습니다. 개인정보 관련 문의는
            아래 이메일로 연락해 주세요.
          </li>
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
