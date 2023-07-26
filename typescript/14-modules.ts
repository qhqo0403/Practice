// typescript module

// typescript는 파일 내에 export 나 await 키워드가 없으면 전역적으로 공유하고 있는 스크립트 파일로 간주함.
// 파일 내에 export 가 들어간 순간 모듈 모드로 전환됨!
// export하고 import 할 때는 파일 확장자를 ts가 아니라 js 로 써야함 -> 결국 js로 변환될 것이기 때문
// 변환된 파일을 확인해보면 export와 import 대신 module.export( export.개체명 ), require 키워드가 사용됨