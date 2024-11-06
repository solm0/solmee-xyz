---
title: "Setting up the Markdown Pipeline"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-08-07
tags: ["web"]

overview: false
projectId: "solmee-xyz"
sequence: 2
---
[nicole van der hoeven의 영상](https://youtu.be/6s6DT1yN4dw?t=128)에서 옵시디언 노트의 퍼블리시하는 파이프라인을 보았다.

## How to publish [plain text](https://en.wikipedia.org/wiki/Plain_text) notes online
1. Obsidian: markdown 생성
2. __ __ : markdown -> HTML (SSG)
3. Vercel: HTML 호스팅

1단계랑 3단계는 이전에 쓰던 대로 한다고 치고 2단계 SSG 역할에서 Digital Garden을 대체할 도구를 찾아야 한다.

## How to publish Obisidian notes online
무려 옵시디언 ceo가 댓글을 단 [이 레딧 글](https://www.reddit.com/r/ObsidianMD/comments/16e5jek/best_way_to_selfhost_obsidian_publish/)에서 옵시디언과 함께 사용할 수 있는 SSG의 종류를 확인할 수 있다.

옵시디언을 염두에 두고 만들어졌는가?
- Y: Obsidian Publish, Digital Garden, Quartz, …
	- 사용하지 않을 것이다
- N: Jekyll, Hugo, Astro, Eleventy, …
	1. 배포 과정이 좀 더 번거롭다
	2. [그래프 뷰](https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Core+Plugins/Graph+view)를 만들어주지 않는다

## How to manually generate Graph view
나는 그래프 뷰가 꼭 필요하다. 왜냐면
1. 시각적으로 매력적이다
2. 노트들 간의 관계(디렉토리 구조 말고, 하이퍼텍스트로 연결되어 있는 숨겨진 관계 말이다)가 시각적으로 드러나지 않는 것을 보완해줄 방법이다.

그래프를 직접 만들어줄 방법으로 [d3.js](https://d3js.org/what-is-d3)를 발견했다. 데이터를 시각화하는 자바스크립트 라이브러리이다. 근데 그건 아무래도 곁다리니까 일단 제쳐두고 얼른 2단계 SSG를 채우자.