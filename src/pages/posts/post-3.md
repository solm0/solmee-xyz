---
title: 'Macro typography in Obsidian'
layout: ../../layouts/WorksLayout.astro
category: "works"
pubDate: 2024-11-02
tags: ["markdown", "obsidian", "customization"]
---
단주, 첨자, 각주, 문장부호를 꾸며보자.

### formatting 종류와 단축키 커스터마이징
1.  기본 Syntax, Hotkey 이용하기
	→ 부족해!
2.  `Settings`>`Hotkeys`에서 단축키 생성, 편집하기
	→ 아직도 부족해!
3. [[사용한 플러그인들#Wrap with shortcuts|플러그인]]을 이용해 HTML 태그로 감싸주는 단축키 생성, 편집하기
	→ 이정도 툴을 보유했다면 옵시디언 내에 넣지 못할 요소는 없다고 보면 된다.

### formatting 스타일 커스터마이징
이것은 **bold**입니다.
이것은 *italic*입니다.
~~이것은 strike-through입니다~~
<u>이것은 underline입니다</u>
==이것은 highlight입니다==

이것은 인라인 수식    $56$  $6^8$  입니다
블록 수식 $$ 73487589473954 $$
이것은 `inline code`입니다.
블록 코드
```c++
for (int i = 0; i < 3; i++){}
```
----

- [ ] y8yhykkk
	- [x] fff
		- [x] ff
1. ㄹㄹㄹ
2. ㅇㅇ
	1. ㄹ
		1. ㅇㅇ
- ㄹㄹ
- ㅇㅇ
	- ㄹㅇㄹ

이것은 [외부 링크](https://www.reddit.com/r/ObsidianMD/comments/v7tts9/change_color_of_equations_in_obsidian/)입니다
이것은 내부 링크 [[00. Build a Theme]]입니다.
이것도 내부 링크[[00. Build a Theme#사용한 플러그인]]입니다.
이것은 [[unresolved Link]]입니다.

이것은 #Tag 입니다

> 이것은 blockquote입니다

>[!callout]
>이것은 콜아웃입니다

> [!note]
> > [!info]
> > > [!todo]
> > > 중첩 콜아웃입니다

> [!abstract]
> > [!tip]
> 

> [!success]
> 

> [!question]
> > [!failure]
> >> [!danger]
> >>> [!bug]
> 


# heading1
## heading2
### heading3
#### heading4
##### heading5
###### heading6
<small>이것은 캡션입니다.</small>

| first name | last name |
| ---------- | --------- |
| 이것은        | 테이블입니다.   |
첨자와 각주^[이것은 footnote입니다]