---
title: "사용한 플러그인들"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-01
tags: ["web", "obsidian"]
overview: false
projectId: "obsidian-theme-agate"
sequence: 5
---
## Smart Typography
→ ≥ ≤ ≠  
노션에서 쓰던 자동 Ligature 옵시디언 인터페이스에서도 사용

## Wrap with shortcuts
이미 옵시디언에서 제공하는 기능이 엄청 많긴 한데 내가 만든 요소를 더 넣고 싶다면 HTML 태그로 텍스트를 감싸주는 Hotkey를 생성할 수 있다. 그리고 그 태그를 theme.css에서 스타일링하면 됨.

- Underline `<u></u>`
- ~~Indent `<p class=”indented”></P>`~~
	탭이 읽기모드에서 무시되길래 직접 들여쓰기된 p를 만들었는데 좀 이상하다. 아래 요소에까지 영향을 미쳐서 기본 문법 적용이 안되게 한다. 그래서 삭제함.
- Small
	캡션용 가운데정렬 작은 글씨. 이것 역시 그 아래 요소에 영향을 미쳐서 좀 불편하다.
	블록 태그 특징인듯.