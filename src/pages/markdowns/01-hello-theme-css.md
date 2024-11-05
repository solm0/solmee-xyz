---
title: "01. Hello, theme.css!"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-01
tags: ["web", "css"]
thumbnail:
	url:
	alt:
dashboard: false
---
## CSS로 스타일링 가능한 원리
[마크업 언어](https://en.wikipedia.org/wiki/Markup_language)는 태그를 이용해 문서의 구조를 나타내는 것으로 HTML이 그 예시다. 마크업 언어의 일종인 [마크다운](https://en.wikipedia.org/wiki/Markdown)은 훨씬 더 단순한 문법으로 서식을 표현한다. 노션 등 많은 문서 생성 프로그램에서 지원한다.

콜아웃 등의 서식을 마크다운을 입력하지 않고 검색해 사용할 수 있는 노션과 달리 옵시디언은 마크다운**으로만** 작성한다. 로컬에 저장된 마크다운 파일은 HTML로 변환되어 렌더링되기 때문에 css로 스타일할 수 있다.

옵시디언은 사용자들이 자유롭게 자신의 CSS를 작성해 덮어쓰기할 수 있도록 해놨는데, 크게 두 가지 방법이 있다.
1.  `Settings`>`Appearance`>`CSS snippets`에 작성
2.  `theme.css`에 작성
		세부 방법은 [이곳](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)에서 볼 수 있다.

## CSS variable
큰 프로젝트에서는 여러 요소에 동일한 스타일을 적용하고 관리하기 위해 CSS variable을 사용한다. 그걸 모아놓은걸 CSS frameworks라고 하는데 Bootstrap, tailwind css등이 있다.
```css
--h1-color = #f6f3f0;
color: var(--h1-color);
```

옵시디언은 사용자가 커스텀 CSS를 작성할 때도 직접 값을 입력하기보다는 미리 선언된 CSS variable들을 사용할 것을 권장한다. [옵시디언 CSS variable 목록](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)

## Inspector 사용하기
요소가 너무 많기때문에 직접 Inspector를 열어 HTML요소를 뜯어봐야 하는 때가 온다. 이 사이트를 참고한다. [Obsidian CSS Inspector Workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)