import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetail Page</h1>
      <p>Event ID : {params.prodId}</p>
    </>
  );
};

export default EventDetail;
