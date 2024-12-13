---
aliases:
  - Obsidian 테마 마이크로 타이포그래피
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-01
tags:
  - web
  - obsidian
  - web_typography
overview: false
projectId: obsidian-theme-agate
sequence: 3
---

옵시디언 인터페이스의 본문을 조판하자.  

‘빽빽한 본문 오래 읽히기’의 대가라고 할 수 있는 오래된 공학 전공서적들의 본문조판을 참고했다.
-  산세리프/세리프 각각 1개
-  regular/bold, normal/italic 쓰임새 구분
-  문자 정렬 방식과 들여쓰기로 만들어지는 규칙적인 여백을 통해 위계 구분

## 서체 선정
`font-family: 라틴서체, 한글서체, default` 순서대로 나열하면 라틴서체에 없는 글리프를 그 다음 한글서체가 때우는 식으로 섞어짜기가 된다.

산세리프 서체는 라틴과 한글 모두 커버하는 Pretendard를, 라틴 세리프 서체는 x-height가 높고 contrast가 크지 않은 ITC Slimbach Std를, 한글 세리프 서체는 ITC Slimbach Std와 잘 어울리는 Noto Serif KR을 선택했다.

## 타입세팅
제목
|  | css Variable               | Value                 |
| -------- | -------------------------- | --------------------- |
| 서체       | --inline-title-font        | ITC Slimbach Std Book |
| 크기       | --inline-title-size        | 2.3em                 |
| 행송       | --inline-title-line-height | 1.2                   |
| 자간       | letter-spacing             | -0.015em              |

소제목
|  | css Variable     | Value           |
| -------- | ---------------- | --------------- |
| 서체       | --hX-font        | Pretendard Bold |
| 크기       | --hX-size        | 2em-1em         |
| 행송       | --hX-line-height | 1.2-1.5         |
| 자간       | letter-spacing   | -0.015em-0.01em |

본문
|  | css Variable       | Value                |
| -------- | ------------------ | -------------------- |
| 서체       | --font-text-theme  | Noto Serif KR medium |
| 크기       | font-text-size     | 16px                 |
| 행송       | line-height-normal | 1.5                  |
| 자간       | -                  | -                    |

공통
|  | css Variable      | Value         |
| -------- | ----------------- | ------------- |
| 문자정렬     | direction         | ltr           |
| 하이픈      | white-space       | keep-all      |
| 최대 글줄길이  | --file-line-width | 630px(=37em)  |
| 단락구분     | -                 | 한줄(의 절반정도)비우기 |



## 웹폰트 사용하기
[@import](https://developer.mozilla.org/ko/docs/Web/CSS/@import)문은 옵시디언에서 안 된다. 어도비 웹폰트 url은 .css로 끝나는 @import 형식인데 그 url을 크롬 주소창에 쳐 보면 [@font-face](https://developer.mozilla.org/ko/docs/Web/CSS/@font-face)들이 나오는데 그걸 그대로 가져오면 된다. ttf otf 안되고 woff2나 Base64만 된다.

## 섞어짜기 문제
 ITC Slimbach Std가 한글에 비해 작아서 크기 좀 키우려고 했는데 서로 다른 폰트/언어에 서로 다른 font-size 적용이 안된다. javascript로는 가능할텐데 옵시디언 테마 파일에 javascript를 포함하는 건 안될 듯하다.
 
 두 글꼴 섞어서 섞어짜기 웹폰트 만드는 프로그램 없나? -> multilingual.js라는 라이브러리가 있는 것 같은데 나중에 사용해보기로

## 들여짜기 문제
이번에는 들여짜기에서 막혔다. 옵시디언에는 source view와 reading view 두 가지가 있는데 둘의 html태그나 구조가 다르다. 그래서 둘의 외관을 통일하기 위해서는 (가능하면 :root나 body같이 상위 요소에 써야겠지만 그러지 않을 경우에는) 두 개의 요소를 동시에 선택해야 한다. 근데 너무 복잡해서 선택하기가 어렵다.

> 나중에 깨달은 거지만 선택자를 가능하면 단순하게 하는 게 유지보수에는 물론 디자인에도 좋다. 괴랄한 선택자를 써서 아주 특정한 요소를 선택해 스타일링하는 게 최선인 경우는 별로 없다.

내가 하고 싶은건 한줄비우기 다음 첫 단락에서는 들여짜기를 하지 않는다는 간단한 규칙이었는데 이것 역시 자바스크립트로는 됐겠지만 테마파일이라 CSS만 써야해서 못했다. 사실 CSS로도 할 수 있을 것 같긴 한데... 나중에 다시 해보자...

html과 마크다운 사이 엄청난 간극이 있다. 그 중 하나는 enter를 쳤을때 source view에서는 새로운 단락`<div>`가 만들어지는데 reading view에서는 `<br>` 친걸로 간주하고 여전히 같은 `<p>` 안이다. 그래서 들여쓰기가 생겨야 할 곳에 생기지 않는다. reading view에서는 enter를 두 번은 쳐야 새로운 `<div>`가 만들어진다.