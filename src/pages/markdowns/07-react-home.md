---
title: "07. React Home"
layout: ../../layouts/LogbooksLayout.astro
type: "logbooks"
date: 2024-07-07
tags: ["web"]
thumbnail:
	url:
	alt:
dashboard: false
---

| key       | value      | 필수  | 비고                     |
| --------- | ---------- | --- | ---------------------- |
| type      | work/notes | *   | 무엇인지에 따라 컴포넌트 종류가 달라짐. |
| img       | 썸네일 링크     |     |                        |
| name      | 제목         | *   |                        |
| name_link | 링크         | *   |                        |
| note      | 하위 제목      |     | 링크와 갯수, 순서 일치          |
| note_link | 하위 링크      |     | 제목과 갯수, 순서 일치          |
| tags      | 태그         | *   | 필터링 대상                 |

##### 진행
[[use-firebase]]