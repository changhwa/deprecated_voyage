# Voyage
> 글쓰기를 좋아하고 여러가지 패턴을 하나에서 관리하고 싶은 욕망에서 시작된 프로젝트 입니다.  
> 에버노트의 개인화라고 보셔도 좋습니다.

## Development Guidelines
> 프로젝트 실행 & 빌드시에는 환경변수(프로필)을 설정합니다.
> 개발 : dev (디폴트) , 운영 : prod
> ex) gulp build --prod  

### 프로젝트 설정하기
```
git clone https://github.com/changhwa/voyage.git
cd voyage && npm install
```

### 프로젝트 실행하기(개발모드)
```
gulp
```

### 프로젝트 테스트코드실행
```
gulp test
```

### 프로젝트 빌드하기
```
gulp build
```

### 프로젝트 배포하기
```
dist 폴더 참고 (index.html / [hash].js)
```

### Tips

#### Webstorm 에서 mocha 설정하기 
1. Run / Debug Configuration 에서 mocha 추가  
2. Extra options에 `--compilers js:babel-register --require ./test/test.helper.js --recursive` 를 추가  
3. Test 디렉토리 지정

#### DevTools 사용하기 
1. [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) 에서 확장프로그램 설치  
2. 현재는 크롬만 가능하나 Roadmap 에 firefox, safari 가 있네요.. 불편하면 화면에 붙이면 되는데 그럼 또 ui 보기가 어렵습니다.  
3. [참고사이트](https://github.com/zalmoxisus/redux-devtools-extension)

### Tasks

- [ ] User
- [ ] Roles
- [ ] Blogging
- [ ] Task