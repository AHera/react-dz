/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import notes from "./data/notes.json";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="note-list">
      <NotesList notes={notes} />
    </div>
  );

  // return (
  //   <div
  //     css={css`
  //       background: yellow;
  //     `}
  //   ></div>
  // );
}

export default App;
