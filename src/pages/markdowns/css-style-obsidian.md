---
alias:
  - Obsidian을 CSS로 스타일링할 수 있는 원리
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-01
tags:
  - web
  - css
overview: false
projectId: obsidian-theme-agate
sequence: 1
---
[Markup 언어](https://en.wikipedia.org/wiki/Markup_language)는 태그를 이용해 문서의 구조를 나타내는 것으로 HTML이 그 예시다. Markup 언어의 일종인 [Markdown](https://en.wikipedia.org/wiki/Markdown)은 훨씬 더 단순한 문법으로 서식을 표현한다. Notion 등 많은 문서 생성 프로그램에서 지원한다.

콜아웃 등의 서식을 Markdown을 입력하지 않고 검색해 사용할 수 있는 Notion과 달리 Obsidian은 Markdown을 직접 입력한다. 그리고 Obsidian의 앱은 Electron이라는 걸로 만들어져서 HTML구조를 가지고 있다고 한다. 컴퓨터에 저장된 Markdown 파일이 앱에서 HTML로 변환되어 렌더링되기 때문에 CSS로 스타일할 수 있다.

사용자들이 자유롭게 자신의 CSS를 작성해 덮어쓰기할 수 있는데, 크게 두 가지 방법이 있다.
1. `Settings`>`Appearance`>`CSS snippets`에 작성
2. `theme.css`에 작성 [설명](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)

## Inspector 사용하기
웹사이트의 HTML요소들을 크롬의 개발자도구로 확인할 수 있듯이 Obsidian 앱의 HTML요소도 Inspector로 확인할 수 있다. [Obsidian CSS Inspector Workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)

단축키: `option command i` (mac)