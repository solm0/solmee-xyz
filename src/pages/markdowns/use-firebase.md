---
title: 뼈대짜고 더미데이터 넣음
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-08
tags:
  - web
overview: false
projectId: obsidian-digital-garden
sequence: 11
---
>firebase Realtime Database의 json데이터를 편집하는 법을 알게 되었고, 프로젝트에 데이터를 갖다쓰는 법을 알게 되었다.

아래는 미래의 나를 위해 어떻게했는지 적어놓음

## firebase.js
- firebase를 초기화한다. `initializeApp()`
- 데이터베이스에 접근한다. `getDatabase()` → export

## databaseService.js
- 접근한 데이터베이스에 `ref()` 함수 사용해 레퍼런스를 얻는다.
- `getTagData()`, `getCardData()` 함수를 정의한다. → export
	```js
	export const getTagData = async (tag) => {
		try {
			const snapshot = await get(child(dbRef, `tags`));
			if (snapshot.exists()) {
				return snapshot.val();
			} else {
				console.log("No data available");
				return null;
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	};
	```

## App.js
- `getTagData()`, `getCardData()` 함수를 사용하여 tagData와 cardData를 set한다.
	```js
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getTagData();
				setTagData(data);
			} catch(error) {
				console.error("Error fetching tag data:", error);
			}
		};
		fetchData();
	}, []);
	```
- tagData를 사용해 체크박스가 포함된 버튼을 만든다
	```jsx
	<section className={styles.tagSection}>
		{tagData && (
			Object.keys(tagData).map((key) => (
				<button key={key}>
					<label htmlFor={`checkbox-${key}`}>{tagData[key]}</label>
					<input
						type="checkbox"
						id={`checkbox-${key}`}
						onChange={() => handleChechbox(key)}
					/>
				</button>
			))
		)}
	</section>
	```
	이때 객체 내 각 속성을 매핑하기 위해 `Object.keys()` 메서드를 사용한다. 객체의 키를 배열로 가져온 후, 이 배열을 기반으로 반복 처리할 수 있다.
- cardData를 `Object.keys()`메서드를 사용해 속한 객체마다 `<Cards /> `함수형 컴포넌트를 만들고 인자로 해당 객체를 넘겨준다.
	```jsx
	<section className={styles.cardSelection}>
		{cardData && (
			Object.keys(cardData).map((key) => (
				<Cards key={key} cardData={cardData[key]} />
			))
		)}
	</section>
	```

## Cards.js
- 매개변수를 중괄호 쳐서 객체로 받는다. 받은 객체를 분해하여 각 변수에 할당한다.
	```js
	function Cards({cardData}) {
		const {type, img, name, name_link, note, note_link, tags } = cardData;
	```
- 변수 ‘type’이 work인지 notes인지 논리연산자로 구분해 `<Work />` 또는 `<Notes />`컴포넌트를 만들고 인자로 값을 넘겨준다.
- 위에서 사용한 메서드와 접근연산자를 잘 응용해 Work, Notes 컴포넌트에 데이터를 채워넣는다.


- `target: _parent`로 하여 부모 프레임에서 링크가 열리도록 했다.