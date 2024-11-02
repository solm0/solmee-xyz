---
title: "CSS custom properties"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-03
tags: ["web"]
thumbnail:
	url:
	alt:
dashboard: false
---
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
> Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with.

-  `--` prefix
- @property

##### 정의, 참조해보기
사용자가 지정한 한 가지의 색이 여러 군데에 다양한 알파값으로 적용되게 하는 것을 목적으로 --accent-color 커스텀 변수를 정의했다.
```css
/* accent color */
--accent-color: rgb(55, 0, 255);
--accent-color-2: rgba(55, 0, 255, 0.6);
```

→ rgb값 변수를 한 번만 정의한 뒤 다른 변수에서 참조할 때 알파값 추가하는 거 성공했다!
```css
--accent-color: 55, 0, 255;

--link-color: rgb(var(--accent-color));
--blockquote-border-color: rgba(var(--accent-color), 0.6);
--text-selection: rgba(var(--accent-color), 0.2);
```


추가적으로 몇 개의 커스텀 변수를 더 정의해서 쓰고 있다.
```
body {
	--accent-color: 55, 0, 255;
	--light-color: 170, 170, 170;
	--light-alpha-color: 0;
	...
}
```
-  --light-color: 창의 투명도 효과를 위해 배경색을 회색으로 만들었는데, 다른 라이트 모드의 창에 비해 어두워서 불편할 수도 있다. 그래서 사용자가 배경색의 밝기와 색상을 조절할 수 있도록 이 변수를 만들었다.

--accent-color와 --light-color는 사용자가 변경하기 쉽게 readme에 스니펫을 올려놔야겠다.