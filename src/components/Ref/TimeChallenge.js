import React, { useState } from "react";
let timer;
const TimerChallenge = ({ title, targetTime }) => {
  //타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟 시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = (e) => {
    timer = setTimeout(() => {
      // console.log("시간만료");
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  //이 상황엠 stop이 작동핮 ㅣ않는 이유는 start 시의 timer 변수가 지역변수이기 때문에
  // 상태변수의 setter 호출 시 리렌더링이 되면서 새로운 지역변수로 바뀜
  // stop 시의 timer와 start 시의 timer는 다른 변수다.


  //전역변수로 timer 설정 시 5초 - > 1초-> -> 1초 -> 5초를 연속클릭하면
  //5초짜리 timer가 정상작동하지 않는 이유는
  //4개의 TimeChallenge 컴포넌트가 1개의 timer를 공유하여
  //처음 5초짜리 timer가 1초짜리 timer에게 덮어씌워지기 때문.
  const stopHandler = (e) => {
    console.log("stop");
    clearTimeout(timer);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? `Time is running...` : `Timer inactive`}
      </p>
    </section>
  );
};

export default TimerChallenge;
