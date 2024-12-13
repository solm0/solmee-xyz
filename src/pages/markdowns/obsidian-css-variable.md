---
aliases:
  - Obsidian CSS variable을 사용해 디자인하기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-03
tags:
  - web
  - css
overview: false
projectId: obsidian-theme-agate
sequence: 2
---
## CSS variable
여러 요소에 동일한 스타일을 적용하고 관리하기 위해 CSS variable을 사용한다. (그걸 모아놓은걸 CSS frameworks라고 하는데 Bootstrap, tailwind css등이 있다.)
```css
--h1-color = #f6f3f0;
color: var(--h1-color);
```

옵시디언은 사용자가 커스텀 CSS를 작성할 때도 직접 값을 입력하기보다는 미리 선언된 CSS variable들을 사용할 것을 권장한다. 옵시디언이 업데이트되어 내부 요소들이 바뀔 경우 테마가 깨지는 것을 방지하기 위해서인 듯하다. [옵시디언 CSS variable 목록](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)

## CSS variable 정의, 참조해보기
`--accent-color`라는 변수를 정의했다.
```css
--accent-color: rgb(55, 0, 255);
--accent-color-2: rgba(55, 0, 255, 0.6);
```

→ 이렇게 하면 rgb값을 한 번만 정의한 뒤 다른 변수에서 참조할 때 알파값을 다양하게 할 수 있다.
```css
--accent-color: 55, 0, 255;

--link-color: rgb(var(--accent-color));
--blockquote-border-color: rgba(var(--accent-color), 0.6);
--text-selection: rgba(var(--accent-color), 0.2);
```