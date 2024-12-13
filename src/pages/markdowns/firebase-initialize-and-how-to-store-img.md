---
aliases:
  - Firebase Realtime Database 초기화하고 이미지 경로 저장하기
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
Firebase를 사용해보자.
## Getting Started
1. Firebase Console에서 Firebase project를 만들고 app을 등록한다.
2. SDK 설치
	1. react app에 `npm install firebase`로 firebase를 설치한다.
	2. firebase를 initialize하고 firebase app object를 생성한다.  
		`import { initializeApp } from "firebase/app";`  
		`const firebaseConfig = { … };`  
		`const app = initializeApp(firebaseConfig);`
	3. 필요한 firebase 서비스를 import한다.
		- Realtime Database for Web

그럼 이제 Firebase Console에서 데이터베이스 직접 수정하거나 읽기/쓰기 관련 Rules 명시한 뒤에 내 웹사이트 코드에다가 데이터 읽고 쓰는 코드를 작성하면 된다.

## 이미지 포함하기
Firebase Storage라는 서비스가 있다고 해서 그것을 쓰려고 했으나, 그건 내 이미지를 저장하는데 관련된 게 아니라 사용자가 생성한 이미지를 업로드하고 공유하기 위한 서비스라는 것을 알게 되었다.

단순히 이미지를 데이터베이스에 저장하고 보여주기만 하면 된다면 이런 방법이 있다.
- 이미지를 Cloudinary같은 외부 서비스에 호스팅하고 URL을 db에 저장
- 이미지를 프로젝트 파일에 직접 포함

나는 홈에 나타낼 썸네일용이라 이미지가 많지 않아서 후자를 택했다.
1. 이미지를 `/public`에 넣기
2. 데이터베이스에 이미지의 경로 저장하기
3. 이미지를 react 컴포넌트에서 불러오기