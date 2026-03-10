# Daily Weather Look Web

Firebase Hosting에 배포하는 `이날씨엔 뭐입지?` 소개/랜딩 웹입니다.

## Stack

- Next.js
- App Router
- Static export
- Firebase Hosting

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

정적 산출물은 `out/` 디렉터리에 생성됩니다.

## Firebase Hosting

```bash
firebase deploy --only hosting
```

Firebase 프로젝트 ID는 `weather-daily-look`로 설정되어 있습니다.

## Before Deploy

- `src/lib/site.ts`의 `playStoreUrl` 교체
- `src/lib/site.ts`의 `appStoreUrl` 교체
- `src/lib/site.ts`의 `contactEmail` 교체
