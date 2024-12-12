---
aliases:
  - 마크다운 파일 배포하기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-08-07
tags:
  - web
  - markdown
  - obsidian
  - ssg
overview: false
projectId: solmee-xyz
sequence: 2
---
## 마크다운 파일을 배포하는 법
옵시디언으로 작성한 글은 마크다운 파일로 저장된다. 이것을 HTML로 바꾸면 웹사이트가 된다.

[How to publish your notes for free with Quartz](https://youtu.be/6s6DT1yN4dw?t=128) 이 영상에서는 Quartz를 사용해 마크다운 파일을 HTML로 변환하고 있다.

각 부분과 그 기능
1. Obsidian -> markdown 생성 *Content Management System*
2. ~Quartz~ - build할때 markdown을 HTML로 변환 *Static Site Generator*
3. Vercel - 배포

1단계랑 3단계는 이전에 쓰던 대로 한다고 치고 2단계에서 Digital Garden 플러그인을 대체할 SSG를 찾아야 한다.

## 무슨 SSG를 써야 하지?
무려 옵시디언 ceo가 댓글을 단 [이 레딧 글](https://www.reddit.com/r/ObsidianMD/comments/16e5jek/best_way_to_selfhost_obsidian_publish/)에서 옵시디언과 함께 사용할 수 있는 SSG들을 볼 수 있다.

옵시디언을 염두에 두고 만들어졌는가?
- Y: Obsidian Publish, Obsidian Digital Garden, Quartz, …
    - 옵시디언에서 쓰던 기능들([그래프 뷰](https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Core+Plugins/Graph+view) 등)이 대부분 구현되어 있다.
	- command line 만질 필요 없이 옵시디언 앱에서 대부분 해결된다. 하지만 이제 난 옵시디언을 벗어나고 싶단 말이지...
- N: Jekyll, Hugo, Astro, Eleventy, …
	- 옵시디언이 아니라 그걸로 생성한 마크다운 파일이 주인공이다. 옵시디언은 이제 텍스트편집기 역할만 하면 된다.
    	- 텍스트편집기로서 옵시디언은 vscode보다 유용하다. UI도 UI지만 내부링크나 검색같은게 쉽고 제목 바꾸면 자동으로 내부링크도 수정해주기때문
	- 그래프 뷰를 만들어주지 않는다

## 그래프 만드는 법
나는 그래프가 꼭 필요하다. 왜냐면
1. 예쁘다.
2. 노트들 간의 관계(하이퍼링크로 연결되어 있는 숨겨진 관계)가 시각적으로 드러나지 않는 것을 보완할 방법이다.

그래프 만드는 라이브러리는 d3.js, cytoscape.js, react-force-graph 등 여러가지가 있다. 근데 그건 일단 제쳐두고 얼른 SSG나 결정하자.