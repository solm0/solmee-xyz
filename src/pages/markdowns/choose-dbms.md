---
alias: DBMS 고르기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-07
tags:
  - web
  - firebase
overview: false
projectId: obsidian-digital-garden
sequence: 7
---

DBMS는 데이터를 저장하고 있다가 뽑아 쓸 수 있게 해주는 자판기다. 카드를 구성할 데이터를 저장하고 있을 DBMS가 필요하다.

필요한 DBMS의 조건은 다음과 같다.
- 데이터 편집이 간편할 것
- key-value 형식일 것
- 빨리 배울 수 있을 것

key-value에 단순해 보이는 json을 써보고 싶다. 그럼 RDBMS는 제외하고 다음으로 좁혀진다.
- firebase
- mongoDB

## Firebase
Firebase를 선택하기로 했다.
- realtime database  
- Firebase Authentication, Firebase Storage(외부이미지 호스팅서비스) 등과 쉽게 통합
- 데이터 json으로 저장

firebase에는 두 가지 데이터 모델이 있다.
- Cloud Firestore: 데이터를 문서의 collection으로 저장한다
- Realtime Database: 데이터를 하나의 문서로 저장한다  
	난 아주 단순한 데이터를 저장할 거니까 이걸로 해야겠다.

Realtime Database의 제한
- 구조 복잡한거 어려움
- 웹에서 오프라인 작동 지원안함
- Query
	- sort와 filter 동시에 못함
	- deep(하위요소 다 반환함)
	- index불필요

내가 하려는 것에는 이정도면 적당해 보인다.

이제 firebase로 어떻게 데이터와 이미지를 갖다쓰고 필터링할 수 있는지 알아보자.