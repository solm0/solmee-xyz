---
title: Dynamic Website Hosting with Vercel
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-07
tags:
  - web
overview: false
projectId: obsidian-digital-garden
sequence: 9
---
## Create React App and deploy to Vercel
Git repository를 생성하고 거기에 push할 때마다 Vercel에 자동 deploy될 것이다. [여기](https://vercel.com/guides/deploying-react-with-vercel#start-from-a-template)에서 Git repository 생성과 동시에 create-react-app을 할 수 있다. 그리고 그 리포지토리를 깃헙데스크탑에서 클론해 vscode로 작성하면 된다.

>근데 평소 하던대로 npm start를 하니 `react-scripts: command not found` 라면서 안됐고 Vercel deploy도 안됐다. `Error: Command "pnpm run build"`

pnpm이라는 npm과 비슷한 패키지 매니저를 설치해야 하는 거였다.  
`npm install -g pnpm`  
그리고 다시 node_modules 폴더를 설치하고 빌드를 시도했다.  
`pnpm install`  
`pnpm run build`  
그 후 start 스크립트를 실행했다.  
`pnpm start`

이제 start도 되고 Vercel deploy도 된다.

(엥 근데 이제 npm start도 되네? npm/pnpm/yarn 헷갈려..)

## Vercel CLI
Vercel command-line interface는 명령줄로 프로젝트를 관리할 수 있게 한다.

> With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system, enabling you to [retrieve logs](https://vercel.com/docs/cli/logs), manage [certificates](https://vercel.com/docs/cli/certs), replicate your deployment environment [locally](https://vercel.com/docs/cli/dev), manage Domain Name System (DNS) [records](https://vercel.com/docs/cli/dns), and more.

설치 `npm i -g vercel`
업데이트 `npm i -g vercel@latest`

얘네는 모르겠어서 일단 링크만 첨부해 둔다.
[Using in a CI/CD environment](https://vercel.com/docs/cli#using-in-a-ci/cd-environment)
[Available Commands](https://vercel.com/docs/cli#available-commands)