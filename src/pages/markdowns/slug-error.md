---
title: "제목에 문자 주의"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-05
tags:
  - web
  - error
overview: false
projectId: obsidian-digital-garden
sequence: 3
---
> 싱글페이지를 퍼블리시한 이후 Publication Center에서 일괄 퍼블리시 하려하면 자꾸 `11ty Original error stack trace: (Repeated output has been truncated…)` 에러 뜨면서 안됐다.

챗지피티는 계속 프로퍼티에 개별 퍼마링크 달라고 하는데 그래도 안됨. 찾아봤더니 노트를 삭제하고 다시 하라고 한다. 그래서 하나만 남겨놓고 한두개씩 다시 했더니 됨.

잘 하다가 갑자기 또 에러뜸. 기준이 뭔지 도대체가 모르겠어서 노트 추가했다 삭제했다 폴더에 넣었다 뺐다 링크 걸었다 삭제했다 하면서 계속 퍼블리시했더니 하루에 100번 넘어서그런지 Vercel이 막힘;;;;;

하긴 하루에 퍼블리시 100번한건 오늘이 처음이긴해..
근데 그럼 에러메세지 좀 친절하게 적어주던가….

폴더 이름이 한글이어서 그랬던 것이다.
> Digital Garden 설정에 slugify(디렉토리에 영문이 아닌 문자가 들어가면 안된다는 경고문구가 쓰여 있다)가 체크되어 있는데 이것 때문인 듯 하다.

slugify를 해제했더니 해결되었다.

특수문자도 안된다. ‘?’같은 허용되지 않은 특수문자가 제목에 들어가도 에러가 난다.