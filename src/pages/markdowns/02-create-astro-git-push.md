---
title: "02. Create astro, Git push"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-10-03
tags: ["web"]
thumbnail:
	url:
	alt:
dashboard: false
---
도메인 연결해놓은 vercel 프로젝트는 일단 제쳐두고, 개발할때는 github repo 따로 파서 로컬호스팅하면서 해야겠다.

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