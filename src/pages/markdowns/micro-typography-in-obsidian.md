---
title: Micro Typography in Obsidian
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-01
tags:
  - web
  - webTypography
  - obsidian
overview: false
projectId: obsidian-theme-agate
sequence: 3
---
본문 타입세팅을 해보자.  

## 레퍼런스

- 세리프 계열:  [Glyphs Learn](https://glyphsapp.com/learn/creating-a-variable-font), [p5.js](https://archive.p5js.org/), [GDP-DA](https://postdigitalgraphicdesign.com/)
- 산세리프 계열:  [Obsidian Help](https://help.obsidian.md/Home) [Dinamo](https://abcdinamo.com/studio)

상대적으로 오래 질리지 않고 눈이 편하다고 느꼈던 Glyphs와 Obsidian 웹사이트의 본문 타입세팅을 참고하기로 했다.

그리고 ‘빽빽한 본문 오래 읽히기’의 대가라고 할 수 있는 오래된 공학 전공서적들의 본문 타입세팅도 참고했다.

가독성이 괜찮다고 생각한 전공서적들은
-  산세리프/세리프 각각 1개 폰트만 사용한다
-  regular/bold, normal/italic 폰트 패밀리를 사용한다
-  문자 정렬 방식과 들여쓰기로 만들어지는 규칙적인 여백을 통해 위계를 구분한다

## 서체 선정
`font-family: 라틴서체, 한글서체, default` 순서대로 나열하면 라틴서체에 없는 글리프를 그 다음 한글서체가 때우는 식으로 섞어짜기가 된다. 서체는 충분히 많은 글리프와 패밀리를 가지고 있고 웹폰트를 지원하는 것으로 선택한다.

산세리프 서체는 라틴과 한글 모두 커버하는 Pretendard를, 라틴 세리프 서체는 x-height가 높고 contrast가 크지 않은 ITC Slimbach Std를, 한글 세리프 서체는 ITC Slimbach Std와 잘 어울리는 Noto Serif KR을 선택했다.

## 타입세팅
밑에 2.Code 까지 하고 난 6월 2일의 최종 사양이다.

| Property | css Variable               | Value                 |
| -------- | -------------------------- | --------------------- |
| 서체       | --inline-title-font        | ITC Slimbach Std Book |
| 크기       | --inline-title-size        | 2.3em                 |
| 행송       | --inline-title-line-height | 1.2                   |
| 자간       | letter-spacing             | -0.015em              |
<small>제목</small>

| Property | css Variable     | Value           |
| -------- | ---------------- | --------------- |
| 서체       | --hX-font        | Pretendard Bold |
| 크기       | --hX-size        | 2em-1em         |
| 행송       | --hX-line-height | 1.2-1.5         |
| 자간       | letter-spacing   | -0.015em-0.01em |
<small>소제목</small>

| Property | css Variable       | Value                |
| -------- | ------------------ | -------------------- |
| 서체       | --font-text-theme  | Noto Serif KR medium |
| 크기       | font-text-size     | 16px                 |
| 행송       | line-height-normal | 1.5                  |
| 자간       | -                  | -                    |
<small>본문</small>

| Property | css Variable      | Value         |
| -------- | ----------------- | ------------- |
| 문자정렬     | direction         | ltr           |
| 하이픈      | white-space       | keep-all      |
| 최대 글줄길이  | --file-line-width | 630px(=37em)  |
| 단락구분     | -                 | 한줄(의 절반정도)비우기 |
<small>공통</small>



## 웹폰트 사용하기
[@import](https://developer.mozilla.org/ko/docs/Web/CSS/@import)문은 옵시디언에서 안 된다. 어도비 웹폰트 url은 .css로 끝나는 @import 형식인데 그 url을 크롬 주소창에 쳐 보면 [@font-face](https://developer.mozilla.org/ko/docs/Web/CSS/@font-face)들이 나오는데 그걸 그대로 가져오면 된다. ttf otf 안되고 woff2나 Base64만 된다.

## 섞어짜기 문제
 ITC Slimbach Std가 한글에 비해 작아서 크기 좀 키우려고 했는데 서로 다른 폰트/언어에 서로 다른 font-size 적용이 안된다. javascript로는 가능할텐데 옵시디언 테마 파일에 javascript를 포함하는 건 안될 듯하다. (한글폰트 좀 작게 디자인하면 안되나???? 아니면 두 글꼴 섞어서 섞어짜기 웹폰트 만드는 프로그램 만들어주면 안되나????)

결국 ITC Slimbach Std는 제목에만 쓰기로 했다.

뒤이어, Inspector를 열어서 HTML element 토글을 하나하나 열면서 탐지견처럼 CSS변수를 찾아다니고 스타일링을 하기 시작했다.


## 들여짜기 문제
이번에는 들여짜기에서 막혔다. 옵시디언에는 source view와 reading view 두 가지가 있는데 둘의 html요소와 구조가 다르다. 그래서 :root나 body같이 상위 요소에 쓰는 게 아니라면 다음과 같이 두 개의 요소를 동시에 선택해야 한다. 근데 CSS가 너무어려워서 정확히 어떤 선택자를 사용해야 내가 원하는 대로 요소가 선택되는지 모르겠다.

내가 하고 싶은건 한줄비우기 다음 첫 단락에서는 들여짜기를 하지 않는다는 간단한 규칙이었는데 컴퓨터에게 설명하긴 좀 복잡했던 것이다. 컴퓨터와 나 사이, html과 마크다운 사이 엄청난 간극이 있다. (문서 전체를 `<pre>`로 감싸면 안되나?)

그 간극 중 하나는 enter를 쳤을때 source view에서는 새로운 단락`<div>`가 만들어지는데 reading view에서는 `<br>` 친걸로 간주하고 여전히 같은 `<p>` 안이다. 그래서 들여쓰기가 생겨야 할 곳에 생기지 않는다. reading view에서는 enter를 두 번은 쳐야 새로운 `<div>`가 만들어진다. 그래서 들여짜기는 없던걸로.