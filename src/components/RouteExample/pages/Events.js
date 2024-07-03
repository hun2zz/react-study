import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8282/events");
      const jsonDAta = await response.json();
      setEventList(jsonDAta);
    })();
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {eventList.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
