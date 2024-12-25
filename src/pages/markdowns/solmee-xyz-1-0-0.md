---
aliases:
  - "solmee.xyz 1.0.0: 개인웹사이트 만들기"
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-11-06
tags:
  - web
  - obsidian
  - astro
  - react
thumbnail: /solmee-xyz-1.png
overview: true
finished: false
projectId: solmee-xyz
sequence: 0
---
## Overview
당신이 이 글을 보고 있는 웹사이트의 첫 번째 버전인 solmee.xyz 1.0.0의 기획과 개발 과정을 다루는 문서이다.

이 프로젝트의 목표는 기록을 생성하고, 기록한 것을 나중에 사용할때 낭비되는 시간을 줄이는 것이다. 이 프로젝트가 목표를 달성했는지는 이 문서를 작성하고 있는 시점에 알 수 없다. 내가 1년 후에도 이걸 사용하고 있다면 실험은 성공했다고 볼 수 있을 것 같다.

## Process
###  동기
번아웃으로 기말고사 공부를 세상 끝까지 미루던 24년 6월, 나는 공부를 하는 대신 내가 왜 공부를 하지 않는지에 대해 생각하는 것을 택했다. 비효율적인 기록 저장 시스템이 문제라고 생각했다.
- [[continuous-text|줄글의 존재 이유는 문법요소에 있고 줄글의 단점은 하이퍼텍스트가 보완한다]]
- [[defying-timeline|시간의 흐름에 저항하려면 시간의 좌표계를 제거하면 된다]]
- [[structure-by-induction-not-by-deduction|연역이 아닌 귀납으로 구조를 형성하자]]

시간 순서가 아닌 노트 간의 연결을 통해 구조가 귀납적으로 형성되는 도구인 Obsidian을 쓰게 되었다. 노트들은 여기저기 발산되어 있는데 막상 정리된 뭔가를 하려 하면 밑바닥부터 쌓아올려야 하는 막막함에 좌절하고 있었던 나에게, 글쓰기는 선형적이지 않으며 지금까지 해놓은 생각을 엮는 것일 뿐이라는 Zettelkasten의 가르침이 와 닿았다.

그러던 중 기록한 것을 웹사이트로 만들어야겠다는 생각에 도달했다. 그래서 [[obsidian-digital-garden|플러그인을 사용해서 만들었었는데]], 이제 [[why-i-left-digital-garden|플러그인을 사용하지 않고 직접 다시 만들기로 했다.]]

### 기획
웹사이트에 들어갈 컨텐츠를 정했다. 내가 평소에 생성하는 노트들의 종류를 돌아보고 그 중 Digital Garden, 즉 공유된 지식 저장소라는 공간의 성격에 부합하는 것을 걸러서 세 가지로 분류했다: 일반 메모, 작업과정기록, 그리고 포트폴리오.
- 이 웹사이트에 들어가지 않는 노트들은 다음과 같다.
	- 아직 시작하지 않은 프로젝트의 엉성한 기획안, 실시간으로 업데이트되는 프로젝트의 대시보드는 UpNote와 기본 메모장 어플을 사용한다.
	- 개인적인 일기는 [[journal-shrine-development|Journal Shrine]]으로 간다.

[어떤 Digital Garden](https://hermitage.utsob.me/)은 노트의 성숙된 정도에 따라 Seedlings - Saplings - Trees라는 상징적인 이름을 붙여서 구분하기도 했다. 나의 분류도 어떻게 보면 연속성을 갖긴 한다. 일반 메모들이 프로젝트의 씨앗이 되고, 프로젝트를 진행하면 그 결과로 포트폴리오가 나오기 때문이다. 하지만 그런 연속성보다는 각 타입들끼리의 연관성이 더 강하기 때문에 Journal, Logbooks, Works라는 좀더 평범하고 직관적으로 이해되는 이름을 붙였다.

개발을 위한 계획도 함께 했다. 먼저 [[publish-markdown-files|마크다운 파일을 배포]]하기 위한 뼈대를 잡았다. 그리고 [[ssg-framework-selection|SSG 프레임워크를 선택]]했다. [[porkbun-cloudflaredns-vercel|도메인]]을 구매하고 적용했다.

### 개발
#### Major Features
#### Minor Features

### 마무리
documenting
- 또 고치겠지만 일단 끊어주고 간다는 의의에서..
- 목적은 나중에 내가 웹사이트를 갈아엎거나 해서 필요할 때 볼 사용설명서를 만드는 것이다.
- 개발과정을 기록하는 과정에 대해. 개발하는 중에는 메모장과 업노트를 사용했다. 이 작업일지를 적을때는 전시할때만든 포스터와 내 깃헙 커밋기록도 참고했다. 간단하게 유지하기 위해 메모장과 업노트에 남긴 것들은 모두 삭제할 예정이다.
- 기획, 디자인, 개발 파트를 명확하게 나누어야 할까? 아니, 그게 가능하긴 할까? 개발하는 와중에도 기획을 하고 디자인을 했는데.

## Reference
- 디자인 영감
- digital garden
- indieweb
- [자신을 위해 쓰기](https://matthiasott.com/notes/you-a-million-times)

## Future Plans
아직 타이포그래피 체계가 부족한 것 같다. 책 한 권을 엮어내는 데도 많은 규칙이 필요하다. 내가 이 시스템을 사용하면 사용할수록 사용 양상은 복잡해져 갈 텐데, 그 내용의 복잡함에 맞는 디자인 시스템이 필요하다. 지금보다 더욱 확장되어야 한다. 위키 사이트들이 어떻게 콘텐츠들을 정리하고 접근을 돕고 있는지 참고하면 좋을 것 같다.

## Thoughts
- [[time-to-enter-orbit|궤도에 진입하기까지의 과정을 감내해야만 한다]]
- [[i-and-chatgpt|나는 chatGPT의 클라이언트다]]