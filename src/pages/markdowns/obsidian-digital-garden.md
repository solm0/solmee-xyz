---
aliases:
  - "Obsidian Digital Garden: 플러그인으로 Obsidian 노트 배포하기"
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-07
tags:
  - web
  - obsidian
  - firebase
  - vercel
  - react
thumbnail: /obsidian-website.png
overview: true
finished: true
projectId: obsidian-digital-garden
sequence: 0
---
## 개요
개인웹사이트를 Astro로 직접 만들기 전, [Obsidian Digital Garden](https://dg-docs.ole.dev/) 이라는 플러그인을 사용해서 웹사이트를 만들고 거기에 동적 컨텐츠를 iframe으로 심으려고 했던 기록이다.
- [결과물](https://my-digital-garden-j85qme5ny-solmis-projects-683e2410.vercel.app/)

## 내용
한번 만들면 끝나는 웹사이트가 아닌 내가 쓰는 글이 여러 날에 걸쳐 쌓이는 웹사이트, 즉 블로그 웹사이트를 만들려면 어떻게 해야 할지 [[how-do-i-make-blog-website|고민]]했다.

그러다가 Obsidian을 사용하게 되어서 [[publish-obsidian-note|Obsidian 노트를 그대로 배포]]할 수 있으면 좋겠다는 생각을 했다. Obsidian Digital Garden이라는 플러그인으로 웹사이트를 만들 수 있다길래 [[initial-publish-with-vercel|만들어봤다]]. 이때 [[slugify-deploy-error|파일제목에 문자 잘못 쓰면 배포할때 에러가 난다.]]

그렇게 만든 웹사이트에 동적 요소를 넣고 싶어졌다. 하지만 어떻게 끼워넣을지 몰라서 [[can-i-insert-dynamic-element-in-digital-garden|일단 대충 iframe으로 끼워넣기로 했다]].

iframe으로 넣을 또다른 웹사이트를 만들기 시작했다. [[choose-dbms|DBMS는 Firebase로 하기로 했다]]. 어떻게 쓰는지 [[firebase-initialize-and-how-to-store-img|공부]]했다. [[dynamic-website-hosting|React앱을 초기화하고 배포]]한 뒤 필터링 컴포넌트를 React로 만들고 [[read-from-firebase|firebase에서 데이터를 읽어서 컴포넌트에 넣어]] 보았다.

## 쓴거 정리
- 본체
  - 정적사이트생성: (11ty를 사용하는) Obsidian Digital Garden
  -  배포: Vercel
- iframe 부분
  - UI: React
  - 배포: Vercel
  - DBMS: Firebase