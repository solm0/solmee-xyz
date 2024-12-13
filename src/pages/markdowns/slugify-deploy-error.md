---
aliases:
  - 파일제목에 문자 잘못 쓰면 배포할때 에러가 난다.
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-05
tags:
  - web
  - error
  - vercel
overview: false
projectId: obsidian-digital-garden
sequence: 4
---
싱글페이지를 퍼블리시한 이후 Publication Center에서 일괄 퍼블리시 하려하면 자꾸 `11ty Original error stack trace: (Repeated output has been truncated…)` 에러 뜨면서 안됐다.

폴더 이름이 한글이어서 그랬던 것이다.

Obsidian Digital Garden 설정에 slugify가 체크되어 있는데 디렉토리에 영문이 아닌 문자가 들어가면 안된다는 경고문구가 쓰여 있었다. 그래서 slugify를 해제했더니 해결되었다.

(이때 문제 원인을 몰라서 파일명 조금씩 바꾸면서 계속 시도했더니 Vercel 하루 deploy 한도가 100번이라는 것을 알게 되었다.)