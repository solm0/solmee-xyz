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
Obsidian으로 작성한 글은 Markdown 파일로 저장된다. 이것을 HTML로 바꾸면 웹사이트가 된다. Markdown을 HTML로 바꿔주는 것이 Static Site Generator(SSG)이다.

[How to publish your notes for free with Quartz](https://youtu.be/6s6DT1yN4dw?t=128) 이 영상에서는 SSG로 Quartz를 사용하고 있다.
1. Obsidian: Markdown 생성, 편집, 삭제 -> *Content Management System(CMS)*
2. ~Quartz~: build할때 Markdown을 HTML로 변환 -> *Static Site Generator*
3. Vercel: 만든 웹사이트를 배포 -> *Hosting & Deployment*

나도 이전 웹사이트에서 Obsidian과 Vercel을 쓰고 있었고 Digital Garden이 SSG의 역할을 해주고 있었다. 이것의 대체품을 찾아야 한다.

## 무슨 SSG를 써야 하지?
 [best way to selfhost obsidian publish](https://www.reddit.com/r/ObsidianMD/comments/16e5jek/best_way_to_selfhost_obsidian_publish/)

옵시디언을 염두에 두고 만들어졌는가?
- Y: Obsidian Publish, Obsidian Digital Garden, Quartz, …
    - 장점
	    - 옵시디언에서 쓰던 기능들([그래프 뷰](https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Core+Plugins/Graph+view) 등)이 대부분 구현되어 있다
	- 장점이면서 단점
		- command line 만질 필요 없이 옵시디언 앱에서 대부분 해결된다. (하지만 난 이제 옵시디언을 벗어나고 싶다)
	- 단점
		- 디자인이 자유롭지 않다
- N: Jekyll, Hugo, Astro, Eleventy, …
	- 장점
		- 마크다운 파일이 주인공이다. 옵시디언은 이제 깔끔하게 CMS 역할만 하면 된다.
	- 단점
		- 그래프 뷰를 만들어주지 않는다

## 기타

### CMS로 Obsidian을 쓰는 이유
- UI
	- 일단 CMS가 없으면 글을 Visual Studio Code에다가 써야 한다. 시력이 위험해질 수 있다. 그에 비해 Obsidian은 수많은 테마들 중 선택하거나 CSS를 사용해 UI를 사용하기 편하게 만들 수 있다.
- 내부링크 생성
	- 대괄호 2개를 사용해 내부링크를 빠르게 만들 수 있다.
	- 타이핑하면 노트가 자동으로 떠서 일일히 검색하지 않아도 된다.
	- 자동으로 링크에 alias가 달아진다.
- 내부링크 자동 업데이트
	- 파일이름(=slug)이 변경될 때 내부링크가 깨지지 않도록 자동으로 모든 내부링크를 업데이트해 준다.
	- 근데 파일이름만 업데이트돼서 alias는 수작업해야 한다.

### 그래프 수작업(?)하기  
나는 그래프가 꼭 필요하다. 왜냐면
1. 예쁘다.
2. 노트들 간의 관계(하이퍼링크로 연결되어 있는 숨겨진 관계)가 시각적으로 드러나지 않는 것을 보완할 방법이다.

그래프 만드는 라이브러리는 d3.js, cytoscape.js, react-force-graph 등 여러가지가 있다.