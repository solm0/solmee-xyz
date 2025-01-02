---
aliases:
  - SSG 프레임워크 선택하기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-08-08
tags:
  - web
  - ssg
overview: false
projectId: solmee-xyz-1-0-0
sequence: 3
---
> SSG(Static Site Generator, 정적 사이트 생성기)는 HTML을 정해진 템플릿에 맞춰 찍어내는 도구이다.

## SSG의 특징
- Performance: 빠르다
- Security: 공격할 백엔드가 없다
- Scalability: 내용많아도 상관없음
- Customization: 템플릿언어와 프레임워크를 마음대로 사용할 수 있다.

SSG들의 빌드 속도가 차이나는 이유
- 대체적으로 기능이 적으면 빠르다. 빌드 과정이 단순하기 때문이다.
- 템플릿 만들때 React같은 다른거 사용하면 더 느려진다.
- 간단한 데이터구조 사용하면 GraphQL같은 복잡한 구조 사용하는것보다 빠르다
- 어떤 SSG는 속도 줄이기 위한 방법을 사용한다(ex.Astro의 partial hydration)

로딩 속도는 HTML만 있으면 다 똑같을거고 이미지나 폰트같이 따로 로드해야 하는 게 있으면 느려지겠지... 이것도 최적화하는 방식이 SSG들마다 제각기 다른 것 같다.

## SSG 후보와 최종 결정
chatGPT한테 내 조건(Obsidian -> ___ -> Vercel, React 사용 예정)에 적합한 SSG를 추천해달라고 하니 다음을 추천해 주었다.

|                       | Eleventy          | Astro                                         | Hugo    | Next.js                                                                 |
| --------------------- | ----------------- | --------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| Pros                  | 단순하다              | React와 합칠<br>수 있다                             | 기능이 많다  | 기능이 많다,<br>React<br>프레임워크라서<br>동적컨텐츠 많이<br>다룰 수 있다,<br>vercel과 같은<br>회사 |
| Cons                  | 복잡한 SSG<br>기능이 없다 | Eleventy<br>보다 복잡하다                           | Go 배워야됨 | 더 복잡하고<br>더 느리다                                                         |
| Markdown<br>→<br>HTML | 곧바로.              | interactive<br>한 컴포넌트와<br>함께 configure<br>가능. | 많은 옵션.  | next-mdx같은<br>플러그인 사용                                                   |

고려한 것
- 쉬운가
	- Hugo는 새로운 언어 Go를 배워야 하는 것 같아서 패스
	- Next.js는 내 프로젝트에 비해 좀 거대한 느낌? (아는게 없어서 항상 '느낌'이 선택에 엄청난 영향을 미친다)
- 템플릿만들때 React를 쓸 수 있는가
	- Eleventy는 React 지원하지 않아서 패스.
	- Eleventy에서 React 쓸수는 있는데 추가적인 setup이 필요해 Eleventy의 장점인 단순함이 사라져서 굳이?인듯.
- Markdown파일이 변경될 때마다 자동으로 웹사이트에 반영되는가
	- 다 됨
- 최종적으로 Astro를 선택했다.