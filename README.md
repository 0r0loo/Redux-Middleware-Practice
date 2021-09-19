# 폴더 구조

- api : api요청 하는 함수
- middlewares : 미들웨어 함수
- modules :
  - index : rootReducer 로 redux를 합침
  - prePosts : 덕스패턴 리팩토링 전
  - posts : 리팩토링 후
- lib : 리덕스의 반복되는 코드를 줄이기위한 함수
  - createPromiseThunk : 덩크 크리에이터 함수
  - handleAsyncActions : 리듀서 함수
  - reducerUtils : state를 바꾸는 함수
- components : view를 담당
- containers : state를 담당
- page : 보여줄 페이지
