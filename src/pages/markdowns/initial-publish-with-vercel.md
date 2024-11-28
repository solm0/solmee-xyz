---
title: "Initial publish with Vercel"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-04
tags: ["web", "vercel"]
overview: false
projectId: "obsidian-digital-garden"
sequence: 2
---
Digital Garden 플러그인을 옵시디언 앱에 설치한 후 다음 과정을 따르면 배포를 할 수 있다.

[Getting Started](https://dg-docs.ole.dev/getting-started/01-getting-started/)

1. GitHub, Vercel 계정 준비
2. 템플릿 repo를 Deploy to Vercel(GitHub에 복사)한다.
	→ 연동되어 리포 변경 감지하고 새로 배포함
3. Access Token을 받아 디지털가든 세팅에 붙여넣고 몇가지 설정을 한다
4. 대시 3개로 frontmatter 자리를 만들고 다음을 추가한다.
	- `dg-home` 홈이 될 페이지만 true
	- `dg-publish` 배포할 페이지는 true, 안 할 페이지는 false
5. 커맨트팔레트에 Digital Garden: Publish Single Note