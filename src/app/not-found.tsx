import Link from "next/link";

export default function NotFound() {
  return (
    <main className="document-shell">
      <p className="panel-label">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>
        요청한 주소가 없거나 이동되었습니다. 홈으로 돌아가서 다시 확인해 주세요.
      </p>
      <div className="download-stack">
        <Link href="/" className="primary-action">
          홈으로 이동
        </Link>
      </div>
    </main>
  );
}
