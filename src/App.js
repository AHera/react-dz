/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Notes from "./data/Notes.json";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div
      css={css`
        margin: auto;
        max-width: 800px;
      `}
    >
      <NotesList notes={Notes} />
    </div>
  );
}

export default App;
