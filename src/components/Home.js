import React from "react";

export default function Home(props) {
  return (
    <div id="home">
      <h1>
        {props.username} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}
