---
title: "제목에 문자 주의"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-05
tags: ["web", "error", "vercel"]
overview: false
projectId: "obsidian-digital-garden"
sequence: 3
---
싱글페이지를 퍼블리시한 이후 Publication Center에서 일괄 퍼블리시 하려하면 자꾸 `11ty Original error stack trace: (Repeated output has been truncated…)` 에러 뜨면서 안됐다.

이런 것들도 문제를 해결하지 못했다.
- frontmatter에 개별 퍼마링크 달기
- 노트 삭제하고 다시 생성하기

문제가 뭔지 모르겠어서 노트 추가했다 삭제했다 폴더에 넣었다 뺐다 링크 걸었다 삭제했다 하면서 계속 퍼블리시했더니 하루에 100번 넘어서 그런지 Vercel이 막혔다... ... . 그래서 강제 휴식시간을 가졌다. 휴식하는 동안 생각해보니, 폴더 이름이 한글이어서 그랬던 것이다.

Obsidian Digital Garden 설정에 slugify가 체크되어 있는데 디렉토리에 영문이 아닌 문자가 들어가면 안된다는 경고문구가 쓰여 있었다.

그래서 slugify를 해제했더니 해결되었다.

‘?’같은 특수문자도 안된다.