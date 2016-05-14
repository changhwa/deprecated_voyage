해당 프로젝트는 Deprecated 되었습니다.  
자바버전으로 다시 만들고 있습니다. ( react / java )


# Voyage
> 글쓰기를 좋아하고 여러가지 패턴을 하나에서 관리하고 싶은 욕망에서 시작된 프로젝트 입니다.  
> 오늘 하루의 시작을 `voyage` 로 시작하여 `voyage` 로 끝내는 것을 목표로 합니다.  
> 에버노트의 개인화라고 보셔도 좋습니다.

## Development Guidelines
> 프로젝트 실행 & 빌드시에는 환경변수(프로필)을 설정합니다.
> 개발 : dev (디폴트) , 운영 : prod
> ex) gulp build --prod  

### 프로젝트 설정하기
```
git clone https://github.com/changhwa/voyage.git
(client) cd voyage/client && npm install
(server) cd voyage/server && npm install
```

### 프로젝트 실행하기(개발모드)
```
# 각 프로젝트 루트 폴더에서 실행한다 (client, server)
gulp
```

### 프로젝트 테스트코드실행
```
# 각 프로젝트 루트 폴더에서 실행한다 (client, server)
gulp test
```

### 프로젝트 빌드하기
```
# client 폴더에서 실행
gulp build
```

### 프로젝트 배포하기
```
dist 폴더 참고 (index.html / [hash].js)
```

## 개발 참여 방법
1. develop 브랜치를 기준으로 fork 한다.  
2. 원하는 기능을 개발한다.  
3. [커밋가이드라인](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)에 맡게 커밋 메세지를 작성하여 커밋한다.  
4. Pull Request 을 보낸다.  
5. 만약 이슈번호를 기준으로 작업한거라면 맨 마지막줄에 Closes #이슈번호를 붙여준다.
6. 만약 이슈번호를 활용시 마일스톤과 라벨을 확인한다.
7. 기능 제안시에는 라벨은 idea 로 하고 Assign 은 `changhwaoh` 로 지정한다.


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

- [X] User
    - [ ] facebook
    - [X] github
    - [ ] user sync 
- [ ] Roles
- [ ] Blogging
    - [ ] Custom Parser
    - [ ] Link Document
    - [ ] Tag
    - [ ] blogging by email
    - [ ] backup
    - [ ] history
    - [ ] export / import
    - [ ] dictionary
- [ ] Task
    - [ ] private calendar
    - [ ] share calendar
- [ ] Diary
- [ ] Photo
    - [ ] photo gallery
    - [ ] instagram
- [ ] memo
    - [ ] memo board
- [ ] Evernote
    - [ ] 기획
- [ ] bot
    - [ ] 개봉 예정 영화정보가져오기
    - [ ] 플러그인화 할 수 있도록 개발
    - [ ] 계속추가예정..
- [ ] Desktop Application
- [ ] ios
- [ ] android
