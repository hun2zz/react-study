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
