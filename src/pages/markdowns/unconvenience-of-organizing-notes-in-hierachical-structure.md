---
aliases:
  - prescribe된 계층적 구조로 노트를 정리할 때 불편한 점
layout: ../../layouts/JournalsLayout.astro
type: journals
date: 2025-01-02
tags:
  - note_taking
  - linguistics
---
## 명령하는 규칙? 설명하는 규칙?
언어의 문법을 연구하는 관점에 prescriptive grammar와 descriptive grammar 두 가지가 있다. 전자는 문법은 미리 규정된 규칙들의 집합이며 그것에 따라 어떤 문장이 옳거나 틀렸는지 가를 수 있다는 관점이다. 후자는 화자들이 구사하는 모든 문장들을 (불완전하게나마) 설명하는 규칙들의 집합이 문법이라는 관점이다. 나는 말하자면 prescriptive grammar와 같은 연역적인 방법으로 노트들을 정리하고 있었다.

## prescribe된 계층적 구조로 노트를 정리할 때 불편한 점
내가 2024년 1학기까지 1년 반 동안 노션을 사용할 때 강의 필기나 프로젝트 진행일지들을 정리하기 위해 prescribe해서 사용하고 있었던 구조는 폴더 안에 폴더를 넣는 계층적 구조였다. 계층적이라는 것 때문에 발생하는 불편한 점들이 있었다.

먼저 예전에 작성한 노트를 찾는 것이 불편할 때가 있다. 예전에 프로젝트에서 Firebase를 초기화한 과정을 써놨던 것 같은데 노트가 어디에 있는지 찾는 상황을 가정해 보자. 검색을 할 수도 있지만 검색은 생각보다 귀찮고 원하는대로 검색되지 않으며 찾아진 노트를 일일히 눌러 확인하는 시간도 길다. 평소에는 이렇게 찾았다. 먼저 Firebase를 무슨 프로젝트에서 했었는지 떠올리고, 그 프로젝트를 어떤 학기에 했었는지 떠올린다. 그 학기 폴더에 들어간다. (폴더를 학기별로 정리했던 이유는 편리성 때문이다. 보통 한 학기에 자주 쓰는 파일은 정해져 있기 때문이다.) 그 프로젝트 폴더로 들어간다. 그 안에 만들어놓은 폴더와 파일을 뒤지면서 내가 원하는 정보를 찾는다. 이런 상황이 정말 자주 일어났는데 그때마다 번거롭다고 느꼈다.

두 번째 문제점은 새로운 노트를 만들 때 일어난다. 새로운 노트를 만들 때 그 노트를 어느 디렉토리에 위치시킬지 생각해야 한다. 노트가 알맞은 위치에 있게 하는 것은 빨리 찾기 위해서 중요하다. 노트를 알맞은 위치로 보내려면 노트가 속한 프로젝트, 속한 주제, 목적, 완성도 등이 고려될 수 있다. 보통은 프로젝트를 기준으로 분류하고 완성도나 세부적인 목적은 메타데이터에 태그 같은 걸로 표기하지만 모아 보는 게 불편해서 사실상 분류기준은 하나밖에 설정할 수 없는 거나 마찬가지다. 그래서 더 좋은 기준을 찾기 위해 구조를 자주 바꾸게 되고, 생각이 복잡해질수록 노트를 만들 때 위치를 고민하는 시간도 길어진다.

세 번째는 노트를 그렇게 하나의 기준으로만 분류하면 꼭 모순이 생긴다는 것이다. 생각과 달리 모든 노트가 트리 구조의 한 부분에 명확하게 속하지 않는다. 문장 형성 규칙을 트리 구조로 정의할 때도 언어의 무한성 때문에 재귀하는 노드가 생기듯이 부모 요소가 자식요소에 속해야 할 때가 있다. 그리고 서로 다른 브랜치에 속해 있는 두 노트의 연관성이 각 노트의 형제 노트들과의 연관성보다 더 강할 때가 있다. 이것은 내가 서로 다른 두 가지 이상의 분야의 전공수업을 들으면서 경험하게 된 것이다. 컴공과 언어학 등 서로 다른 분야를 동시에 공부하다 보면 겹치는 것이 많고 자연스럽게 연결지어 생각하게 되는데 과목별로 상위 구조를 나눌 경우 이 연결점에서 나온 노트를 어디다 포함시켜야 할지 난감해진다.

마지막으로, 상위 분류가 그 아래의 모든 노트들에 필요 이상으로 큰 영향을 미친다. 나의 경우에는 최상위 분류의 기준이 학기라서 의도치 않게 모든 노트들이 시간이라는 한 선 위에 정렬되어 버렸고, 그 학기가 지나면 다시 열어보지 않는 박물관 또는 타임 캡슐이 되어 버렸다.

## 어떻게 해결?
- 예전에 작성한 노트를 찾는 것이 불편하다 -> 새로운 내비게이션 방법을 찾는다.
- 새로운 노트를 만들 때 그 노트를 어느 디렉토리에 위치시킬지 생각해야 한다 -> 미리 규정되는, 명령하는 규칙을 없애고 그 대신 나중에 도출되는, 설명하는 규칙을 (뽑아낼 시스템을) 만든다.
- 노트를 그렇게 하나의 기준으로만 분류하면 모순이 생긴다 -> 필요에 따라 다양한 모습으로 분류방식을 바꿀 수 있게 한다.
- 상위 분류인 '시간'이 그 아래의 모든 노트들에 필요 이상으로 큰 영향을 미친다 -> [[defying-timeline|시간의 흐름에 저항하려면 시간의 좌표계를 제거하면 된다]]