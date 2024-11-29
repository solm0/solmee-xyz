---
alias: Compare SSGs
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-08-08
tags:
  - web
  - astro
  - ssg
overview: false
projectId: solmee-xyz
sequence: 4
---
챗지피티에게 내 markdown 파이프라인에 적합한 SSG를 추천해달라고 하니 다음을 추천해 주었다. 비교해 보면서 선택지를 좁혀보자.

|                       | Eleventy          | Astro                                         | Hugo           | Next.js                                                                 |
| --------------------- | ----------------- | --------------------------------------------- | -------------- | ----------------------------------------------------------------------- |
| Pros                  | 단순하다,<br>굉장히 빠르다  | React와 합칠<br>수 있다,<br>빠르다                     | 빠르다,<br>기능이 많다 | 기능이 많다,<br>React<br>프레임워크라서<br>동적컨텐츠 많이<br>다룰 수 있다,<br>vercel과 같은<br>회사 |
| Cons                  | 복잡한 SSG<br>기능이 없다 | Eleventy<br>보다 복잡하다                           | Go 배워야됨        | 더 복잡하고<br>더 느리다                                                         |
| Markdown<br>→<br>HTML | 곧바로.              | interactive<br>한 컴포넌트와<br>함께 configure<br>가능. | 많은 옵션.         | next-mdx같은<br>플러그인 사용                                                   |

## 자동 build, deploy
옵시디언으로 작성해 로컬디렉토리에 저장돼있는 markdown파일이 변경될 때마다 자동으로 rebuild하고 deploy되게 할 수 있을까? → 대부분의 SSG가 그렇게 한다.

## 최종 결정
- Hugo는 새로운 언어 Go를 익혀야 하니 패스한다
- 나는 React로 재사용가능한 컴포넌트들을 만들고 싶은데 Eleventy는 React 지원하지 않아서 패스.
	- Eleventy에서 React 쓸수는 있는데 추가적인 setup이 필요해 Eleventy의 장점인 단순함이 사라져서 굳이?인듯.
- Next.js는 내 개인웹사이트에 쓰기에는 overkill 느낌
- 최종적으로 Astro를 선택했다.