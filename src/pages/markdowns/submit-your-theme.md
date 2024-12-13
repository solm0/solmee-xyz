---
aliases:
  - 커뮤니티에 테마 제출하기
layout: ../../layouts/LogbooksLayout.astro
type: logbooks
date: 2024-07-02
tags:
  - web
  - obsidian
  - css
overview: false
projectId: obsidian-theme-agate
sequence: 6
---
완성한 테마를 Obsidian 커뮤니티에 업로드한다. Obsidian 팀의 리뷰를 통과하면 다른 사용자들이 나의 테마를 다운로드받을 수 있게 되고, Digital Garden에서도 사용할 수 있게 된다.

## CSS 정리하기
계속 업데이트할 것을 염두에 둔다면 CSS를 깔끔하게 정리해 놓아야 한다.

- accent color, border-width, radius 같은 여러 군데에서 쓰는 값들을 [[obsidian-css-variable|CSS variable]]로 리팩터링했다.
- Obsidion docs에 있는 순서대로 CSS를 정리했다.
- 최대한 상위요소인` :root`, `body`, `.theme-light`에 작성했다.
- 선택자도 최대한 단순하게 했다.


## 에셋 임베드하기
[Embed fonts and images in your theme](https://docs.obsidian.md/Themes/App+themes/Embed+fonts+and+images+in+your+theme#Consider%20file%20size)
보안을 위해 네트워크를 통해 콘텐츠를 가져오는 것을 허용하지 않기 때문에 embed해야 한다.  `url()`함수를 통해 url을 패스하는 것이다.
```css
url("data:<MIME_TYPE>;base64,<BASE64_DATA>")
```
Base64로 인코딩을 해야 한다.

기존 코드의 폰트 링크는 woff2로 되어 있는데, 그대로 converter에 붙여넣으니 인코딩이 안됐다. 다행히도 내가 쓰는 모든 폰트가 인터넷에 ttf, woff로 올라와 있어서 [convertio](https://convertio.co/)에서 woff로, [Woff2Base64](https://hellogreg.github.io/woff2base/)에서 Base64로 변환할 수 있었다.

## GitHub Actions
[Release your theme with GitHub Actions](https://docs.obsidian.md/Themes/App+themes/Release+your+theme+with+GitHub+Actions)
버전을 업데이트할 수 있게 하는 것 같다. 근데 나는 첫 제출을 안해서 그런지 권한이 없다고 떠서 아직 못함.

## 제출하기
[Submit your theme](https://docs.obsidian.md/Themes/App+themes/Submit+your+theme)
LICENSE, README md, manifest.json, theme.css를 규칙에 맞게 포함한 리포지토리를 만들고 [이곳](https://github.com/obsidianmd/obsidian-releases/pulls)에 pull request를 하면 먼저 봇이 검사하고 사람 관리자를 지정한다.