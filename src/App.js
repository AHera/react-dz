/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import notes from "./data/notes.json";
import RandomID from "./components/RandomID";

function App() {
  const blocks = notes.map(({ title, date, description }) => (
    <div className="note" key={RandomID(5)}>
      <div className="title">{title}</div>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
    </div>
  ));

  return <div>{blocks}</div>;

  // return (
  //   <div
  //     css={css`
  //       background: yellow;
  //     `}
  //   ></div>
  // );
}

export default App;
