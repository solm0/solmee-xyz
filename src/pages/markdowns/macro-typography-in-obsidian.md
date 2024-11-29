---
aliases:
  - Macro Typography in Obsidian
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-01
tags:
  - web
  - web_typography
  - obsidian
overview: false
projectId: obsidian-theme-agate
sequence: 4
---

옵시디언 앱 인터페이스의 단주, 첨자, 각주, 문장부호를 꾸며보자.

## formatting 단축키 커스터마이징
1.  기본 Syntax, Hotkey 이용하기
2.  `Settings`>`Hotkeys`에서 단축키 생성, 편집하기
3. [[obsidian-plugins-i-used|사용한 플러그인들]]을 이용해 HTML 태그로 감싸주는 단축키 생성, 편집하기
4. HTML태그 안에 태그가 들어가는 더 복잡한 컴포넌트도 미리 정의해놨다가 쓰고 싶은데...  
-> 그건 리액트같은걸 써야지...

> 나중에 내린 결론: 마크다운 파일에는 옵시디언이 확장한 마크다운 신택스 쓰지 말고 [basic syntax](https://www.markdownguide.org/basic-syntax/)로만 쓰는게 낫다. 웹사이트를 직접 만들거라면 나중에 얼마든지 원하는 방법으로 파싱할 수 있으니까...

## formatting 스타일 커스터마이징 - CSS 사용
이것은 **bold**입니다.  
이것은 *italic*입니다.  
~~이것은 strike-through입니다.~~  
<u>이것은 underline입니다.</u>  
이것은 `inline code`입니다.  
```c++
// code block
for (int i = 0; i < 3; i++){}
```
----

- [ ] empty checkbox
- [x] checkbox
1. ordered list
2. nested
	1. ordered
		1. list
- unordered list
- nested
  - unordered
    - list

이것은 [외부 링크](https://www.reddit.com/r/ObsidianMD/comments/v7tts9/change_color_of_equations_in_obsidian/)입니다  

> 이것은 blockquote입니다


# heading1
## heading2
### heading3
#### heading4
##### heading5
###### heading6
<small>이것은 small입니다.</small>

| first name | last name |
| ---------- | --------- |
| 이것은        | 테이블입니다.   |
