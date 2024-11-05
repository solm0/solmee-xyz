---
title: "04. DBMS 고르기"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-07
tags: ["web"]
thumbnail:
	url:
	alt:
dashboard: false
---

카드 구성 데이터를 동적으로 가져와 렌더링하기 위해 데이터를 저장하고 있을 DBMS가 필요하다. 이때 적절한 DBMS의 요건은 다음과 같다.
- 데이터 편집이 간편할 것
- key-value 형식일 것
- 빨리 배울 수 있을 것

RDBMS는 탈락이다. 왜냐면 key-value에 접근이 매우 편해보이는 json을 써보고 싶기 때문이다. 이제 다음으로 좁혀진다.
- firebase
- mongodb

## Firebase
Firebase를 선택하기로 했다.
- realtime database
	지금 프로젝트에는 크게 필요없는 기능인데 기자재실웹 만들때 이게 안돼서 장바구니기능에 로컬스토리지 썼었지… 그거야말로 firebase로 바꿔야겠다.
- Firebase Authentication, Firebase Storage(외부이미지 호스팅서비스) 등과 쉽게 통합
	→ 오 좋음.
- 로컬 캐시를 이용해서 오프라인이 돼도 작동함.
	→ Realtime Database경우 웹에서는 안됨. 근데 상관없음
- 데이터 json으로 저장
	→ 좋음.

firebase에는 두 가지 데이터 모델이 있다.
- Cloud Firestore: 데이터를 문서의 collection으로 저장한다
- Realtime Database: 데이터를 하나의 문서로 저장한다
	난 아주 단순한 데이터를 저장할 거니까 이걸로 해야겠다.

Realtime Database 제한
- 구조 복잡한거 어려움
- 웹에서 오프라인작동 지원안함
- Query:
	- sort와 filter 동시에 못함
	- deep(하위요소 다 반환함)
	- index불필요
- write, transaction 이런건 생략함. 난 필터링만 필요하니까

firebase로 어떻게 데이터와 이미지를 갖다쓰고 필터링할 수 있는지 알아보자. [[05-firebase-learn]]