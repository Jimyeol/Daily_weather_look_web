import type { Metadata } from "next";
import Link from "next/link";

import { downloadLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `다운로드 | ${siteConfig.appNameEn}`,
  description: `${siteConfig.appNameEn} 앱 다운로드 안내`,
};

export default function DownloadPage() {
  return (
    <main className="document-shell">
      <Link href="/" className="text-link">
        홈으로
      </Link>
      <h1>앱 다운로드</h1>
      <p>
        스토어 링크를 연결하면 이 페이지에서 Android와 iPhone 사용자를 각각
        스토어로 보낼 수 있습니다.
      </p>
      <div className="download-stack">
        {downloadLinks.map((link) => (
          <a
            key={link.label}
            className="primary-action"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="muted-note">
        현재 스토어 링크는 placeholder 상태입니다. 실제 출시 URL로 바꾸면 바로
        사용 가능합니다.
      </p>
    </main>
  );
}
