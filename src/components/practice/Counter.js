import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

const Counter = () => {
  const [number, setItemTitle] = useState(0);

  const clickHandler = (e) => {
    //useStatedml setter는 상태값을 업데이트 할 때
    //렌더링 전까지 이전 상태값을 참조함

    //해결방법 : 함수형 업데이트를 사용
    if (e.target.className === "btn1") {
      setItemTitle((prev) => {
        console.log(prev);
        //변경 이후값을 반환
        return prev + 1;
      });

      setItemTitle((number) => number + 1);
      //상태값의 변경은 실시간으로 일어나지 않음.
      // 해결 방법 : useEffect 훅으로 해결 ( 뒤에 배움 )
      console.log("변경 이후 값", number);
    } else {
      setItemTitle(number - 1);
    }
  };
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button className="btn1" onClick={clickHandler}>
        증가
      </button>

      <button className="btn2" onClick={clickHandler}>
        감소
      </button>
    </div>
  );
};

export default Counter;
