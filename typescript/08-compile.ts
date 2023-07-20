// typescript compile, setting
/* 

★ tsc --init
  : typescript json config 파일 생성

★ tsc --watch 또는 tsc --w
  : 감시모드, typescript 파일에 변경사항이 생기면 자동으로 컴파일 실행
    실행하고 종료할 때 ctrl + c

★ tsc 파일명.ts
  : 자바스크립트 파일로 컴파일. 파일명을 적으면 해당 파일만 컴파일 됨.
    tsc 만 적으면 제너릭 방식으로 같은 폴더 내에 있는 모든 ts 파일을 js 로 컴파일함

★ config 파일 내의 files 속성 (최상위)
  : tsc로 제너릭 컴파일 시 컴파일에 포함될 파일 이름을 명시할 수 있음 -> 프로젝트의 규모가 작은 경우(수동으로 기입하는 것이기 때문)

★ config 파일 내의 include & exclude (최상위)
  : tsc 실행 시 컴파일될 디렉토리나 파일 지정 -> include
    tsc 실행 시 컴파일에서 제외될 파일 지정 -> exclude
    두 속성은 대체로 같이 쓰임! 디렉토리나 파일의 경로는 config 파일의 위치를 기준으로 함.
    exclude 는 파일명을 써주기보다는 특정한 패턴 형태로 적어서 제외시키는 경우가 많고, 사용하게 될 경우 node_module 은 꼭 추가해줘야함

★ outDir (compilerOptions 내의 속성)
  : 컴파일된 자바스크립트가 저장될 위치를 지정함
    보통 ts 파일은 src 에서 작업하고 js 는 dist에 저장

★ target (compilerOptions 내의 속성)
  : typescript 파일을 컴파일할 때의 javascript 버전을 지정(es6, es2016 ...)

★ strict (compilerOptions 내의 속성)
  : typescript의 오류 검증을 끄거나 켤 수 있음

★ allowJs (compilerOptions 내의 속성)
  : typescript 내에 javascript 파일 허용

★ noEmit (compilerOptions 내의 속성)
  : js파일 생성 중지

★ noEmitOnError (compilerOptions 내의 속성)
  : typescript 내의 오류가 있으면 컴파일 되지 않도록 하는 속성

★ lib (compilerOptions 내의 속성)
  : 타입설정 라이브러리에 관한 속성. dom 은 기본값
 */