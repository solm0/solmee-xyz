---
aliases:
  - 도메인 사서 웹사이트에 붙이기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-10-03
tags:
  - web
  - vercel
  - porkbun
  - cloudflare
  - domain
  - error
overview: false
projectId: solmee-xyz
sequence: 4
---
(아직 웹사이트 만들기도 전이지만) 도메인이란걸 사보자!

## 사전 조사
1. [생활코딩 도메인 강의](https://www.inflearn.com/course/%EC%9D%B8%ED%84%B0%EB%84%B7-%EA%B8%B0%EB%B3%B8-%EB%8F%84%EB%A9%94%EC%9D%B8-%ED%98%B8%EC%8A%A4%ED%8A%B8-%ED%8F%AC%EC%9B%8C%EB%94%A9-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0?srsltid=AfmBOoqeouKDI0tDz9vjqYTsc_zwd21a2H8K5v1YKmKfF1_uoZLvnepz "https://www.inflearn.com/course/%EC%9D%B8%ED%84%B0%EB%84%B7-%EA%B8%B0%EB%B3%B8-%EB%8F%84%EB%A9%94%EC%9D%B8-%ED%98%B8%EC%8A%A4%ED%8A%B8-%ED%8F%AC%EC%9B%8C%EB%94%A9-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0?srsltid=AfmBOoqeouKDI0tDz9vjqYTsc_zwd21a2H8K5v1YKmKfF1_uoZLvnepz")
	- 무려 2012년의 것이지만 무엇을 해야하는지 대략적으로 감 잡을 수는 있다.
2. r/webhosting, r/webdev
	- 도메인 provider들에 대해 알 수 있다.
	- [best domain provider](https://www.reddit.com/r/webhosting/comments/1dnjqgy/best_domain_provider/ "https://www.reddit.com/r/webhosting/comments/1dnjqgy/best_domain_provider/") , [cloudflare vs porkbun vs namecheap](https://www.reddit.com/r/webdev/comments/1c8xc8p/cloudflare_vs_porkbun_vs_namecheap_an_opinion_if/ "https://www.reddit.com/r/webdev/comments/1c8xc8p/cloudflare_vs_porkbun_vs_namecheap_an_opinion_if/"): 대체적으로 porkbun과 cloudflare에 긍정적이다.
3. [Registrar only or all-in-one or bundled service provider](https://www.wiki.balug.org/wiki/doku.php?id=system:registrars): Domain registration과 DNS Management, Web hosting 서비스를 한 곳에서 제공하기도 하지만 가능하면 분리하라고 한다.
4. chatGPT와의 1:1 맞춤 상담

## 결과
- Porkbun에서 'solmee.xyz'를 구매했다.
	- 2달러에 샀고 Renewal은 12달러로 가장 저렴했다.
	- .xyz에 대한 여론을 살펴보니 스팸사이트 같다는 말이 많았지만 뭐 회사 웹사이트도 아니니 상관없다.
- 관계자들
	- Domain Registration(도메인을 산다): Porkbun
	- DNS Management(그것을 도메인 이름 시스템에 올린다): Cloudflare
	- Web Hosting(그것을 내 웹사이트에 달아서 배포한다): Vercel


## 과정
처음이라 쉽지않았다. 기억나는 대로 과정을 적어보았다.

1. Domain Registration: Porkbun
	- porkbun 계정 만들기
	- 원하는 도메인 구매하기
2. DNS Management: Cloudflare
	- cloudflare 무료플랜 계정 만들기
	- 구매한 도메인 Add
	- Cloudflare > `Overview`에서 nameserver들을 복사, Porkbun > `Domain Management` 에서 NAMESERVERS 에 있던 것들 지우고 붙여넣기.
		- [네임서버가 작동하는 방식](https://www.youtube.com/shorts/-S1a6YqKL7Q "https://www.youtube.com/shorts/-S1a6YqKL7Q")
		- 아래 dns record까지 정상적으로 되면 상태 Pending에서 Active로 변함
	- Cloudflare > `DNS` > `Settings`에서 Enable DNSSEC 한 후 아래 DS Record 열어서 쓰여있는거 Porkbun > `Domain Management`에서 REGISTRY DNSSEC에 갖다붙이고 Create
		- 한시간 이내에 Success 떴음
1. Hosting: Vercel
	- Vercel > `Settings` > `Domains`에서 도메인 Add
	- Vercel > `Settings` > `Domains`의 A Record와 CNAME을 Cloudflare > `DNS`의 Records에 Add
		- cloudflare DNS를 쓰니까 DNS record를 cloudflare에다 적어야됨... 모르고 Porkbun에 적어놨었음
		- 옛날에는 propagation이 24-48시간 걸렸다 하지만 cloudflare 같이 큰회사는 몇분안에 된다 함. 나도 문제 고쳤더니 거의 바로 됐음.
2. ERR_TOO_MANY_REDIRECTS 에러
	- Cloudflare > `SSL/TLS` > `Overview` 에서 SSL/TLS encryption을 Flexible에서 Full(strict)로 바꿔주니 해결.

## 읽을거리 / 유용한 사이트
- Porkbun 설정하는거 [Pointing your domain to hosting with a records](https://kb.porkbun.com/article/54-pointing-your-domain-to-hosting-with-a-records)
- Cloudflare Docs [Dns Get Started](https://developers.cloudflare.com/dns/get-started/)
- Vercel Docs [Domains](https://vercel.com/docs/projects/domains)
- DNS Propagation Checker [Whatsmydns](https://www.whatsmydns.net/)