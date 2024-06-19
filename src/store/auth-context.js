import React from "react";
//로그인 관련 상태 데이터들을 집중관리하는 파일임.

//컨텍스트는 데이터 중간 저장소 - 생성 시 관리할 기본 데이터를 명시
//데이터 값은 타입 기본값을 명시
const dateContext = React.createContext({
  thisDate: new Date(),
  setThisDate: () => {},
});

export default dateContext;
