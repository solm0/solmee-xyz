---
title: "1-03. characteristics of SSGs"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-08-08
tags: ["web"]
overview: false
---
>[!note] SSG(Static Site Generator, 정적 사이트 생성기)란?
>HTML을 정해진 템플릿에 맞춰 찍어내는 웹개발 도구이다.

## SSG 공통 특징
- Performance: 빠르다
- Security: 공격할 백엔드가 없다
- Scalability
- Customization: 템플릿언어와 프레임워크를 마음대로 사용해서 커스텀 static content를 만들 수 있다.

## 많이 사용되는 SSG들
- Next.js: React의 framework이다. 가장 기능이 많은듯. 속도도 느린편
- Gatsby: 위와 비슷하게 react랑 잘맞고 뭐가 많음.
- Jekyll: GitHub Pages와 함께 사용될때가 많고 Ruby 사용함. 가장 오래된 편.
- Hugo: Go 사용함.

SSG들 사이 빌드 속도가 차이나는 이유 (ex. Eleventy < Next.js)
- 기능이 적으면 빌드과정이 단순해 빠르다.
- 템플릿을 React에 의존하는 것보다 바로 markdown 갖다쓰는게 더 빠르다.
- 간단한 데이터구조 사용하면 GraphQL같은 복잡한 구조 사용하는것보다 빠르다
- 어떤 SSG는 속도 줄이기 위한 방법을 사용한다(ex.Astro의 partial hydration)