---
aliases:
  - Digital Garden 웹사이트에 동적요소를 넣을 수 있을까?
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-06
tags:
  - web
overview: false
projectId: obsidian-digital-garden
sequence: 5
---
## Digital Garden 웹사이트에 동적 요소 넣기 - iframe?
Digital Garden 플러그인만으로도 무난한 블로그는 만들 수 있었지만 나는 플러그인에 없는 동적 기능을 웹사이트에 넣고 싶었다.

노트를 태그별로 필터링하고 싶었다. 사용자가 태그 버튼을 클릭하면 해당 태그를 가진 노트의 정보(썸네일, 제목, 태그)와 링크를 카드 컴포넌트에 담아서 보여주는 것이다.

그럴려면 정보를 어딘가에 담고 있다가 클라이언트의 입력에 따라 렌더할지말지 정해야 한다.
-> 정보를 담을 DBMS와 동적렌더링을 관리할 React가 필요하다.

근데 이미 플러그인으로 완성된 이 웹사이트에 대체 React를 어떻게 집어넣어야 할까?

한 가지 방법은 iframe이었다. 옵시디언에 iframe을 삽입할 수 있으니까, 동적 프로그램은 따로 만들어서 따로 배포한 다음에 디지털가든의 ‘홈’에 해당하는 노트에 iframe으로 심는 거다. 지저분할 것 같지만 시도는 해보기로 했다.
