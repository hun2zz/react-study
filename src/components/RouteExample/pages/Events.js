import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EventList from "../components/EventList";
import EventsNavigation from "../layout/EventNavigation";

// const DUMMY_EVENTS = [
//   {
//     id: "1",
//     title: "여름맞이 이벤트",
//     image:
//       "https://www.dawonnews.co.kr/news/photo/202206/95792_100192_2649.jpg",
//     date: "2024-07-20",
//     description: "여름맞이 이벤트입니다.",
//   },
//   {
//     id: "2",
//     title: "건강관리 이벤트",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTbENLWw4qvXCg0BI8M0jEfFMg_hW7RAbLg&s",
//     date: "2024-07-15",
//     description: "건강이벤트 입니다. 건강!",
//   },
// ];

const Events = () => {
  //loader가 리턴한 데이터 받아오기 .
  const eventList = useLoaderData();

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList}></EventList>
    </>
  );
};

export default Events;

//loader를 app.js로부터 아웃소싱
export const loader = async () => {
  const response = await fetch("http://localhost:8282/events");
  if (!response.ok) {
    const errorText = await response.text();
    throw new Response(JSON.stringify({ messages: errorText }), {
      status: response.status,
    });
  }

  //로더가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트에서
  //언제든 불러서 사용 가능
  return response;
};
