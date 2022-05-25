/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Notes from "./data/Notes.json";
import NotesList from "./components/NotesList";

import Popup from "./components/Popup";

function App() {
  return (
    <div
      css={css`
        margin: auto;
        max-width: 800px;
      `}
    >
      <Popup />
      <NotesList notes={Notes} />
    </div>
  );
}

export default App;
