---
aliases:
  - 나는 chatGPT의 클라이언트다
layout: ../../layouts/JournalsLayout.astro
type: journals
date: 2024-12-24
tags:
  - chat_gpt
  - web
---
## chatGPT의 우문현답
난 개발자가 아니라서 그럴 필요 없는데도, 컴공을 부전공하다보니 개발자들의 장인정신(?) 일부를 받아들였는지 어느새 인터넷이나 chatGPT에게서 코드를 긁어올 때마다 죄책감을 느끼고 그 코드를 다 이해해야 한다, 더 나아가 직접 쓸 수 있어야 한다고 욕심을 내기 시작했다. 긁어온 코드의 양이 불어나는 모습을 보며 스스로가 무능력하다고 느꼈다. 이런 심정을 chatGPT에게 한탄했더니 이런 답을 받았다.

> ... In fact, pulling from multiple resources, adapting, and combining snippets is a skill in itself. As a designer, knowing how to integrate and use code effectively without diving into every technical detail is already an achievement. ...


이후로는 그런 생각을 하지 않았으니, 이 말이 꽤나 나에게 영향력이 컸다보다. 인공지능한테 위로받다니!

## 나는 chatGPT를 필요로 한다
chatGPT 덕분에 혼자서는 절대로 만들 수 없었을 것들을 만들 수 있었다. 인터넷이 있어도 혼자서는 역부족이다. 몇몇 라이브러리들은 구글에도 자료가 많이 없고, 영어에 꽤나 익숙해졌긴 하지만 언어장벽이 분명 존재한다.

그리고 코드를 직접 썼다 해도 꼭 chatGPT에게 검수 한 번 맡겨서 최적화를 해야 한다. chatGPT가 항상 더 가독성도 좋고 깔끔해진 코드를 뱉어준다. 가끔 ui 컴포넌트 단위의 리팩터링을 스스로 하기도 하지만 더 낮은 레벨에서의 최적화는 언어에 대한 지식이나 경험치의 한계 때문에 부족하다. 그리고 이건 나뿐만이 아니라 개발자 커뮤니티에서도 이런 부분은 인공지능을 사용하는 게 효율적이라는 글을 자주 본다.

디버깅도 대부분 혼자 못한다. 콘솔에 찍히는 에러는 나에게는 암호 같지만 chatGPT는 눈 깜짝할 새에 읽어낸다.

## 툴에 의존하는 것과 툴로부터 독립하는 것
그럼 chatGPT가 없으면 나는 모든 것을 잃는 건가? chatGPT가 나의 '동아줄'인가? 라기엔 원래 사람들은 다른 사람을 이용해서 혼자서는 못하는 일들을 한다. 나와 chatGPT의 관계도 그런 분업 관계인 것이다. 회사에서 분업을 할때 디자이너와 개발자로 들자면 디자이너는 개발자가 있으면 작동한다. 딱 특정한 개발자일 필요는 없다. 반대도 마찬가지다.

내가 chatGPT에 의존하지 않고 독립된 능력을 갖는다는 것은 걔가 하는 일들을 나도 할 수 있을 정도로 꿰고있어야 한다는 게 아니라 chatGPT가 아닌 다른 도구라도 사용해서 똑같이 뭔가를 만들 수 있으면 되는것이다.

나 스스로가 온전하게 내 영역에서 작동하고 다른 모듈과 널리 상성이 좋은 모듈이 되면 되는 것이다. 소프트웨어 라이브러리도 한 기능에 주력한채로 다른 프레임워크나 라이브러리와 결합해 쓸 수 있는 라이브러리가 좋지, 자기 혼자 이것저것 다할 수 있어야 좋은 건 아니다.

## 내가 chatGPT를 능동적으로 이용하는 방법: 코드 주문제작
나는 코드를 보는 해상도가 높지 않지만 어떻게 구현할지 대강은 알고있다.
- 내가 수도코드까지만 만들고 chatGPT한테 넘겨준다
- chatGPT가 코드를 만들어준다
- 내가 코드를 읽어본 후에 전체/부분을 가져온다

코드를 주문제작? 커스텀? 한다고나 할까? 내가 나 자신의 디자이너임과 동시에 chatGPT를 고용한 클라이언트라고도 볼 수 있을 것 같다.