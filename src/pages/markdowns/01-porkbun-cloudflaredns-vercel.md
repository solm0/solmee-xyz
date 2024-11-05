---
title: "01. Porkbun 도메인, cloudflare DNS, Vercel 호스팅"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-10-03
tags: ["web", "vercel", "porkbun", "cloudflare", "domain"]
thumbnail:
	url:
	alt:
dashboard: false
---
(아직 웹사이트 만들기도 전이지만) 도메인이라는 것을 사보자!

## 정보 얻은 방법
1. [생활코딩 도메인 강의](https://www.inflearn.com/course/%EC%9D%B8%ED%84%B0%EB%84%B7-%EA%B8%B0%EB%B3%B8-%EB%8F%84%EB%A9%94%EC%9D%B8-%ED%98%B8%EC%8A%A4%ED%8A%B8-%ED%8F%AC%EC%9B%8C%EB%94%A9-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0?srsltid=AfmBOoqeouKDI0tDz9vjqYTsc_zwd21a2H8K5v1YKmKfF1_uoZLvnepz "https://www.inflearn.com/course/%EC%9D%B8%ED%84%B0%EB%84%B7-%EA%B8%B0%EB%B3%B8-%EB%8F%84%EB%A9%94%EC%9D%B8-%ED%98%B8%EC%8A%A4%ED%8A%B8-%ED%8F%AC%EC%9B%8C%EB%94%A9-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0?srsltid=AfmBOoqeouKDI0tDz9vjqYTsc_zwd21a2H8K5v1YKmKfF1_uoZLvnepz")
	- 무려 2012년의 것이지만 무엇을 해야하는지 대략적으로 감 잡을 수는 있다.
2. 레딧 r/webhosting, r/webdev에서 검색하면 도메인 provider들에 대해 이러쿵저러쿵 떠드는 사람들이 있다.
	- [best domain provider](https://www.reddit.com/r/webhosting/comments/1dnjqgy/best_domain_provider/ "https://www.reddit.com/r/webhosting/comments/1dnjqgy/best_domain_provider/") 
	- [cloudflare vs porkbun vs namecheap](https://www.reddit.com/r/webdev/comments/1c8xc8p/cloudflare_vs_porkbun_vs_namecheap_an_opinion_if/ "https://www.reddit.com/r/webdev/comments/1c8xc8p/cloudflare_vs_porkbun_vs_namecheap_an_opinion_if/")
	- 대체적으로 godaddy에 부정적이고 porkbun과 cloudflare에 긍정적이다.
	- 경험에서 우러나오는 꿀팁?들도 볼 수 있다. Domain registration과 DNS Management, Web hosting 서비스를 한 기업에서 제공하기도 하지만 가능하면 분리하라고 한다. [https://www.wiki.balug.org/wiki/doku.php?id=system:registrars](https://www.wiki.balug.org/wiki/doku.php?id=system:registrars)
3. chatGPT와의 1:1 맞춤 상담

## 최종 선택
- Domain Registration(도메인을 산다): Porkbun
- DNS Management(그 도메인을 도메인 이름 시스템에 올린다): Cloudflare
- Web Hosting(그 도메인을 내 웹사이트에 달아서 퍼블리시한다): Vercel

## 구매한 도메인
- solmee.xyz
	- 2달러에 샀고 Renewal은 12달러로 가장 저렴했다.
	- .xyz에 대한 여론을 살펴보니 스팸사이트 같다는 말이 많았지만 뭐 회사 웹사이트도 아니니 상관없다.

## 과정 기억나는대로
1. Domain Registration: Porkbun
	- porkbun 계정 만들기
	- 원하는 도메인 구매하기
2. DNS Management: Cloudflare
	- cloudflare 무료플랜 계정 만들기
	- 구매한 도메인 Add
	- cloudflare > Overview에서 nameserver들을 복사, porkbun > Domain Management > NAMESERVERS 에 있던 것들 지우고 붙여넣기. [how nameservers work](https://www.youtube.com/shorts/-S1a6YqKL7Q "https://www.youtube.com/shorts/-S1a6YqKL7Q")
		- → 아래 dns record까지 정상적으로 되면 상태 Pending에서 Active로 변함
	- cloudflare > DNS > Settings > Enable DNSSEC 한 후 아래 DS Record 열어서 쓰여있는거 porkbun > Domain Management > REGISTRY DNSSEC에 갖다붙이고 Create → 한시간 이내에 Success 떴음
3. Hosting: Vercel
	- vercel에서 깃헙 리포(hello world가 들어있는) deploy해서 프로젝트 만들기
	- vercel > Settings > Domains에서 도메인 Add
	- vercel > Settings > Domains의 A Record와 CNAME을 cloudflare > DNS > Records에 Add해야됨.
		- cloudflare DNS를 쓰니까 DNS record를 cloudflare에다 적어야됨... 모르고 Porkbun에 적어놔서 vercel에서 invalid configuration이 계속 안 없어졌음
		- 옛날에는 propagation이 24-48시간 걸렸다 하지만 cloudflare 같이 큰회사는 몇분안에 된다 함. 나도 문제 고쳤더니 거의 바로 됐음.
4. ERR_TOO_MANY_REDIRECTS 에러
	- cloudflare > SSL/TLS > Overview 에서 SSL/TLS encryption을 Flexible에서 Full(strict)로 바꿔주니 해결.