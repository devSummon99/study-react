import React from "react";

function Note({ title, body }) {
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  );
}

export default Note;
