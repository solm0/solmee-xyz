---
aliases:
  - Vercel로 동적 웹 호스팅하기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-07
tags:
  - web
  - error
  - vercel
overview: false
projectId: obsidian-digital-garden
sequence: 8
---
지금까지 내가 배포하는데 써왔던 무료 Github Pages는 정적 웹사이트만 호스팅해준다고 한다.  Firebase Hosting도 무료는 정적웹사이트만 되는거같다. 그럼 동적 웹은 어떻게 배포하지?

다른 동적웹사이트 무료 호스팅 서비스를 찾아보니 Netlify, Heroku, Vercel 등이 된다고 한다. 디지털가든 플러그인 웹사이트에서 이미 쓰고있었던 Vercel 쓰기로 했다.

## Create React App and deploy to Vercel
[Git repository 생성과 동시에 create-react-app](https://vercel.com/guides/deploying-react-with-vercel#start-from-a-template)을 할 수 있다.

>근데 평소 하던대로 npm start를 하니 `react-scripts: command not found` 라면서 안됐고 Vercel deploy도 안됐다. `Error: Command "pnpm run build"`

pnpm이라는 npm과 비슷한 패키지 매니저를 설치해야 하는 거였다.  
`npm install -g pnpm`  
그리고 다시 node_modules 폴더를 설치하고 빌드를 시도했다.  
`pnpm install`  
`pnpm run build`  
그 후 start 스크립트를 실행했다.  
`pnpm start`

이제 start도 되고 Vercel deploy도 된다.

엥 근데 이제 npm start도 되네?