---
title: Create astro, Git push
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-10-03
tags:
  - web
  - git
  - astro
overview: false
projectId: buy-a-domain
sequence: 2
---
주의사항
- 중복된 명령하지 않도록 조심
- 현재 디렉터리 잘 보기

1. create astro
	- `npm create astro@latest`
2. git commit
	- `git add .`
	- `git commit -m “Initial Commit”`
3. remote repository에 프로젝트 push하기
	- 깃헙에 repo 만들기
	- `git remote add origin <repository_url>`
	- `git push -u origin main`