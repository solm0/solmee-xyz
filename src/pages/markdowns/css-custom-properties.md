---
title: "CSS custom properties"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-03
tags: ["web", "css"]
overview: false
projectId: "obsidian-theme-agate"
sequence: 2
---
Custom property는 한번만 정의해 놓으면 다른 곳에서 참조할 수 있어 여러 곳에 적용된 값을 한번에 수정해야 할 때 편하다.

-  `--` prefix
- @property

## 정의, 참조해보기
사용자가 지정한 한 가지의 색이 여러 군데에 다양한 알파값으로 적용되게 하는 것을 목적으로 accent color 커스텀 변수를 정의했다.
```css
/* accent color */
--accent-color: rgb(55, 0, 255);
--accent-color-2: rgba(55, 0, 255, 0.6);
```

→ rgb값 변수를 한 번만 정의한 뒤 다른 변수에서 참조할 때 알파값을 추가할 수 있다.
```css
--accent-color: 55, 0, 255;

--link-color: rgb(var(--accent-color));
--blockquote-border-color: rgba(var(--accent-color), 0.6);
--text-selection: rgba(var(--accent-color), 0.2);
```